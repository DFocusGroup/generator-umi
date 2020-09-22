import { useCallback, useState } from 'react'
import { request, useModel } from 'umi'
import { loadScript, getToken, setToken, getRememberme, setRememberme, clearAll } from '@/helpers'

export default function useLoginModel() {
  const initState = useModel('@@initialState')
  const [currentToken, setCurrentToken] = useState(getToken())
  const [isRememberme, setCurrentRememberme] = useState(!!getRememberme())

  const { refresh } = initState

  const initBackground = useCallback(() => {
    loadScript('/bg/particles.js', 'particlesJS').then(particlesJS => {
      particlesJS.load('bg-animate', '/bg/particlesjs-config.json')
    })
  }, [])

  const toggleRememberme = useCallback(() => {
    const nextState = !isRememberme
    setCurrentRememberme(nextState)
    setRememberme(nextState)
  }, [isRememberme, setCurrentRememberme])

  const login = useCallback(
    async (account: string, password: string) => {
      try {
        const res = await request('/login', {
          method: 'post',
          data: {
            account,
            password
          }
        })

        setCurrentToken(res.data.token)
        setToken(res.data.token, isRememberme)
        refresh()
      } catch (error) {
        // ignore
      }
    },
    [setCurrentToken, isRememberme, refresh]
  )

  const logout = useCallback(() => {
    clearAll()
    setCurrentToken('')
    refresh()
  }, [refresh])

  return {
    initBackground,
    currentToken,
    isRememberme,
    toggleRememberme,
    login,
    logout
  }
}
