import { connected } from '@app/helpers/container_helpers'
import { push } from 'connected-react-router'
import actions from '@app/store/actions'
import { getUsersList } from '@app/store/reducers/users/selectors'
import Users from './index'

const mapDispatchToProps = {
  navigateTo: push,
  getUsers: actions.users.getUsers
}

const mapStateToProps = state => ({
  users: getUsersList(state)
})

export default connected({
  component: Users,
  mapDispatchToProps,
  mapStateToProps
})
