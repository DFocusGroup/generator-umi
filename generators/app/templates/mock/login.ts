import { Request, Response } from 'umi'
import { success, failure, SHOW_TYPE } from './_utils/helper'
import { FAKE_ADMIN_TOKEN, FAKE_HANMEIMEI_TOKEN } from './_utils/AuthService'

export default {
  'post /login': function(req: Request, res: Response) {
    const { account, password } = req.body

    if (account === 'admin' && password === '123456') {
      return res.json(
        success({
          token: FAKE_ADMIN_TOKEN
        })
      )
    }

    if (account === 'meimei.han' && password === '123456') {
      return res.json(
        success({
          token: FAKE_HANMEIMEI_TOKEN
        })
      )
    }

    return res.json(
      failure({
        errorCode: 405,
        errorMessage: 'account / password is incorrect',
        showType: SHOW_TYPE.WARN_MESSAGE
      })
    )
  }
}
