import { routerMiddleware } from 'connected-react-router'
import reduxInject from 'redux-inject'
import reduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'

export const createMiddlewares = (history, services) => {
  return [reduxInject(services), reduxThunk, reduxPromise, routerMiddleware(history)]
}
