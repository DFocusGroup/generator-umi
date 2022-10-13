import { useCallback } from 'react';
import { useRequest, useModel } from '@umijs/max';
import { message } from 'antd';
import { useLocalStorageState } from 'ahooks';
import { doLogin } from '@/services';
import { USER_TOKEN_KEY } from '@/constants';

export default function LoginModel() {
  const initState = useModel('@@initialState');
  const [currentToken, setCurrentToken] = useLocalStorageState(USER_TOKEN_KEY, {
    defaultValue: ''
  });
  const [isRememberme, setCurrentRememberme] = useLocalStorageState('user-remember', {
    defaultValue: false
  });

  const { refresh } = initState;

  const toggleRememberme = useCallback(() => {
    const nextState = !isRememberme;
    setCurrentRememberme(nextState);
  }, [isRememberme, setCurrentRememberme]);

  const { run: login, loading: loadingLogin } = useRequest(doLogin, {
    manual: true,
    onSuccess: (res) => {
      if (!res) {
        message.error(`Login failed: sfdsf`);
        return;
      }
      setCurrentToken(res.token);
      refresh();
    },
    onError: (err) => {
      message.error(`Login failed: ${err.message}`);
    },
  });

  const logout = useCallback(() => {
    localStorage.clear()
    sessionStorage.clear()
    setCurrentToken('');
    refresh();
  }, [refresh]);

  return {
    currentToken,
    isRememberme,
    toggleRememberme,
    login,
    loadingLogin,
    logout,
  };
}
