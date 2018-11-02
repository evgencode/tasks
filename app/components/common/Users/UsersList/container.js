import { connected } from '@app/helpers/container_helpers'
import { getUsersList } from '@app/store/reducers/users/selectors'
import Users from './index'

const mapStateToProps = state => ({
  users: getUsersList(state)
})

export default connected({
  component: Users,
  mapDispatchToProps: null,
  mapStateToProps
})
