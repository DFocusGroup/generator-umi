import { connect } from 'dva'
import { Route, Redirect } from 'dva/router'
import PropTypes from 'prop-types'

import { getToken } from '../../helpers/storage'

function AuthRoute(props) {
  const { render, location, ...rest } = props
  return (
    <Route
      {...rest}
      render={props => {
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
        return render(props)
      }}
    />
  )
}

AuthRoute.propTypes = {
  render: PropTypes.func,
  location: PropTypes.object
}

export default connect(({ users }) => {
  return {
    users
  }
})(AuthRoute)
