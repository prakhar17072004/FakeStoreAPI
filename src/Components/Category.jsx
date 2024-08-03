import React,{useState,useEffect} from 'react'


function Category(props) {
    const[categories,setCategories]= useState([]);
    const[loading,setLoading]=useState(true);

   
  
  

    //////////////////////////////////////////////////////////////////////////
//API Fetching for catergory
//function to fetch the data form category//
 const fetchCategories = async()=>{
    setLoading(true);
       try{
        //Make get request using fetch API
        const res =  await fetch('https://fakestoreapi.com/products/categories')
            
        // if response is successful then show (status 200)
        if(!res.ok){
          throw new Error('Network response was not ok');
        }
       //parse the JSON data from res
  
       const result = await res.json();
  
       // Update the state with the fetched data
       setCategories(["All Product",...result]);
       
  
       }catch(err){
        console.error('Error fetching data:', err.message);
       }
  
       setLoading(false);
   }
   

    // Effect to fetch data when the component mounts
useEffect(() => {
    fetchCategories();
  }, []); // Empty dependency array ensures the effect runs once on mount

  console.log(categories);

//clickHandler//
  const clickHandler=(item)=>{
    props.handleFunction(item)
  }

  return (
    <div>
      {categories.length > 0 ? (
                categories.map((item, index) => (
                    <div  key={index} catergory={item} className='  p-2'>
                        <p  onClick={() => clickHandler(item)} className=' p-4 gap-3  rounded-2xl capitalize bg-pink-600 cursor-pointer'>{item}</p> {/* Assuming `item` is a string, adjust if it’s an object */}
                    </div>
                ))
            ) : (
                <p>No categories available.</p>
            )}

    </div>
  )
}

export default Category