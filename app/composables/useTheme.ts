const STORAGE_KEY = 'sylow-theme'

export function useTheme() {
  const dark = useState<boolean>('sylow-theme-dark', () => false)

  onMounted(() => {
    try {
      const s = localStorage.getItem(STORAGE_KEY)
      if (s) dark.value = s === 'dark'
    } catch {}
  })

  watch(dark, (v) => {
    const body = document.body
    body.setAttribute('data-theme', v ? 'dark' : 'light')
    body.classList.add('theme-fade')
    try { localStorage.setItem(STORAGE_KEY, v ? 'dark' : 'light') } catch {}
  }, { immediate: false })

  function toggle() { dark.value = !dark.value }

  return { dark, toggle }
}
