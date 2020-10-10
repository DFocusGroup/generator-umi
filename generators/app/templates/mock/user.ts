import { Request, Response } from 'umi'
import { success, failure, SHOW_TYPE } from './_utils/helper'
import { UserAdmin, UserHanMeiMei, FAKE_ADMIN_TOKEN, FAKE_HANMEIMEI_TOKEN } from './_utils/LdapService'

export default {
  'get /user': function(req: Request, res: Response) {
    const token = req.get('Authorization')
    if (!token) {
      return res.json(
        failure({
          errorCode: 401,
          errorMessage: 'not signin',
          showType: SHOW_TYPE.SILENT
        })
      )
    }

    if (FAKE_ADMIN_TOKEN === token) {
      return res.json(success(UserAdmin))
    }

    if (FAKE_HANMEIMEI_TOKEN === token) {
      return res.json(success(UserHanMeiMei))
    }

    return res.json(
      failure({
        errorCode: 401,
        errorMessage: 'invalid token',
        showType: SHOW_TYPE.SILENT
      })
    )
  }
}
