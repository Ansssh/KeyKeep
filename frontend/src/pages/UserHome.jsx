import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

const UserHome = () => {
  const { user } = useContext(UserContext);
  return (
    <div>Hello {user}</div>
  )
}

export default UserHome