import { connected } from '@app/helpers/container_helpers'
import { getUser } from '@app/store/reducers/users/selectors'
import UserInfo from './index'

const mapDispatchToProps = {}

const mapStateToProps = (state, props) => ({
  user: getUser(state, props)
})

export default connected({
  component: UserInfo,
  mapDispatchToProps,
  mapStateToProps
})
