import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

const MyRoutes = () => {
  return (
   <Router>
     <Routes>
            {/* <Route path='/' element={<Start/>}></Route> */}
          <Route path='' element={<Layout/>}>
            <Route index element={<HomePage/>}/>

          </Route>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          

        </Routes>
   
   </Router>


  )
}
export default MyRoutes