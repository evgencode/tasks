import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Scrollbars } from 'react-custom-scrollbars'
import Loader from '@app/components/common/Loader'
import UsersList from './UsersList/container'
import styles from './index.scss'

const cs = classNames.bind(styles)

class Users extends Component {
  state = { loading: true }

  async componentDidMount() {
    const { getUsers, getTodos } = this.props
    try {
      await getUsers()
      await getTodos()
    } catch (error) {
      console.warn('<Users /> ERROR: ', error)
    }
    this.setState({ loading: false })
  }

  render() {
    const { users } = this.props
    return (
      <section className={cs('root')}>
        <AppBar position="static" className={cs('header')}>
          <Toolbar>
            <div className={cs('title')}>Users</div>
          </Toolbar>
        </AppBar>
        <div className={cs('scrollable')}>
          {this.state.loading ? (
            <Loader opaque={true} />
          ) : (
            <Scrollbars>
              <UsersList />
            </Scrollbars>
          )}
        </div>
      </section>
    )
  }
}

Users.propTypes = {
  getUsers: PropTypes.func
}

export default Users
