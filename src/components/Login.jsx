import React from 'react'
import { useState } from 'react'

//IMP chiz ki INBUILT react ka useContext import krna

import { useContext } from 'react'

//aur hamare userContext ko bhi import krlo
//UserContext ke andr value fetch krne me helpkrta he useContext.

import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    //ye setUser UserContextProvider se aaya
    const {setUser} = useContext(UserContext)
    //setUser me value add kr rahe he.

    const handleSubmit = (e) => {

        e.preventDefault() //URL koi dusri jagah naa chale jaaye isliye.
        setUser({username, password})
        
    }

    //ab iss pure data ko profile me le jaana he, fetch krna he

  return (
    <div>

        <input 
        type='text' 
        placeholder='Enter Name'
        value={username}

        onChange={(e) => setUsername(e.target.value)}
        />

        {" "}
        <input 
        type='password' 
        placeholder='Enter Password'
        value={password}

        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login