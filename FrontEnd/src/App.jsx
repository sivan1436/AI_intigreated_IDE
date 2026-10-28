
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard.jsx'
import { useEffect } from 'react'
import { Me } from './Features/me.js'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userslice.js';
function App() {
  const dispatch = useDispatch();
useEffect(()=>{

  const fetch = async () => {
    const data = await Me();
   dispatch(setUserData(data)) 
  }
  fetch()
},[])


  return (
<BrowserRouter>
<Routes>
  <Route path='/' element ={<Dashboard/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App
