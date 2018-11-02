import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Scrollbars } from 'react-custom-scrollbars'
import Loader from '@app/components/common/Loader'
import UsersList from './UsersList'
import styles from './index.scss'

const cs = classNames.bind(styles)

class Users extends Component {
  async componentDidMount() {
    try {
      await this.props.getUsers()
    } catch (error) {
      console.warn('<Users /> ERROR: ', error)
    }
  }

  userClick = id => {
    this.props.navigateTo(`/users/${id}`)
  }

  goToUserInfo = id => {
    this.props.navigateTo(`/users/${id}/info`)
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
          {users.length > 0 ? (
            <Scrollbars>
              <UsersList users={users} userClick={this.userClick} goToUserInfo={this.goToUserInfo} />
            </Scrollbars>
          ) : (
            <Loader opaque={true} />
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
