import { createActions } from 'redux-actions'

const { users: usersActions } = createActions({
  USERS: {
    SET_ALL: undefined,
    SET_ONE: undefined
  }
})

usersActions.getUsers = () => ({ usersService }) => async (dispatch, getState) => {
  const usersData = await usersService.getUsers()
  dispatch(usersActions.setAll(usersData))
  return usersData
}

export default usersActions
