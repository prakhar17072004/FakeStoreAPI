import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        const data = await response.json();
        setCategories(["All", ...data]);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    getCategories();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubmit = async (e) => { 
    e.preventDefault(); // Prevent default form submission
    if(!productName || !productPrice || !productDesc|| !productImage ||!selectedCategory){
      toast.error("Please enter the details...");
      return;
    }

    const newProduct = {
      title: productName,
      price: parseFloat(productPrice), // Ensure the price is a number
      description: productDesc,
      image: productImage,
      category: selectedCategory,
    };
    console.log(newProduct);
    // data is post using post method

    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log("Product added:", data);

      toast.success("Product added successfully!");

      // Reset form fields after successful submission
      setProductName("");
      setProductDesc("");
      setProductPrice("");
      setProductImage("");
      setSelectedCategory("");
    } catch (err) {
      console.error("Error in adding product:", err);
      toast.error("Error in adding product.");
    }
  };

  return (
    <div className="flex flex-col lg:w-[600px] md:w-[300px] mx-auto">
      <h1 className="text-2xl font-bold text-center mt-6">
        Add New Product 
      </h1>
      <form
        onSubmit={handleSubmit} // Add the onSubmit handler
        className="flex flex-col  text-center mt-7 gap-y-6 border border-purple-600 p-4 rounded-xl"
      >
        <div>
          <label htmlFor="product-name">
            Product Name:
            <input
              name="product-name"
              type="text"
              placeholder="Enter Product Name"
              className="border border-black rounded-md ml-6"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="product-desc">
            Product Desc:
            <input
              type="text"
              placeholder="Enter the Description"
              className="border border-black rounded-md ml-6"
              value={productDesc}
              onChange={(e) => setProductDesc(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="product-price">
            Product Price:
            <input
              type="number"
              placeholder="Enter the Price"
              className="border border-black rounded-md ml-7"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="product-image">
            Product Image:
            <input
              type="url"
              placeholder="Enter the Product Url"
              className="border border-black rounded-md ml-7"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
            />
          </label>
        </div>
        <div className="flex mx-auto">
          <p>Enter Category:</p>
          <select
            className="outline rounded-md ml-4 capitalize"
            value={selectedCategory}
            onChange={handleCategoryChange}
            
          >
            {categories.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="border hover:scale-125 mx-auto transition duration-200 ease-in-out border-black w-[200px]  rounded-lg px-4 py-2 font-bold">
          Post Data
        </button>
      </form>
      
        
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
       Bounce/>
    </div>
  );
}

export default Form;