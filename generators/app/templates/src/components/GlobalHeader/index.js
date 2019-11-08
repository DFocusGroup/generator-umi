import { Link } from 'react-router-dom'
import { Layout, Menu, Avatar } from 'antd'
import { getLocale, FormattedMessage } from 'umi-plugin-react/locale'

import LanguageSwitch from '@/components/LanguageSwitch'

import useAuthModel from '@/hooks/useAuthModel'
import useRouter from '@/hooks/useRouter'

import logoURL from '@/assets/logo.svg'

import styles from './index.less'

const KEYS_MAP = {
  '/': 'OVERVIEW'
}

function GlobalHeader(props) {
  const { currentUser, signout } = useAuthModel()
  const { pathname } = useRouter()

  return (
    <Layout.Header className={styles.layoutHeader}>
      <div className={styles.logoContainer}>
        <img src={logoURL} className={styles.logo} alt="" />
      </div>

      <div className={styles.navigation}>
        <Menu mode="horizontal" selectedKeys={[KEYS_MAP[pathname]]} style={{ width: '100%' }}>
          <Menu.Item key="OVERVIEW">
            <Link to="/">
              <FormattedMessage id="APP_OVERVIEW" />
            </Link>
          </Menu.Item>
          <Menu.Item key="line1">|</Menu.Item>
        </Menu>
      </div>

      <div className={styles.rightmenu}>
        <span className={styles.leftborder}>
          <span>
            <LanguageSwitch useDropdown currentLang={getLocale()} />
          </span>
        </span>

        <Menu mode="horizontal" className={styles.dropdownmenu} onSelect={signout}>
          <Menu.SubMenu
            title={
              <Avatar className={styles.avatar} size="large">
                {currentUser && currentUser.name && currentUser.name.slice(0, 2).toUpperCase()}
              </Avatar>
            }
          >
            <Menu.Item key="logout">
              <FormattedMessage id="APP_LOG_OUT" />
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </div>
    </Layout.Header>
  )
}

GlobalHeader.propTypes = {}

export default GlobalHeader
