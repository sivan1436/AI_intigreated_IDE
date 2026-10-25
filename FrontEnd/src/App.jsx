import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../Firebase.js'
import { login } from './Features/Login.js'

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
    <div>
      <button  onClick={handleGoogleSignIn}>
        continue with google
      </button>
     
    </div>
  )
}

export default App
