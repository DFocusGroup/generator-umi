/* eslint-disable */
<% if (answers.mobileOnly) { %>
export default {
  'app.LOADING': 'Loading...',
  'errorInfo.LOAD_ERROR': 'Loading error',
  'errorInfo.PAGE_NOT_FOUND_ERROR': 'The page you are openning is not exist, please verify URL',
  'errorInfo.BACK_TO_HOME': 'Back to home',
  'overview.WELCOME': 'Welcome',
  'overview.CARD_TITLE': 'Card',
  'overview.CARD_CONTENT': 'Put content here',
  'overview.CARD_FOOTER': 'Card footer'
}

<% } else { %>
export default {
  'app.LOG_OUT': 'Sign out',
  'app.OVERVIEW': 'Overview',
  'app.TOKEN_EXPIRED': 'Your authorization is incorrect or expired, please sign in again',
  'errorInfo.PAGE_NOT_FOUND_ERROR': 'The page you are openning is not exist, please verify URL',
  'errorInfo.LOAD_ERROR': 'Loading error...',
  'errorInfo.BACK_TO_HOME': 'Back home',
  'copyrights.TEXT': 'Copyright © 2015-2018 xxx ® All Rights Reserved. ICP No. xxx  Email: support@xxx.com',
  'overview.PAGE_TITLE': 'Overview',
  'overview.NO': 'ID',
  'overview.TASK': 'Task',
  'overview.COMPLETED_STATUS': 'Status',
  'overview.FINISHED': 'Finished',
  'overview.UNFINISHED': 'Unfinished',
  'login.PAGE_TITLE': 'Sign in',
  'login.WELCOME_TITLE': 'Welcome',
  'login.REMEMBER_ME_TXT': 'Remember me',
  'login.SIGNIN_BTN_TXT': 'Sign in',
  'login.ACCOUNT_EMPTY_ERROR': 'Email account cannot be empty',
  'login.ACCOUNT_FORMAT_ERROR': 'Please enter the correct email format',
  'login.ACCOUNT_LENGTH_ERROR': 'Email account cannot exceed 50 characters',
  'login.ACCOUNT_PLACEHOLDER': 'Please enter your email account',
  'login.PASSWORD_PLACEHOLDER': 'Please enter the password',
  'login.PASSWORD_EMPTY_ERROR': 'Password cannot be empty',
  'login.PASSWORD_FORMAT_ERROR': 'Please enter 6-16 characters without Spaces',
  'login.ACCOUNT_PWD_ERROR': 'Account or Password is incorrect!'
}

<% } %>