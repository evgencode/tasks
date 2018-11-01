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

const UserInfo = ({
  match: {
    params: { userId }
  }
}) => {
  return (
    <section className={cs('root')}>
      <div className={cs('column-box')}>
        <AppBar position="static" className={cs('header')}>
          <Toolbar>
            <div className={cs('title')}>Информация о пользователе ID {userId}</div>
          </Toolbar>
        </AppBar>

        <div className={cs('scrollable')}>
          <Scrollbars>
            <Paper className={cs('block')}>
              <Avatar className={cs('user-ava')} alt="user ava" src={Ava0} />
              <div className={cs('user-name', 'title')}>Пользователь ID 12345</div>
            </Paper>
          </Scrollbars>
        </div>
      </div>
    </section>
  )
}

export default UserInfo
