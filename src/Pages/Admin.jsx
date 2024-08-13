import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Form from "../Components/Form";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { ToastContainer,toast } from "react-toastify";


function Admin() {
  
  const columns = [
    {
      name: "ID",
      selector: row => row.id,
      sortable: true,
    },
    {
      name: "Title",
      selector: row => row.title,
      sortable: true,
    },
    {
      name: "Price",
      selector: row => `$${row.price}`,
      sortable: true,
    },
    {
      name: "Category",
      selector: row => row.category,
      sortable: true,
    },
    {
      name: "Image",
      selector: row => (
        <img src={row.image} alt={row.title} style={{ width: '50px', height: 'auto' }} />
      ),
    },
    {
      name: "Delete",
      cell: row => (
        <button onClick={() => handleDelete(`toast("DELETE")`)} className="bg-red-500 rounded-md p-4">Delete</button>
      ),
    },
  ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AdminData();
  }, []);

  const AdminData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products");

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error("Error fetching data:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    // Implement the delete functionality
    console.log(`Delete item with ID: ${id}`);
  };

  return (
    <div className="w-[1250px] mx-auto outline mt-[40px] mb-10 p-8 rounded-md">
     
     <Link to="/form">
            
             <div className="flex text-center mx-auto   ">
             <button className=" flex mx-auto text-center bg-pink-400 gap-4 p-4 rounded-lg">Add New Products 
             <FaPlus  className="text-sm font-semibold outline mt-1"/>
             </button>
              
             </div>
              
          </Link>
         
         

         
     


      <h1 className="text-center font-extrabold text-4xl underline p-8">Product Details</h1>
      <DataTable
      
        columns={columns}
        data={data}
        progressPending={loading}
        
      />
      <ToastContainer/>
    </div>
  );
}

export default Admin;
