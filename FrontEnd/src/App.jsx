
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard.jsx'

function App() {
  



  return (
<BrowserRouter>
<Routes>
  <Route path='/' element ={<Dashboard/>}/>
</Routes>
</BrowserRouter>
  )
}

export default App
