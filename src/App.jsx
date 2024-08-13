import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Shop from './Pages/Shop.jsx'
import Admin from './Pages/Admin.jsx'
import Cart from './Pages/Cart.jsx'
import Navbar from './Components/Navbar'
import Form from './Components/Form.jsx'
import './App.css'


function App() {
  

  return (
    <>
      <div className=''>
        
        <Navbar path="/" className=""/>
        <Routes>
            
            <Route path='/' element={<Shop/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
      
    </>
  )
}

export default App
