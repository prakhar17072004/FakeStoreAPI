import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

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
        <button onClick={() => handleDelete(row.id)}>Delete</button>
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
    <div className="w-[1250px] mx-auto outline mt-[40px] mb-10 p-8">
      <h1 className="text-center font-extrabold text-4xl underline p-8">Product Details</h1>
      <DataTable
      
        columns={columns}
        data={data}
        progressPending={loading}
        
      />
    </div>
  );
}

export default Admin;
