import React from 'react'

import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)
    //ye hum data me jo value he wo return kr raha he, jo humne login me add kari thi setUser se.

    //if user nahi he to return karo
    if(!user) return <div>Please login</div>
    
    //user he to ye return karo
    return <div> Welcome {user.username}</div>
  
}

export default Profile