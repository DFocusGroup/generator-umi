/**
 * title: Login
 */
import { Component } from 'react'
import { connect } from 'dva'
import PropTypes from 'prop-types'
import { Form, Row, Button, Col, Input, Checkbox, Icon } from 'antd'
import { formatMessage, FormattedMessage, getLocale } from 'umi-plugin-react/locale'

import { getToken, setDoNotRememberme, getDoNotRememberme, removeDoNotRememberme } from '../../../helpers/storage'
import { redirectTo } from '../../../helpers/view'

import styles from './index.less'

import LanguageSwitch from '../../../components/LanguageSwitch'
import GlobalFooter from '../../../components/GlobalFooter'

class Login extends Component {
  static propTypes = {
    form: PropTypes.shape({
      getFieldDecorator: PropTypes.func,
      validateFieldsAndScroll: PropTypes.func
    }),
    login: PropTypes.object,
    dispatch: PropTypes.func,
    loading: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      rememberme: !getDoNotRememberme()
    }
  }

  componentDidMount() {
    // redirect to default page if token was received
    if (getToken()) {
      return redirectTo('/')
    }
  }

  goLogin = e => {
    e.preventDefault()

    const { validateFieldsAndScroll } = this.props.form

    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      this.props.dispatch({ type: 'login/login', payload: values })
    })
  }

  handleRememberme = e => {
    if (e.target.checked) {
      this.setState({
        rememberme: true
      })
      return removeDoNotRememberme()
    }
    this.setState({
      rememberme: false
    })
    return setDoNotRememberme()
  }

  render() {
    const { form, loading } = this.props

    const { getFieldDecorator } = form

    const isLoading = loading.effects['login/login']

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
          <Form onSubmit={this.goLogin}>
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
              <Checkbox
                checked={this.state.rememberme}
                className={styles.remembermeCheckbox}
                onChange={this.handleRememberme}
              >
                <FormattedMessage id="LOGIN_REMEMBER_ME_TXT" />
              </Checkbox>
            </Row>
            <Row type="flex" justify="center">
              <Button
                type="primary"
                htmlType="submit"
                onClick={this.goLogin}
                loading={isLoading}
                className={styles.submitBtn}
              >
                <FormattedMessage id="LOGIN_SIGNIN_BTN_TXT" />
              </Button>
            </Row>
          </Form>
        </div>

        <GlobalFooter />
      </div>
    )
  }
}

export default connect(({ loading, login, app }) => {
  return {
    loading,
    login
  }
})(Form.create()(Login))
