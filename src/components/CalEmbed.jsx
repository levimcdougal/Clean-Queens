import { useEffect, useRef } from 'react'

export default function CalEmbed({ calLink, namespace, layout = 'month_view' }) {
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
          const ns = ar[1]
          api.q = api.q || []
          if (typeof ns === 'string') {
            cal.ns[ns] = cal.ns[ns] || api
            p(cal.ns[ns], ar)
            p(cal, ['initNamespace', ns])
          } else {
            p(cal, ar)
          }
          return
        }
        p(cal, ar)
      }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')

    window.Cal('init', namespace, { origin: 'https://cal.com' })

    window.Cal.ns[namespace]('inline', {
      elementOrSelector: ref.current,
      config: { layout },
      calLink,
    })

    window.Cal.ns[namespace]('ui', {
      cssVarsPerTheme: { light: { 'cal-brand': '#1e5db8' }, dark: { 'cal-brand': '#1e5db8' } },
      hideEventTypeDetails: false,
      layout,
    })
  }, [calLink, namespace, layout])

  return <div ref={ref} style={{ width: '100%', minHeight: 800, overflow: 'visible' }} />
}
