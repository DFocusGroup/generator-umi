import { defineMock } from '@umijs/max';
import { ErrorShowType } from '../src/types';
import {
  FAKE_ADMIN_TOKEN,
  FAKE_HANMEIMEI_TOKEN,
  UserAdmin,
  UserHanMeiMei,
} from './_utils/authStore';
import { success, failure } from './_utils/helper';

export default defineMock({
  'GET /api/user': (req, res) => {
    const token = req.get('Authorization');
    if (!token) {
      return res.json(
        failure({
          errorCode: 401,
          errorMessage: 'not signin',
          showType: ErrorShowType.SILENT,
        }),
      );
    }
    if (FAKE_ADMIN_TOKEN === token) {
      return res.json(success(UserAdmin));
    }
    if (FAKE_HANMEIMEI_TOKEN === token) {
      return res.json(success(UserHanMeiMei));
    }
    return res.json(
      failure({
        errorCode: 401,
        errorMessage: 'invalid token',
        showType: ErrorShowType.SILENT,
      }),
    );
  },
  'POST /api/login/': (req: any, res: any) => {
    const { account, password } = req.body;
    if (account === 'admin' && password === '123456') {
      return res.json(
        success({
          token: FAKE_ADMIN_TOKEN,
        }),
      );
    }
    if (account === 'meimei.han' && password === '123456') {
      return res.json(
        success({
          token: FAKE_HANMEIMEI_TOKEN,
        }),
      );
    }
    return res.json(
      failure({
        errorCode: 405,
        errorMessage: 'account / password is incorrect',
        showType: ErrorShowType.WARN_MESSAGE,
      }),
    );
  },
});
