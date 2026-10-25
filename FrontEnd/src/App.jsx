import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../Firebase.js'
import { login } from './Features/Login.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard.jsx'

function App() {
  

  async function handleGoogleSignIn() {
    try {
      const { user } = await signInWithPopup(auth, provider)
      const token = await user.getIdToken()
      const loginData = await login(token)
      console.log(loginData)
    } catch (error) {
      console.error('Google sign-in failed:', error)
    }
  }


  return (
<BrowserRouter>
<Routes>
  <Route path='/' element ={<Dashboard/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App
