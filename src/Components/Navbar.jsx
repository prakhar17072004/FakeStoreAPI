import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
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
  )
}

export default Navbar