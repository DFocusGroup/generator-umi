/**
 * title: LOGIN_TITLE
 */
import { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, Row, Button, Col, Input, Checkbox, Icon } from 'antd'
import { formatMessage, FormattedMessage, getLocale } from 'umi-plugin-react/locale'

import { setDoNotRememberme, getDoNotRememberme, removeDoNotRememberme } from '@/helpers/storage'

import LanguageSwitch from '@/components/LanguageSwitch'
import GlobalFooter from '@/components/GlobalFooter'

import useAuthModel from '@/hooks/useAuthModel'

import styles from './index.less'

function Login({ form }) {
  const [rememberme, setRememberme] = useState(!getDoNotRememberme())
  const [signing, setSigning] = useState(false)

  const { sign } = useAuthModel()

  function goLogin(e) {
    e.preventDefault()

    const { validateFieldsAndScroll } = form

    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      setSigning(true)
      sign(values.account, values.password).then(data => {
        if (data.errorCode !== 200) {
          setSigning(false)
        }
      })
    })
  }

  function handleRememberme(e) {
    if (e.target.checked) {
      setRememberme(true)
      return removeDoNotRememberme()
    }
    setRememberme(false)
    return setDoNotRememberme()
  }

  const { getFieldDecorator } = form

  return (
    <div className={styles.login}>
      <div className={styles.header}>
        <LanguageSwitch currentLang={getLocale()} />
      </div>

      <div className={styles.form}>
        <div className={styles.welcomeTitle}>
          <span>
            <FormattedMessage id="LOGIN_WELCOME_TITLE" />
          </span>
        </div>
        <Form onSubmit={goLogin}>
          <Form.Item className={styles.formItem}>
            <Row type="flex" justify="space-between">
              <Col span={4}>
                <Icon type="user" className={styles.labelIcon} />
              </Col>
              <Col span={20}>
                {getFieldDecorator('account', {
                  rules: [
                    {
                      required: true,
                      message: formatMessage({
                        id: 'LOGIN_ACCOUNT_EMPTY_ERROR'
                      })
                    },
                    {
                      type: 'email',
                      message: formatMessage({
                        id: 'LOGIN_ACCOUNT_FORMAT_ERROR'
                      })
                    },
                    {
                      max: 50,
                      message: formatMessage({
                        id: 'LOGIN_ACCOUNT_LENGTH_ERROR'
                      })
                    }
                  ]
                })(
                  <Input
                    placeholder={formatMessage({
                      id: 'LOGIN_ACCOUNT_PLACEHOLDER'
                    })}
                    size={document.body.clientWidth >= 1600 ? 'large' : 'default'}
                    className={styles.input}
                  />
                )}
              </Col>
            </Row>
          </Form.Item>
          <Form.Item className={styles.formItem}>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: formatMessage({
                    id: 'LOGIN_PASSWORD_EMPTY_ERROR'
                  })
                },
                {
                  pattern: /^\S{6,16}$/,
                  message: formatMessage({
                    id: 'LOGIN_PASSWORD_FORMAT_ERROR'
                  })
                }
              ]
            })(
              <Row type="flex" justify="space-between">
                <Col span={4}>
                  <Icon type="lock" className={styles.labelIcon} />
                </Col>
                <Col span={20}>
                  <Input
                    type="password"
                    placeholder={formatMessage({
                      id: 'LOGIN_PASSWORD_PLACEHOLDER'
                    })}
                    size={document.body.clientWidth >= 1600 ? 'large' : 'default'}
                    className={styles.input}
                  />
                </Col>
              </Row>
            )}
          </Form.Item>
          <Row type="flex" justify="space-between" className={styles.remembermeLine}>
            <Checkbox checked={rememberme} className={styles.remembermeCheckbox} onChange={handleRememberme}>
              <FormattedMessage id="LOGIN_REMEMBER_ME_TXT" />
            </Checkbox>
          </Row>
          <Row type="flex" justify="center">
            <Button type="primary" htmlType="submit" onClick={goLogin} loading={signing} className={styles.submitBtn}>
              <FormattedMessage id="LOGIN_SIGNIN_BTN_TXT" />
            </Button>
          </Row>
        </Form>
      </div>

      <GlobalFooter />
    </div>
  )
}

Login.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
    validateFieldsAndScroll: PropTypes.func
  })
}

export default Form.create()(Login)
