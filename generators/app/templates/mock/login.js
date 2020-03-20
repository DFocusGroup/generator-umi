import { success, failure, FAKE_TOKEN, SHOW_TYPE } from './_helper'

export default {
  'post /login': function(req, res, next) {
    const { account, password } = req.body

    if (account !== 'admin' || password !== '123456') {
      return res.json(
        failure({
          errorCode: 405,
          errorMessage: 'account / password is incorrect',
          showType: SHOW_TYPE.WARN_MESSAGE
        })
      )
    }

    res.json(
      success({
        token: FAKE_TOKEN
      })
    )
  }
}
