/* eslint-disable */
<% if (answers.mobileOnly) { %>
export default {
  ERROR_LOAD_ERROR_LOAD_ERROR: '加载失败',
  ERROR_LOAD_ERROR_PAGE_NOT_FOUND_ERROR: '您访问的页面不存在，请确认连接是否正确',
  ERROR_LOAD_ERROR_BACK_TO_HOME: '回到首页',
  OVERVIEW_WELCOME: '欢迎欢迎',
  OVERVIEW_CARD_TITLE: '卡片',
  OVERVIEW_CARD_CONTENT: '这里可以放置卡片内容',
  OVERVIEW_CARD_FOOTER: '卡片底部'
}

<% } else { %>
export default {
  APP_LOG_OUT: '注销',
  APP_TOKEN_EXPIRED: '您的登入信息不正确或者已过期，请重新登录',
  APP_OVERVIEW: '总览',
  ERROR_LOAD_ERROR_PAGE_NOT_FOUND_ERROR: '您正在找的页面不存在，请确认链接是否正确',
  ERROR_LOAD_ERROR_LOAD_ERROR: '加载错误...',
  ERROR_LOAD_ERROR_BACK_TO_HOME: '回到首页',
  COPYRIGHTS_TEXT: 'Copyright © 2015-2018 xxx 版权所有. 沪ICP备xxx号 邮件支持support@xxx.com',
  OVERVIEW_NO: '序号',
  OVERVIEW_TASK: '任务',
  OVERVIEW_COMPLETED_STATUS: '完成状况',
  OVERVIEW_FINISHED: '完成',
  OVERVIEW_UNFINISHED: '未完成',
  LOGIN_WELCOME_TITLE: '欢迎登录',
  LOGIN_REMEMBER_ME_TXT: '记住我',
  LOGIN_SIGNIN_BTN_TXT: '立即登录',
  LOGIN_ACCOUNT_EMPTY_ERROR: '邮箱账号不能为空',
  LOGIN_ACCOUNT_FORMAT_ERROR: '邮箱账号不能为空',
  LOGIN_ACCOUNT_LENGTH_ERROR: '邮箱账号不能超过50个字符',
  LOGIN_ACCOUNT_PLACEHOLDER: '请输入邮箱账号',
  LOGIN_PASSWORD_PLACEHOLDER: '请输入密码',
  LOGIN_PASSWORD_EMPTY_ERROR: '密码不能为空',
  LOGIN_PASSWORD_FORMAT_ERROR: '请输入不包含空格的6-16字符',
  LOGIN_ACCOUNT_PWD_ERROR: '用户名或者密码错误！'
}

<% } %>
