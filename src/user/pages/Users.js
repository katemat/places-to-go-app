import React from 'react'
import UsersLists from '../components/UsersList'

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Kat',
      image:
        'https://ichef.bbci.co.uk/news/320/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg',
      places: 3,
    },
  ]
  return <UsersLists items={USERS} />
}

export default Users
