import React from 'react'

import { Redirect } from 'umi'

function Home() {
  return <Redirect to="/dashboard/analysis" />
}

Home.requireSignin = false
Home.layout = 'BLANK'

export default Home
