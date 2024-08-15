import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cartUpdatedEvent } from './cartEvent';
import logo from "../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";

function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const savedCart = JSON.parse(localStorage.getItem('Product')) || [];
    setCartCount(savedCart.length);
  };

  useEffect(() => {
    // Initial load
    updateCartCount();

    // Listen for cart updates
    window.addEventListener('cartUpdated', updateCartCount);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('cartUpdated', updateCartCount);
    };
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
              <span className='absolute rounded-full bg-red-600 text-white text-xs p-[5px] mb-10'>
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
