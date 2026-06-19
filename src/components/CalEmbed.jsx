import { useEffect, useRef } from 'react'

const NAMESPACE = 'in-person-consultation-estimate'

export default function CalEmbed() {
  const ref = useRef(null)

  useEffect(() => {
    (function (C, A, L) {
      const p = function (a, ar) { a.q.push(ar) }
      const d = C.document
      C.Cal = C.Cal || function (...ar) {
        const cal = C.Cal
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          d.head.appendChild(d.createElement('script')).src = A
          cal.loaded = true
        }
        if (ar[0] === L) {
          const api = function (...apiAr) { p(api, apiAr) }
          const namespace = ar[1]
          api.q = api.q || []
          if (typeof namespace === 'string') {
            cal.ns[namespace] = cal.ns[namespace] || api
            p(cal.ns[namespace], ar)
            p(cal, ['initNamespace', namespace])
          } else {
            p(cal, ar)
          }
          return
        }
        p(cal, ar)
      }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')

    window.Cal('init', NAMESPACE, { origin: 'https://cal.com' })

    window.Cal.ns[NAMESPACE]('inline', {
      elementOrSelector: ref.current,
      config: { layout: 'month_view' },
      calLink: 'cleanqueens/in-person-consultation-estimate',
    })

    window.Cal.ns[NAMESPACE]('ui', {
      cssVarsPerTheme: { light: { 'cal-brand': '#1e5db8' }, dark: { 'cal-brand': '#1e5db8' } },
      hideEventTypeDetails: false,
      layout: 'month_view',
    })
  }, [])

  return <div ref={ref} style={{ width: '100%', minHeight: 800, overflow: 'visible' }} />
}
