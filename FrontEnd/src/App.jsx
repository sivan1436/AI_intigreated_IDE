import { signInWithPopup } from 'firebase/auth'
import { useState } from 'react'
import { auth, googleProvider } from '../Firebase.js'

function App() {
  

  async function handleGoogleSignIn() {

    const data = signInWithPopup(auth,googleProvider)
    console.log(data)
    
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
