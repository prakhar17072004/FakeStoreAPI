import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Shop from './Pages/Shop.jsx'
import Admin from './Pages/Admin.jsx'
import Cart from './Pages/Cart.jsx'
import Navbar from './Components/Navbar'

import './App.css'


function App() {
  

  return (
    <>
      <div>
        
        <Navbar path="/"/>
        <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App
