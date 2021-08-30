import React from 'react'
import { useModel } from 'umi'
import { Exception500 } from '@/components'
import { pick } from '@/helpers'
import { IPageComponent, IPageComponentProps } from '@/types'

/**
 * This page is used while system-level fault occurs at backend.
 * At that time, backend should redirect to /error. For exmaple, failture to authentication.
 * 
 * See: https://github.coupang.net/coupang/coupang-internal-app-okta-saml-practice/blob/master/src/main/java/com/example/oktasaml/config/SamlSecurityConfig.java#L248
 */
const Error: IPageComponent = (props: IPageComponentProps) => {
  const { width, height } = useModel('useAppModel', (m) => pick(m, 'width', 'height'))
  return <Exception500 style={{ width, height }} />
}

Error.title = 'ERROR_TITLE'
Error.layout = 'BLANK'
Error.requireSignin = false

export default Error
