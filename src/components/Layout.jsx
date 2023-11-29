import React from 'react'
import Header from './Header'
import Footers from './Footers'
import { Outlet } from 'react-router-dom'

 

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footers/>
    </>
  )
}

export default Layout