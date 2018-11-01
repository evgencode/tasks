import { createActions } from 'redux-actions'

const { tasks: tasksActions } = createActions({
  TASKS: {
    SET_ALL: undefined,
    SET_ONE: undefined
  }
})

usersActions.getTasks = userId => ({ tasksService }) => async (dispatch, getState) => {
  const usersData = await tasksService.getTask(userId)
  dispatch(tasksActions.setAll(usersData))
  return usersData
}

export default tasksActions
