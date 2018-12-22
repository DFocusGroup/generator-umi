/* eslint-disable */
<% if (answers.mobileOnly) { %>
export default {
  ERROR_LOAD_ERROR: 'Loading error',
  ERROR_PAGE_NOT_FOUND_ERROR: 'The page you are openning is not exist, please verify URL',
  ERROR_BACK_TO_HOME: 'Back to home',
  OVERVIEW_WELCOME: 'Welcome',
  OVERVIEW_CARD_TITLE: 'Card',
  OVERVIEW_CARD_CONTENT: 'Put content here',
  OVERVIEW_CARD_FOOTER: 'Card footer'
}

<% } else { %>
export default {
  APP_LOG_OUT: 'Sign out',
  APP_OVERVIEW: 'Overview',
  APP_TOKEN_EXPIRED: 'Your authorization is incorrect or expired, please sign in again',
  ERROR_PAGE_NOT_FOUND_ERROR: 'The page you are openning is not exist, please verify URL',
  ERROR_LOAD_ERROR: 'Loading error...',
  ERROR_BACK_TO_HOME: 'Back home',
  COPYRIGHTS_TEXT: 'Copyright © 2015-2018 xxx ® All Rights Reserved. ICP No. xxx  Email: support@xxx.com',
  OVERVIEW_NO: 'ID',
  OVERVIEW_TASK: 'Task',
  OVERVIEW_COMPLETED_STATUS: 'Status',
  OVERVIEW_FINISHED: 'Finished',
  OVERVIEW_UNFINISHED: 'Unfinished',
  LOGIN_WELCOME_TITLE: 'Welcome',
  LOGIN_REMEMBER_ME_TXT: 'Remember me',
  LOGIN_SIGNIN_BTN_TXT: 'Sign in',
  LOGIN_ACCOUNT_EMPTY_ERROR: 'Email account cannot be empty',
  LOGIN_ACCOUNT_FORMAT_ERROR: 'Please enter the correct email format',
  LOGIN_ACCOUNT_LENGTH_ERROR: 'Email account cannot exceed 50 characters',
  LOGIN_ACCOUNT_PLACEHOLDER: 'Please enter your email account',
  LOGIN_PASSWORD_PLACEHOLDER: 'Please enter the password',
  LOGIN_PASSWORD_EMPTY_ERROR: 'Password cannot be empty',
  LOGIN_PASSWORD_FORMAT_ERROR: 'Please enter 6-16 characters without Spaces',
  LOGIN_ACCOUNT_PWD_ERROR: 'Account or Password is incorrect!'
}

<% } %>