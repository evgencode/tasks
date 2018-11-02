import classNames from 'classnames/bind'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import styles from './index.scss'

const cs = classNames.bind(styles)

import Task from './Task'

const Tasks = ({
  todos,
  match: {
    params: { userId }
  }
}) => {
  return (
    <section className={cs('root')}>
      <div className={cs('column-box')}>
        <AppBar position="static" className={cs('header')}>
          <Toolbar>
            <div className={cs('title')}>Tasks for User ID {userId}</div>
          </Toolbar>
        </AppBar>
        <div className={cs('scrollable')}>
          <Scrollbars>
            <div className={cs('top-divider')} />
            <div className={cs('tasks-list')}>
              {!!todos.length && (
                <div className={cs('tasks-list')}>
                  {todos.map(todo => (
                    <Task key={todo.id} {...todo} />
                  ))}
                </div>
              )}
            </div>
          </Scrollbars>
        </div>
      </div>
    </section>
  )
}

export default Tasks
