import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Get the cart from localStorage
    const savedCart = JSON.parse(localStorage.getItem('Product')) || [];
    
    // Set the cart count
    setCartCount(savedCart.length);
  }, []);

  return (
    <div className='flex justify-between bg-blue-950 text-white p-8'>
      <div className='flex ml-4'>
        <Link to="/">
          <img src={logo} alt='logo' height="30px" width="50px" />
        </Link>
      </div>
      <div className='flex justify-evenly gap-11 mr-10'>
        <Link to="/">
          <p>SHOP</p>
        </Link>
        <Link to="admin">
          <p>ADMIN</p>
        </Link>
        <Link to="cart">
          <div className='relative flex items-center'>
            <FaCartShopping className='text-2xl' />
            {cartCount > 0 && (
              <span className='absolute  rounded-full bg-red-600 text-white text-xs p-[5px] mb-10'>
                {cartCount}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
