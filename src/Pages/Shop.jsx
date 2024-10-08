import React,{useState,useEffect} from 'react'
import Spinner from '../Components/Spinner';
import Product from "../Components/Product";
import Category from '../Components/Category';

function Shop() {

  // State h fetch data ko store karne k liye
  const[loading,setLoading]= useState(false)
  const[product, setProduct] = useState([]);
  const[filter,setFilter]= useState([]);
  

// Effect to fetch data when the component mounts
useEffect(() => {
  fetchProducts();
}, []); // Empty dependency array ensures the effect runs once on mount


///////////////////////////////////////////////////////////////
  //funtion to fetch the allproductdata //

  const fetchProducts = async()=>{
    setLoading(true);
     try{
      //Make get request using fetch API
      const res =  await fetch('https://fakestoreapi.com/products')
          
      // if response is successful then show (status 200)
      if(!res.ok){
        throw new Error('Network response was not ok');
      }
     //parse the JSON data from res

     const result = await res.json();

     // Update the state with the fetched data
     setProduct(result);
     setFilter(result);
     

     }catch(err){
      console.error('Error fetching data:', err.message);
     }

     setLoading(false);
  };

  
console.log(fetchProducts)

const handlerFunction =(item)=>{
  if(item ==="All Product"){
    setFilter(product);
  }else{
    const filtered = product.filter(p => p.category === item);
    setFilter(filtered);
  }
    
}



  return (
    <div className=''>
        {
                loading? <Spinner/>:
                product.length>0?
                (<div className='flex   max-w-6xl  mx-auto space-y-10 space-x-5  min-h-[80vh] '>
                  
                  <div className='mt-[40px]  -ml-[140px] '>
                    <h1 className='mx-auto font-extrabold p-4 text-2xl'>Categories</h1>
                    <Category   handleFunction={handlerFunction}/>
                    </div>
                  <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                   {
                    filter.map((post,index)=>(
                        <Product key={index} post={post} product={product}/>
                    ) )
                   
                   }
                    
                </div>
                
                </div>):
                (<div className="flex justify-center items-center">
                    <p>No Data found</p>
                </div>)
            }

            

  </div>
  )
}

export default Shop