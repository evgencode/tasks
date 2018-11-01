import _ from 'lodash'
import { handleActions } from 'redux-actions'
const defaultState = {
  byId: {}
}

const reducerMap = {
  'TASKS/SET_ALL': (state, { payload }) => {
    const byId = _.fromPairs(payload.map(task => [task.id, task]))
    return { ...state, byId }
  }
}

export default handleActions(reducerMap, defaultState)
