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
