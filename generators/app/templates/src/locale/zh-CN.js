/* eslint-disable */
<% if (answers.mobileOnly) { %>
export default {
  'app.LOADING': '加载中...',
  'errorInfo.LOAD_ERROR': '加载失败',
  'errorInfo.PAGE_NOT_FOUND_ERROR': '您访问的页面不存在，请确认连接是否正确',
  'errorInfo.BACK_TO_HOME': '回到首页',
  'overview.WELCOME': '欢迎欢迎',
  'overview.CARD_TITLE': '卡片',
  'overview.CARD_CONTENT': '这里可以放置卡片内容',
  'overview.CARD_FOOTER': '卡片底部'
}

<% } else { %>
export default {
  'app.LOG_OUT': '注销',
  'app.TOKEN_EXPIRED': '您的登入信息不正确或者已过期，请重新登录',
  'app.OVERVIEW': '总览',
  'errorInfo.PAGE_NOT_FOUND_ERROR': '您正在找的页面不存在，请确认链接是否正确',
  'errorInfo.LOAD_ERROR': '加载错误...',
  'errorInfo.BACK_TO_HOME': '回到首页',
  'copyrights.TEXT': 'Copyright © 2015-2018 xxx 版权所有. 沪ICP备xxx号 邮件支持support@xxx.com',
  'overview.PAGE_TITLE': '总览',
  'overview.NO': '序号',
  'overview.TASK': '任务',
  'overview.COMPLETED_STATUS': '完成状况',
  'overview.FINISHED': '完成',
  'overview.UNFINISHED': '未完成',
  'login.PAGE_TITLE': '登录',
  'login.WELCOME_TITLE': '欢迎登录',
  'login.REMEMBER_ME_TXT': '记住我',
  'login.SIGNIN_BTN_TXT': '立即登录',
  'login.ACCOUNT_EMPTY_ERROR': '邮箱账号不能为空',
  'login.ACCOUNT_FORMAT_ERROR': '邮箱账号不能为空',
  'login.ACCOUNT_LENGTH_ERROR': '邮箱账号不能超过50个字符',
  'login.ACCOUNT_PLACEHOLDER': '请输入邮箱账号',
  'login.PASSWORD_PLACEHOLDER': '请输入密码',
  'login.PASSWORD_EMPTY_ERROR': '密码不能为空',
  'login.PASSWORD_FORMAT_ERROR': '请输入不包含空格的6-16字符',
  'login.ACCOUNT_PWD_ERROR': '用户名或者密码错误！'
}

<% } %>
