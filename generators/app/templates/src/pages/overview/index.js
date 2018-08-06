<% if (answers.mobileOnly) { %>import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { WhiteSpace, WingBlank, Flex, Card } from 'antd-mobile'
import { connect } from 'dva'

import LanguageSwitch from '../../components/LanguageSwitch'

class Overview extends Component {
  static propTypes = {
    loading: PropTypes.object,
    lang: PropTypes.string,
    locale: PropTypes.object,
    dispatch: PropTypes.func
  }

  render() {
    const { locale, lang, dispatch } = this.props
    return (
      <WingBlank size="md">
        <WhiteSpace size="lg" />

        <Flex justify="end">
          <LanguageSwitch currentLang={lang} onLangChange={l => dispatch({ type: 'app/switchLanguage', payload: l })} />
        </Flex>

        <Flex justify="center" align="center">
          {locale.WELCOME}
        </Flex>
        <WhiteSpace size="lg" />

        <Card>
          <Card.Header title={locale.CARD_TITLE} />
          <Card.Body>
            <div>{locale.CARD_CONTENT}</div>
          </Card.Body>
          <Card.Footer content={locale.CARD_FOOTER} />
        </Card>
      </WingBlank>
    )
  }
}

export default connect(({ app, loading }) => {
  return {
    loading,
    lang: app.lang,
    locale: app.locale.overview
  }
})(Overview)
<% } else { %>import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import { connect } from 'dva'

import styles from './index.less'

class Overview extends Component {
  static propTypes = {
    loading: PropTypes.object,
    locale: PropTypes.object,
    overview: PropTypes.object,
    dispatch: PropTypes.func
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'overview/queryTodoList'
    })
  }

  getColumns = () => {
    const { locale } = this.props
    return [
      {
        title: locale.NO,
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: locale.TASK,
        dataIndex: 'task',
        key: 'task'
      },
      {
        title: locale.COMPLETED_STATUS,
        dataIndex: 'completed',
        key: 'completed',
        render: (text, record) => {
          if (record.completed) {
            return <span className={styles.finished}>{locale.FINISHED}</span>
          }
          return <span className={styles.unfinished}>{locale.UNFINISHED}</span>
        }
      }
    ]
  }

  render() {
    const { overview } = this.props
    return (
      <div>
        <Table rowKey="id" columns={this.getColumns()} dataSource={overview.todoList} />
      </div>
    )
  }
}

export default connect(({ overview, app, loading }) => {
  return {
    loading,
    overview,
    locale: app.locale.overview
  }
})(Overview)
<% } %>