<% if (answers.mobileOnly) { %>import en from 'antd-mobile/lib/locale-provider/en_US'

export const ANT_DESIGN_LANGS = {
  zh: undefined,
  en
}
<% } else { %>import zh from 'antd/lib/locale-provider/zh_CN'
import en from 'antd/lib/locale-provider/en_US'

export const ANT_DESIGN_LANGS = {
  zh,
  en
}
<% } %>