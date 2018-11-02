import classNames from 'classnames/bind'
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import { Ava0 } from '../../../../images'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import styles from './index.scss'

const cs = classNames.bind(styles)

const UserInfo = ({ user }) => {
  return (
    <section className={cs('root')}>
      <div className={cs('column-box')}>
        <AppBar position="static" className={cs('header')}>
          <Toolbar>
            <div className={cs('title')}>Информация о пользователе</div>
          </Toolbar>
        </AppBar>
        {user && (
          <div className={cs('scrollable')}>
            <Scrollbars>
              <Paper className={cs('block')}>
                <Avatar className={cs('user-ava')} alt="user ava" src={Ava0} />
                <div className={cs('user-name', 'title')}>{user.name}</div>
                <ul>
                  <li>Email: {user.email}</li>
                  <li>
                    Address: {user.address && `${user.address.city}, ${user.address.street} ${user.address.suite}`}
                  </li>
                  <li>Company: {user.company && user.company.name}</li>
                  <li>Phone: {user.phone}</li>
                  <li>Website: {user.website}</li>
                </ul>
              </Paper>
            </Scrollbars>
          </div>
        )}
      </div>
    </section>
  )
}

export default UserInfo
