import classNames from 'classnames/bind'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import styles from './index.scss'

const cs = classNames.bind(styles)

const Task = ({ id, title, completed }) => {
  return (
    <div className={cs('root')}>
      <Paper elevation={1} className={cs('task')}>
        <p>{title}</p>
        <p className={cs('status')}>{completed ? 'Completed' : 'In progress'}</p>
      </Paper>
    </div>
  )
}

export default Task
