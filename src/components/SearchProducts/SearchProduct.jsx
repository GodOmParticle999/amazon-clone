import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FoundProduct from './FoundProduct'

const SearchProduct = () => {
    const [foundProducts,setFoundProducts]=useState([])
    const products=useSelector(state=>state.cartReducer.products)
    const searchText=useSelector(state=>state.cartReducer.searchText)

useEffect(()=>{
   const searchProducts=()=>{
    const foundItems=products.filter((item)=>item.title.includes(searchText))
    setFoundProducts(foundItems)
   }
   searchProducts()
},[searchText])


  return (
    <div className='absolute top-[60px] backdrop-blur-sm flex h-[1000px] justify-center overflow-y-auto z-50  w-screen'>
       <div className='bg-gray-400 flex flex-col gap-2 w-full h-full overflow-y-scroll px-4 '>
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