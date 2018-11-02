import { connected } from '@app/helpers/container_helpers'
import { push } from 'connected-react-router'
import UserItem from './index'

const mapDispatchToProps = {
  navigateTo: push
}

export default connected({
  component: UserItem,
  mapDispatchToProps,
  mapStateToProps: null
})
