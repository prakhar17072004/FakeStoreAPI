import React from 'react'
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";

function Cart() {

  
  // const [amount, setAmount] = useState(0);
  
  return (
    <div className='flex mb-[30px]'>
      
      {/* Left  hand side div */}
      <div className=' flex  w-full ml-[30px]'>
        
        <div className='w-[60%]'>
        <CartItem/>
        </div>
         
        <div className="w-[40%]  mx-auto mt-5 flex flex-col">
            <div className="flex flex-col h-[100%] justify-between p-5 gap-5 my-14">
              <div className="flex flex-col gap-5 ">
                <div className="font-semibold text-xl text-green-800 ">
                  Your Cart
                </div>
                <div className="font-semibold text-5xl text-green-700  -mt-5">
                  Summary
                </div>
                <p className="text-xl">
                  <span className="text-gray-700 font-semibold text-xl">
                    Total Items:
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold">
                <span className="text-gray-700 font-semibold">
                  Total Amount:
                </span>{" "}
              
              </p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl mr-10">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      {/* //Right hand side// */}
      
     
     
     
      
    </div>
  )
}

export default Cart