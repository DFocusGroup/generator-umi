import Redirect from 'umi/redirect'

export default () => (
  <Redirect
    to={{
      pathname: '/overview',
      search: window.location.search
    }}
  />
)
