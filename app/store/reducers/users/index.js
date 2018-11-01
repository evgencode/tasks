import _ from 'lodash'
import { handleActions } from 'redux-actions'
const defaultState = {
  byId: {}
}

const reducerMap = {
  'USERS/SET_ALL': (state, { payload }) => {
    const byId = _.fromPairs(payload.map(user => [user.id, user]))
    return { ...state, byId }
  }
}

export default handleActions(reducerMap, defaultState)
