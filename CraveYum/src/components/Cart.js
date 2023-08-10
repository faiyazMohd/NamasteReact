import React, { useContext } from 'react'
import UserContext from '../utils/contexts/UserContext'
import UserProfile from '../utils/contexts/userProfile/UserProfile'

const Cart = () => {
  const {user} = useContext(UserContext)
  const {UserDetails} = useContext(UserProfile);
  return (
    <div>
       <h1>This is a Cart Component .</h1>
       <h3>name: {user.name}</h3>
       <h3>email: {user.email}</h3>
       <h3>userId: {UserDetails.userId}</h3>
       <h3>userName: {UserDetails.userName}</h3>
       <h3>age: {UserDetails.age}</h3>
      
    </div>
  )
}

export default Cart
