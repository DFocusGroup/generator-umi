/**
 * title: Overview
 */
<% if (answers.mobileOnly) { %>import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { WhiteSpace, WingBlank, Flex, Card } from 'antd-mobile'
import { connect } from 'dva'
import { formatMessage, FormattedMessage } from 'umi/locale'

import LanguageSwitch from '../../components/LanguageSwitch'

class Overview extends Component {
  static propTypes = {
    loading: PropTypes.object,
    dispatch: PropTypes.func
  }

  render() {
    return (
      <WingBlank size="md">
        <WhiteSpace size="lg" />

        <Flex justify="end">
          <LanguageSwitch />
        </Flex>

        <Flex justify="center" align="center">
          <FormattedMessage id="OVERVIEW_WELCOME" />
        </Flex>
        <WhiteSpace size="lg" />

        <Card>
          <Card.Header
            title={formatMessage({
              id: 'OVERVIEW_CARD_TITLE'
            })}
          />
          <Card.Body>
            <div>
              <FormattedMessage id="OVERVIEW_CARD_CONTENT" />
            </div>
          </Card.Body>
          <Card.Footer
            content={formatMessage({
              id: 'OVERVIEW_CARD_FOOTER'
            })}
          />
        </Card>
      </WingBlank>
    )
  }
}

export default connect(({ app, loading }) => {
  return {
    loading
  }
})(Overview)
<% } else { %>import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import { connect } from 'dva'
import { formatMessage, FormattedMessage } from 'umi/locale'

import styles from './index.less'

class Overview extends Component {
  static propTypes = {
    loading: PropTypes.object,
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
    return [
      {
        title: formatMessage({
          id: 'OVERVIEW_NO'
        }),
        dataIndex: 'id',
        key: 'id'
      },
      {
        title: formatMessage({
          id: 'OVERVIEW_TASK'
        }),
        dataIndex: 'task',
        key: 'task'
      },
      {
        title: formatMessage({
          id: 'OVERVIEW_COMPLETED_STATUS'
        }),
        dataIndex: 'completed',
        key: 'completed',
        render: (text, record) => {
          if (record.completed) {
            return (
              <span className={styles.finished}>
                <FormattedMessage id="OVERVIEW_FINISHED" />
              </span>
            )
          }
          return (
            <span className={styles.unfinished}>
              <FormattedMessage id="OVERVIEW_UNFINISHED" />
            </span>
          )
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
    overview
  }
})(Overview)
<% } %>