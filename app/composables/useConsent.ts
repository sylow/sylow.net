const STORAGE_KEY = 'sylow-consent'

type Consent = 'granted' | 'denied'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

// Cookie-consent state for Google Analytics (Consent Mode v2). The banner is
// shown until `choice` is set; the choice persists to localStorage and is
// replayed to gtag on load via the inline snippet in nuxt.config.ts.
export function useConsent() {
  const choice = useState<Consent | null>('sylow-consent', () => null)

  onMounted(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY)
      if (s === 'granted' || s === 'denied') choice.value = s
    } catch {}
  })

  function set(value: Consent) {
    choice.value = value
    try { localStorage.setItem(STORAGE_KEY, value) } catch {}
    window.gtag?.('consent', 'update', {
      analytics_storage: value === 'granted' ? 'granted' : 'denied',
    })
  }

  return {
    choice,
    accept: () => set('granted'),
    decline: () => set('denied'),
  }
}
