import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchText, showSearchPage } from '../../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'

const FoundProduct = ({product}) => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const navigateToProductDetail=()=>{
      dispatch(showSearchPage(false))
       navigate(`/product/${product.id}`)
       dispatch(setSearchText(""))
    }
  return (
    <div onClick={navigateToProductDetail} className='flex p-5 items-center cursor-pointer gap-x-2  '>
        <img className='w-10 h-10' src={product.image} alt="found Product" />
        <p >{product.title}</p>
    </div>
  )
}

export default FoundProduct