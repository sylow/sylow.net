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
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })
    els.forEach((e) => io.observe(e))
    onBeforeUnmount(() => io.disconnect())
  })
}
