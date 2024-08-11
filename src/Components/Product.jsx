import React, { useEffect, useState } from 'react';

function Product(props) {
  
  // Initialize the cart state from localStorage
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('Product')) || [];
  });

  // Use useEffect to update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('Product', JSON.stringify(cart));
  }, [cart]);

  // Function to add or remove items from the cart
  const addToCart = (item) => {
    setCart((prevItems) => {
      const itemExists = prevItems.find((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        // If the item exists, remove it from the cart
        return prevItems.filter((cartItem) => cartItem.id !== item.id);
      } else {
        // If the item does not exist, add it to the cart
        return [...prevItems, item];
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 
    transition duration-300 ease-in gap-11 p-4 mt-10 ml-5 rounded-xl outline">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {props.post.title.split(" ").slice(0, 3).join(" ") + "..."}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {props.post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={props.post.image} className="h-full w-full" alt={props.post.title} />
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">
            ${props.post.price}
          </p>
        </div>
        <button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={() => addToCart(props.post)}
        >
          {cart.find((cartItem) => cartItem.id === props.post.id) ? 'Remove from Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default Product;
