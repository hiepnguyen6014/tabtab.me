// log the pageview with their URL
export const pageView = (window, url) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
      // page_path: `https://WEB.vn${url}`,
    })
  }
  
  // log specific events happening.
  // export const event = (window, { action, params }) => {
  //   window.gtag('event', action, params)
  // }

  export const event = (window, { action, category, label, value, search_term }) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      search_term: search_term
    })
  }