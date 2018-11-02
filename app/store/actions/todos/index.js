import { createActions } from 'redux-actions'

const { todos: todosActions } = createActions({
  TODOS: {
    SET_ALL: undefined,
    SET_ONE: undefined
  }
})

todosActions.getTodos = () => ({ todosService }) => async dispatch => {
  const todos = await todosService.getTodos()
  dispatch(todosActions.setAll(todos))
  return todos
}

export default todosActions
