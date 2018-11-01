import { connect } from 'react-redux'

export const connected = ({ component, mapDispatchToProps, mapStateToProps, propTypes }) => {
  const container = connect(
    mapStateToProps,
    mapDispatchToProps
  )(component)
  container.displayName = `Container(${component.name})`
  container.propTypes = propTypes
  return container
}
