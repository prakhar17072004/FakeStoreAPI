import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex  justify-between bg-gray-800 text-white p-8'>
   <div className='flex'> 
     <img src="/" alt='log pic'/>
   </div>
   <div  className='flex justify-evenly gap-8'>
   <Link  to="/">
     <p>SHOP</p>
  </Link>
  <Link  to="admin">
  <p>ADMIN</p>
  </Link>
  <Link  to=" cart">
  <p>CART</p>
  </Link>
   </div>
  
    </div>
  )
}

export default Navbar