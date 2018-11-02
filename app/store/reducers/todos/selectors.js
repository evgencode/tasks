import _ from 'lodash'
import { createSelector } from 'reselect'

const getStore = state => state.todos || {}

const getUserId = (s, props) => _.get(props, 'match.params.userId')

const getById = createSelector(getStore, store => store.byId || {})

export const getUserTasks = createSelector(getById, getUserId, (todos, userId) => {
  return _.values(todos).filter(u => +u.userId === +userId)
})
