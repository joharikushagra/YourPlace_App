import React from 'react'
import UserList from '../components/UserList'

function Users() {

    const USERS = [
      { id:'u1',
       name:'Max Schwarz' , 
       image: 'https://i1.wp.com/vargiskhan.com/log/wp-content/uploads/2020/06/dalousie.jpg?resize=1024%2C851',
       places:3}, 
    ]
    return (
        <UserList items={USERS}/>
    )
} 

export default Users
