import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import ProductDetails from './Pages/ProductDetails'
import Products from './Pages/Products'
import Cart from './Pages/Cart'

const MyRoutes = () => {
  return (
   <Router>
     <Routes>
            {/* <Route path='/' element={<Start/>}></Route> */}
          <Route path='' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="productsdetails/:product_id" element={<ProductDetails/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="cart" element={<Cart/>}/>
          </Route>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          

      
          

        </Routes>
   
   </Router>


  )
}
export default MyRoutes