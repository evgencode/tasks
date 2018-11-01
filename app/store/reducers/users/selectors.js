import _ from 'lodash'
import { createSelector } from 'reselect'

const getStore = state => state.users || {}

const getById = createSelector(getStore, store => store.byId || {})

export const getUsersList = createSelector(getById, usersById => _.values(usersById))
