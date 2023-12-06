import React, { useEffect, useState } from 'react'
import Product from './Product/Product'

const Products = () => {
    const [products,setProducts]=useState([])


    // fetch product 
    useEffect(()=>{
        const getProducts=async()=>{
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
        }
        getProducts()
    },[])
  return (
   
        <div className='  mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3   p-10 gap-10  '>

        {
       
            products.map((product)=>(
                <Product key={product.id} product={product}/>
            ))
        }
        </div>
    
  )
}

export default Products