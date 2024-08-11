import React from "react";
import { ToastContainer, toast } from "react-toastify";

function Form() {
  const toaster = (event) =>{
    event.preventDefault();
    toast("Product added successfully")
  } 
    ;
  return (
    <div>
      <div className="border-4 w-[500px] mx-auto mt-40 p-8">
        <h1 className="text-center text-2xl p-4">Add New Products</h1>
        <form className="flex flex-col  gap-6 text-center " onSubmit={toaster}>
          <div className=" justify-items-start">
            <lable for="title">
              Title:
              <input
                placeholder="Enter the title"
                name="title"
                type="text"
                className="outline ml-2 "
              />
            </lable>
          </div>
          <div>
            <lable for="category">
              Category:
              <input
                placeholder="Enter the category"
                name="category"
                type="text"
                className="outline ml-2  "
              />
            </lable>
          </div>
          <div>
            <lable for="price">
              Price:
              <input
                placeholder="Enter the price"
                name="price"
                type="text"
                className="outline ml-2 justify-items-start "
              />
            </lable>
          </div>

          <div>
            <lable for="url">
              Image Url:
              <input
                placeholder="Enter the url"
                name="url"
                type="url"
                className="outline ml-2"
              />
            </lable>
          </div>
          <div className="items-center justify-center">
            <button
              className="text-center outline bg-gray-400 cursor-pointer p-2 rounded-sm hover:bg-yellow-200"
              type="submit"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Form;
