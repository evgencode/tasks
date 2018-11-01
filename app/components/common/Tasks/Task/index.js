import classNames from 'classnames/bind'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import styles from './index.scss'

const cs = classNames.bind(styles)

const Task = props => {
  const { out } = props
  return (
    <div className={cs('root')}>
      <Paper elevation={1} className={cs('task')}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      </Paper>
    </div>
  )
}

export default Task
