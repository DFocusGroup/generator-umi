import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { destoryGlobalSpinner } from '@/helpers/view'

function OpenPageLayout(props) {
  const { children } = props

  useEffect(() => {
    destoryGlobalSpinner()
  }, [])

  return <React.Fragment>{children}</React.Fragment>
}

OpenPageLayout.propTypes = {
  children: PropTypes.any
}

export default OpenPageLayout
