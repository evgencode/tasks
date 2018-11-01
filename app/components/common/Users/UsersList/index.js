import React, { Component } from 'react'
import List from '@material-ui/core/List'
import UsersItem from './UsersItem'

const GroupsList = ({ users, userClick, goToUserInfo }) => {
  return (
    <List disablePadding>
      {users.map(({ id, name, email }) => (
        <UsersItem key={id} id={id} name={name} email={email} onClick={userClick} goToUserInfo={goToUserInfo} />
      ))}
    </List>
  )
}

export default GroupsList
