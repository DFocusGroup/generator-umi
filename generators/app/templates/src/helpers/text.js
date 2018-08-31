import { formatMessage } from 'umi/locale'

export function getTitle(titleKey) {
  if (!titleKey) {
    return ''
  }

  return formatMessage({
    id: titleKey
  })
}
