export function useReveal() {
  onMounted(() => {
    const els = Array.from(document.querySelectorAll('.reveal')) as HTMLElement[]
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('in'))
      return
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in')
          io.unobserve(en.target)
        }
      })
    }, { threshold: 0, rootMargin: '0px 0px -5% 0px' })
    els.forEach((e) => io.observe(e))
    const safety = window.setTimeout(() => {
      els.forEach((e) => e.classList.add('in'))
    }, 1500)
    onBeforeUnmount(() => { io.disconnect(); window.clearTimeout(safety) })
  })
}
