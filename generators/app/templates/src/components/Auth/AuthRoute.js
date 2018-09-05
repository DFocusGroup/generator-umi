import { Redirect } from 'dva/router'
import PropTypes from 'prop-types'

import { getToken } from '../../helpers/storage'

function AuthRoute(props) {
  const { children, location } = props
  if (!getToken()) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          search: `?from=${encodeURIComponent(location.pathname)}`
        }}
      />
    )
  }
  return children
}

AuthRoute.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object
}

export default AuthRoute
