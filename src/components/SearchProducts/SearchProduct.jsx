import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FoundProduct from './FoundProduct'

const SearchProduct = ({searchText}) => {
    const [foundProducts,setFoundProducts]=useState([])
    const products=useSelector(state=>state.cartReducer.products)

useEffect(()=>{
   const searchProducts=()=>{
    const foundItems=products.filter((item)=>item.title.includes(searchText))
    setFoundProducts(foundItems)
   }
   searchProducts()
},[searchText])


  return (
    <div className='absolute inset-0 top-[60px] backdrop-blur-sm flex  justify-center  z-50 h-[100000px] w-screen'>
       <div className='bg-gray-400 flex flex-col gap-2  '>
       {
        foundProducts.map((product)=>(
           <FoundProduct key={product.id} product={product}/>
        ))
    }
       </div>
    </div>
  )
}

export default SearchProduct