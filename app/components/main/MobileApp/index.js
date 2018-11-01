import classNames from 'classnames/bind'
import React from 'react'
import { MobileAppRouter } from '@components/common/Routes'
import styles from './index.scss'

const cs = classNames.bind(styles)

const MobileApp = () => {
  return (
    <div className={cs('mobile-app')}>
      <MobileAppRouter />
    </div>
  )
}

export default MobileApp
