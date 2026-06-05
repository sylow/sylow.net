export function scrollToId(id: string) {
  if (typeof window === 'undefined') return
  if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
  const el = document.getElementById(id)
  if (el) {
    const NAV_H = 72
    const padTop = parseFloat(getComputedStyle(el).paddingTop) || 0
    const gap = Math.min(padTop, 24)
    const y = el.getBoundingClientRect().top + window.scrollY + padTop - NAV_H - gap
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
