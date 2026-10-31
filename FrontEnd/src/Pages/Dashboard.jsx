import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from "../../Firebase.js";
import { login } from '../Features/Login.js'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {setUserData} from "../redux/userslice.js"
import NavBar from "../Components/NavBar.jsx";


function Dashboard() {
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch()
  const {userData} = useSelector(state=>state.user)
    async function handleGoogleSignIn() {
    try {
      setLoading(true)
      const { user } = await signInWithPopup(auth , provider)
      const token = await user.getIdToken()
      const Data = await login(token)
      dispatch(setUserData(Data))
      console.log(Data)
    } catch (error) {
      console.error('Google sign-in failed:', error)
    } finally {
      setLoading(false)
    }
  }
  if (!userData) {
  return (
    <div className='relative flex h-screen w-full items-center justify-center overflow-hidden
    bg-white px-4 text-slate-900 transition-colors duration-300 dark:bg-[#07070c] dark:text-white'>
      <div className='pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[600px]
     -translate-x-1/2 rounded-full bg-slate-200/60 blur-[120px] dark:bg-white/[0.05]'/>
      <div className='relative
    w-full
    max-w-sm
    rounded-2xl
    border
    border-slate-200
    p-8
    text-center
    bg-white
    shadow-xl shadow-slate-200/50
    backdrop-blur-xl
    dark:border-white/10
    dark:bg-white/[0.03]
    dark:shadow-black/40'>
        <div className='mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl
      border border-slate-200
      bg-white shadow-lg shadow-black/5 dark:border-transparent dark:bg-white'>

          <span className="text-lg font-bold text-slate-900">AI</span>
        </div>

        <h2 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">Welcom to AI integrated IDE </h2>
      <p className='mb-6 text-[13.5px] leading-relaxed text-slate-600 dark:text-slate-300'>
        sign in to access your projects and continue building
      </p>
      <button disabled={loading}
      onClick={handleGoogleSignIn}
      className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white py-2.5 text-[13.5]
      font-medium text-slate-800 shadow-sm transition-colors
      duration-150 hover:bg-slate-50 disabled:opacity-70
      dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
        <FcGoogle className="mr-2 inline-block text-lg cursor-pointer" />
       {loading ? "Signing in..." : "continue with google"}
      </button>
      <p className='mt-5 text-[11px] text-slate-500 dark:text-slate-400'>By continuing you agree to our terms and policy</p>
      </div>

    </div>

  )
}
return (
  <div className="relative flex h-screen w-full flex-col overflow-hidden bg-slate-50
  text-slate-900 transition-colors duration-300 dark:bg-[#07070c] dark:text-white">
  <div className="pointer-events-none absolute -top-40 left-1/3 hidden h-[700px] w-[700px]
  rounded-full bg-white/[0.04] blur-[140px] dark:block" />
  <div className="pointer-events-none absolute right-0 top-1/3 hidden h-[500px] w-[500px]
  rounded-full bg-white/[0.03] blur-[130px] dark:block" />
  <div className="relative flex min-h-0 flex-1 flex-col">
   <NavBar />
  </div>
  </div>
)
}

export default Dashboard
