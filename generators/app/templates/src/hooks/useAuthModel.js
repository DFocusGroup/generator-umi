import { message } from 'antd'
import { createModel } from 'hox'
import { useState, useEffect } from 'react'
import { formatMessage } from 'umi-plugin-react/locale'

import API from '@/helpers/api'
import { getToken, setToken, clearAll } from '@/helpers/storage'
import { redirectTo } from '@/helpers/view'

function useAuthModel() {
  const [tokenState, setTokenState] = useState(getToken())
  const [currentUser, setCurrentUser] = useState(null)

  // fetch current user whenver tokenState changed
  useEffect(() => {
    if (tokenState) {
      API.get('/user').then(res => {
        setCurrentUser(res.data)
      })
    }
  }, [tokenState])

  useEffect(() => {
    if (!tokenState) {
      redirectTo('/o/login')
    }
  }, [tokenState])

  function sign(account, password) {
    return API.post('/login', {
      data: {
        account,
        password
      }
    }).then(data => {
      if (data.errorCode === 200) {
        setToken(data.data.token)
        setTokenState(data.data.token)
        redirectTo('/')
      } else {
        message.warning(formatMessage({ id: 'LOGIN_ACCOUNT_PASSWORD_ERROR' }))
      }
      return data
    })
  }

  function signout(account, password) {
    clearAll()
    setCurrentUser(null)
    setTokenState(null)
  }

  return {
    currentUser,
    sign,
    signout
  }
}

export default createModel(useAuthModel)
