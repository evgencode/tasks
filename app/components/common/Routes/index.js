import _ from 'lodash'
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Tasks from '@app/components/common/Tasks'
import AllTasks from '@app/components/common/AllTasks'
import IntroPage from '@app/components/common/IntroPage'
import Users from '@app/components/common/Users/container'
import UserInfo from '@app/components/common/UserInfo/container'

const routes = [
  {
    id: 'IntroPage',
    path: '/',
    component: IntroPage,
    mobile: { active: false },
    lgUp: { active: true, exact: true },
    lgDown: { active: true, exact: true }
  },
  {
    id: 'Users',
    path: '/',
    component: Users,
    mobile: { active: true, exact: true },
    lgUp: { active: false },
    lgDown: { active: false }
  },
  {
    id: 'AllTasks',
    path: '/alltasks',
    component: AllTasks,
    mobile: { active: true, exact: true },
    lgUp: { active: true },
    lgDown: { active: true, exact: true }
  },
  {
    id: 'Tasks',
    path: '/users/:userId',
    component: Tasks,
    mobile: { active: true, exact: true },
    lgUp: { active: true },
    lgDown: { active: true, exact: true }
  },
  {
    id: 'UserInfo',
    path: '/users/:userId/info',
    component: UserInfo,
    mobile: { active: true, exact: true },
    lgUp: { active: true },
    lgDown: { active: true, exact: true }
  }
]

export const routesById = _.reduce(routes, (routes, { id, ...route }) => ({ ...routes, [id]: route }), {})

export const MobileAppRouter = () => (
  <Switch>
    {routes.filter(route => route.mobile.active).map(({ id, path, component, mobile: { exact } }) => (
      <Route key={id} exact={exact} path={path} component={component} />
    ))}
  </Switch>
)

export const LgUpRouter = () => (
  <Fragment>
    <Users />
    {routes.filter(route => route.lgUp.active).map(({ id, path, component, lgUp: { exact } }) => (
      <Route key={id} exact={exact} path={path} component={component} />
    ))}
  </Fragment>
)

export const LgDownRouter = () => (
  <Fragment>
    <Users />
    <Switch>
      {routes.filter(route => route.lgDown.active).map(({ id, path, component, lgDown: { exact } }) => (
        <Route key={id} exact={exact} path={path} component={component} />
      ))}
    </Switch>
  </Fragment>
)
