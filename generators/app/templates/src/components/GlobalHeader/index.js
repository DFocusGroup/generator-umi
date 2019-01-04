import { connect } from 'dva'
import { Link } from 'react-router-dom'
import { Layout, Menu, Avatar } from 'antd'
import PropTypes from 'prop-types'
import { getLocale, FormattedMessage } from 'umi-plugin-react/locale'

import LanguageSwitch from '../LanguageSwitch'
import styles from './index.less'
import logoURL from '../../assets/logo.svg'

const KEYS_MAP = {
  '/overview': 'OVERVIEW'
}

function GlobalHeader(props) {
  const { dispatch, locationPathname, currentUser } = props

  function signout() {
    dispatch({ type: 'app/signout' })
  }

  return (
    <Layout.Header className={styles.layoutHeader}>
      <div className={styles.logoContainer}>
        <img src={logoURL} className={styles.logo} alt="" />
      </div>

      <div className={styles.navigation}>
        <Menu mode="horizontal" selectedKeys={[KEYS_MAP[locationPathname]]} style={{ width: '100%' }}>
          <Menu.Item key="OVERVIEW">
            <Link to="/overview">
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

GlobalHeader.propTypes = {
  locationPathname: PropTypes.string,
  currentUser: PropTypes.shape({
    name: PropTypes.string
  }),
  dispatch: PropTypes.func
}

export default connect(({ app, users }) => {
  return {
    locationPathname: app.locationPathname,
    currentUser: users.currentUser
  }
})(GlobalHeader)
