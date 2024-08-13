import React from 'react'
import { Link } from 'react-router-dom'
import logo  from "../assets/logo.png"
function Navbar() {
  return (
    <div className='flex  justify-between bg-blue-950 text-white p-8  '>
   <div className='flex ml-4'> 
     <img src={logo} alt='logo pic' height="30px" width="50px"/>
   </div>
   <div  className='flex justify-evenly gap-11  mr-10'>
   <Link  to="/" >
     <p>SHOP</p>
  </Link>
  <Link  to="admin">
  <p>ADMIN</p>
  </Link>
  <Link  to="cart">
  <p>CART</p>
  </Link>
   </div>
  
    </div>
  )
}

export default Navbar