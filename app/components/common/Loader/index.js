import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import styles from './index.scss'

const cs = classNames.bind(styles)

const Loader = props => {
  return (
    <div className={cs(['loader', { 'loader-opaque': props.opaque }])} style={props.style}>
      <CircularProgress className={classNames(['loader-spin'])} thickness={4} size={props.size} />
    </div>
  )
}

Loader.propTypes = {
  style: PropTypes.object,
  size: PropTypes.oneOf([32, 64, 128]),
  opaque: PropTypes.bool
}

Loader.defaultProps = {
  style: {},
  size: 32,
  opaque: false
}

export default Loader
