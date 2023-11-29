import React from 'react'
import { Link } from 'react-router-dom'

const TestNav = () => {
  return (
    <>
    <ul className="d-flex bg-secondary">
        <li><Link to='/test'></Link></li>
        <li>  <Link to='/demo'></Link></li>
    </ul>
     
   
    </>
  )
}

export default TestNav