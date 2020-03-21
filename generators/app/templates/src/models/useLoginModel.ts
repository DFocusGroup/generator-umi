import { useCallback, useState } from 'react'
import { request } from 'umi'
import qs from 'qs'
import { loadScript } from '@/helpers/loader'
import { getToken, setToken, getRememberme, setRememberme } from '@/helpers/storage'

export default function useLoginModel() {
  const [currentToken, setCurrentToken] = useState(getToken())
  const [isRememberme, setCurrentRememberme] = useState(!!getRememberme())

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
        const query = qs.parse(window.location.search ? window.location.search.slice(1) : '')
        if (query.redirectTo) {
          window.location.href = query.redirectTo
          return
        }
        window.location.href = '/'
      } catch (error) {
        // ignore
      }
    },
    [setCurrentToken, isRememberme]
  )

  return {
    initBackground,
    currentToken,
    isRememberme,
    toggleRememberme,
    login
  }
}
