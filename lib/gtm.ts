export function pushEvent(event: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(window as any).dataLayer = (window as any).dataLayer || []
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(window as any).dataLayer.push(event)
}

export function trackEmailClick(pagePath?: string) {
  pushEvent({
    event: 'email_click',
    page_path: pagePath ?? (typeof window !== 'undefined' ? window.location.pathname : ''),
  })
}

export function trackFormSubmit(formName: string) {
  pushEvent({
    event: 'form_submit',
    form_name: formName,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  })
}
