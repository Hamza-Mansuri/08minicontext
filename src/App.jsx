
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

import UserContextProvider from './context/UserContextProvider'


function App() {
  
  return (
    
    <UserContextProvider>
    
      <h1>08 Mini Context</h1>

      {/* jo bhi hum import kr rahe he, wo component ke andr hi he. */}
      <Login />
      <Profile />

    </UserContextProvider>
  )
}

export default App
