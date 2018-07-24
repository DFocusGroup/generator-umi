export function getTitle(locale, titleKey) {
  if (!titleKey) {
    return ''
  }
  const [namespace, key] = titleKey.split('.')

  if (!locale[namespace]) {
    return ''
  }

  return locale[namespace][key]
}

export function leftPadding(text, length, pad) {
  const txt = `${text}`
  if (txt.length >= length) {
    return txt
  }
  return new Array(length - txt.length).fill(pad).join('') + txt
}
