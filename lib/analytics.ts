export const GA_TRACKING_ID = 'G-X1P2TBCF36'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  (window as any).gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const logEvent = ({ action, category, label, value }) => {
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
