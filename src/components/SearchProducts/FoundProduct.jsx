import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchText, showSearchPage } from '../../redux/slices/cartSlice'

import ProductModal from '../Modal/ProductModal'

const FoundProduct = ({product}) => {
  const [showModal,setShowModal]=useState(false)
   
    const dispatch=useDispatch()
    const navigateToProductDetail=()=>{
      dispatch(showSearchPage(false))
       setShowModal(true)
       dispatch(setSearchText(""))
    }
  return (
    <div onClick={navigateToProductDetail} className='flex p-5 items-center cursor-pointer gap-x-2  '>
        <img className='w-10 h-10' src={product.image} alt="found Product" />
        <p >{product.title}</p>
        {
           showModal&&<ProductModal singleProduct={product}/>
        }
    </div>
  )
}

export default FoundProduct