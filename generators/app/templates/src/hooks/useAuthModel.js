import { createModel } from 'hox'
import API from '@/helpers/api'
import { useState, useEffect } from 'react'

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
