export default {
  'post /login': function(req, res, next) {
    const { account, password } = req.body

    if (account !== 'admin@gmail.com' || password !== '123456') {
      return res.json({
        errorCode: 501,
        data: null,
        message: '用户名或密码错误'
      })
    }

    res.json({
      errorCode: 200,
      data: {
        id: 1,
        name: 'admin',
        displayName: '管理员',
        email: 'admin@gmail.com',
        token: 'eyJ1c2VyTmFtZSI6ImFkbWluIiwidXNlcklkIjoiMSIsImFsZyI6IkhTMjU2IiwiZW'
      },
      message: null
    })
  }
}
