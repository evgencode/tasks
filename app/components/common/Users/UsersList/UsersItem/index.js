import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import GroupIcon from '@material-ui/icons/Group'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import styles from './index.scss'

const cs = classNames.bind(styles)

const UsersItem = ({ id, name, email, navigateTo }) => {
  return (
    <ListItem button onClick={() => navigateTo(`/users/${id}`)}>
      <Avatar classes={{ root: cs('avatar') }}>
        <GroupIcon />
      </Avatar>
      <ListItemText
        primary={name}
        secondary={email}
        classes={{
          primary: cs('nowrap-hidden'),
          secondary: cs('nowrap-hidden')
        }}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={() => navigateTo(`/users/${id}/info`)}>
          <InfoIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

UsersItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired
}

export default UsersItem
