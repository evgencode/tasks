import classNames from 'classnames/bind'
import Paper from '@material-ui/core/Paper'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import React from 'react'
import { LgUpRouter, LgDownRouter } from '@app/components/common/Routes'
import styles from './index.scss'

const cs = classNames.bind(styles)

const DesktopApp = ({ width }) => {
  return (
    <Paper square className={cs('desktop-app')}>
      {isWidthUp('lg', width) ? <LgUpRouter /> : <LgDownRouter />}
    </Paper>
  )
}

export default withWidth()(DesktopApp)
