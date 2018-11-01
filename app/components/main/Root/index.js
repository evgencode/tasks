import classNames from 'classnames/bind'
import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import { Provider } from 'react-redux'
import Hidden from '@material-ui/core/Hidden'
import { MuiThemeProvider } from '@material-ui/core/styles'
import DesktopApp from '@components/main/DesktopApp'
import MobileApp from '@components/main/MobileApp'
import theme from '@components/theme'
import history from '@store/history'
import store from '@store'
import styles from './index.scss'

const cs = classNames.bind(styles)

const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <div className={cs('app')}>
            <Hidden smUp>
              <MobileApp />
            </Hidden>
            <Hidden xsDown>
              <DesktopApp />
            </Hidden>
          </div>
        </MuiThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}

export default Root
