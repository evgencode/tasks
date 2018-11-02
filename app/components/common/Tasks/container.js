import { connected } from '@app/helpers/container_helpers'
import { getUserTasks } from '@app/store/reducers/todos/selectors'
import Users from './index'

const mapStateToProps = (state, props) => ({
  todos: getUserTasks(state, props)
})

export default connected({
  component: Users,
  mapDispatchToProps: null,
  mapStateToProps
})
