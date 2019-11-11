export function stylesheet (url) {
  return {
    rel: 'stylesheet',
    href: encodeURI(url)
  }
}

export function meta (name, content) {
  return { name, content }
}

export function script (src, body = false) {
  return {
    type: 'text/javascript',
    src,
    body
  }
}
