import { success, failure, FAKE_TOKEN, SHOW_TYPE } from './_helper'

export default {
  'get /user': function(req, res) {
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

    if (FAKE_TOKEN !== token) {
      return res.json(
        failure({
          errorCode: 401,
          errorMessage: 'invalid token',
          showType: SHOW_TYPE.SILENT
        })
      )
    }

    return res.json(
      success({
        id: 1,
        name: 'admin',
        title: '管理员',
        email: 'admin@gmail.com',
        group: 'ADMIN',
        signature: '沙滩一卧两年半，今日浪打我翻身',
        avatar: '/avatar.jpg',
        permissions: ['VIEW_DASHBOARD_ANALYSIS', 'VIEW_DASHBOARD_MONITOR']
      })
    )
  }
}
