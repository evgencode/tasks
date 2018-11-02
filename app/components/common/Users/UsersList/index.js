import React, { Component } from 'react'
import List from '@material-ui/core/List'
import UsersItem from './UsersItem/container'

const GroupsList = ({ users }) => {
  return (
    <List disablePadding>
      {users.map(user => (
        <UsersItem key={user.id} {...user} />
      ))}
    </List>
  )
}

export default GroupsList
