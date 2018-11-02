import _ from 'lodash'
import { createSelector } from 'reselect'

const getStore = state => state.users || {}

const getUserId = (s, props) => _.get(props, 'match.params.userId')

const getById = createSelector(getStore, store => store.byId || {})

export const getUsersList = createSelector(getById, usersById => _.values(usersById))

export const getUser = createSelector(getById, getUserId, (users, userId) => _.get(users, userId))
