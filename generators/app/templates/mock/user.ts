import { Request, Response } from 'umi'
import { success, failure, FAKE_ADMIN_TOKEN, FAKE_HANMEIMEI_TOKEN, SHOW_TYPE } from './_helper'

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
      return res.json(
        success({
          id: 1,
          name: 'admin',
          title: '管理员',
          email: 'admin@gmail.com',
          group: 'ADMIN',
          signature: '沙滩一卧两年半，今日浪打我翻身',
          avatar: '/admin_avatar.png',
          permissions: ['VIEW_DASHBOARD_ANALYSIS', 'VIEW_DASHBOARD_MONITOR', 'VIEW_ADMIN_USER_MANAGEMENT']
        })
      )
    }

    if (FAKE_HANMEIMEI_TOKEN === token) {
      return res.json(
        success({
          id: 1,
          name: 'meimei.han',
          title: '韩梅梅',
          email: 'meimei.han@gmail.com',
          group: 'USER',
          signature: 'How are you? Fine, thank you, and you?',
          avatar: '/meimei_avatar.png',
          permissions: ['VIEW_DASHBOARD_ANALYSIS', 'VIEW_DASHBOARD_MONITOR']
        })
      )
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
