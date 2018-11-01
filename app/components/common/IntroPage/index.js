import classNames from 'classnames/bind'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.scss'

const cs = classNames.bind(styles)

const IntroPage = () => {
  return (
    <section className={cs('root')}>
      <div className={cs('column-box')}>
        <AppBar position="static" className={cs('header')}>
          <Toolbar>
            <div className={cs('title')}>Welcome to Tasks</div>
          </Toolbar>
        </AppBar>
        <div className={cs('scrollable')}>
          <Link to="/alltasks">Show All Tasks</Link>
        </div>
      </div>
    </section>
  )
}

export default IntroPage
