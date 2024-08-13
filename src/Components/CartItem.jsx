import React, { useState, useEffect } from 'react';
import { AiFillDelete } from "react-icons/ai";
function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('Product')) || [];
    setCart(savedCart);
  },[]);

  console.log(cart);

  return (
    <div className='w-[90%] self-start space-y-5 ml-5 '>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div
            key={index}
            className="flex border-b-2 mt-[30px] mb-[40px] border-green-900 "
          >
            <div className="h-full  w-full">
              <img src={item.image} className="h-[180px]" alt={item.title} />
            </div>
            <div className="flex flex-col w-[100%]">
            <div>
              <p className=" text-xl text-slate-700 font-semibold ">
                {item.title}
              </p>
            </div>
            <div>
              <p className="text-base text-slate-700 font-medium">
                {item.description.split(" ").slice(0, 10).join(" ") + "..."}
              </p>
            </div>
            
          
              <div className='flex gap-36 mt-[30px]'>
                <p className="text-green-600 font-bold text-lg">
                  ${item.price}
                </p>
                <button
                className="flex text-2xl text-red-900   bg-red-200 p-2 rounded-full"
                  onClick={()=>removeFromCart()}
                >
                <AiFillDelete />
                    
                </button>
              </div>

            

            
              
            </div>
          </div>
        ))
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
  
  
}

export default Cart;
