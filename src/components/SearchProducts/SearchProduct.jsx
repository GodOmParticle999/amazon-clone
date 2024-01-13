import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FoundProduct from './FoundProduct'

const SearchProduct = () => {
    const [foundProducts,setFoundProducts]=useState([])
    const products=useSelector(state=>state.cart.products)
    const searchText=useSelector(state=>state.cart.searchText)

useEffect(()=>{
   const searchProducts=()=>{
    const foundItems=products.filter((item)=>item.title.toLowerCase().includes(searchText.toLowerCase()))
    setFoundProducts(foundItems)
   }
   searchProducts()
},[searchText,products])


  return (
    <div className='absolute top-[60px] backdrop-blur-sm flex h-[300px] justify-center overflow-y-auto z-50  w-screen'>
       <div className='bg-gray-400 flex flex-col gap-2 w-full h-full overflow-y-scroll px-4 '>
      <h1 className='text-center font-serif text-xl'>   {foundProducts.length} products found</h1>
       {
       foundProducts&&foundProducts.map((product)=>(
           <FoundProduct key={product.id} product={product}/>
        ))
    }
       </div>
    </div>
  )
}

export default SearchProduct