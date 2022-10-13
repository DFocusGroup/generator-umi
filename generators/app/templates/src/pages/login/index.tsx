import {
  SelectLang,
  useIntl,
  useModel,
  Navigate,
  useSearchParams,
} from '@umijs/max';
import { Tabs } from 'antd';
import { isNotEmpty, isInvalidInitState } from '@/utils';

import Title from './components/Title';
import AccountPane from './components/AccountPane';

const LoginPage: React.FC = () => {
  const { initialState } = useModel('@@initialState');
  const { formatMessage } = useIntl();
  const [searchParams] = useSearchParams();

  if (isNotEmpty<string>(initialState) && !isInvalidInitState(initialState)) {
    const redirectTo = searchParams.get('redirectTo');

    if (isNotEmpty<string>(redirectTo)) {
      return <Navigate to={decodeURIComponent(redirectTo)} />;
    }
    return <Navigate to="/" />;
  }

  return (
    <div className="w-screen h-screen bg-gray-200">
      <div className="w-[720px] h-[640px] absolute top-[50%] mt-[-320px] left-[50%] ml-[-360px] rounded-[5px] pt-[64px] pb-[136px] pl-[160px] pr-[160px] bg-white">
        <Title />
        <Tabs
          defaultActiveKey="accountway"
          className="mt-[35px]"
          items={[
            {
              label: formatMessage({ id: 'login_tab_account' }),
              key: 'accountway',
              className: 'pt-[25px]',
              children: <AccountPane />,
            },
          ]}
        />
      </div>
      <SelectLang className="float-right" />
    </div>
  );
};

export default LoginPage;
