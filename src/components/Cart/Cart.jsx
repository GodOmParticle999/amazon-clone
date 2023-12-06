import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decreaseQuantity, increaseQuantity, removeItem } from '../../redux/slices/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {

   const [total,setTotal]=useState(0)
  const cartItems=useSelector((state)=>state.cartReducer.items)
  const dispatch=useDispatch()

  useEffect(()=>{
     const prices=cartItems?.map((items)=>Math.round(items.price*items.quantity))
     const totalAmount=prices.reduce((a,b)=>a+b,0)
    setTotal(totalAmount)
  },[cartItems])
  return (
  <div className='mt-[100px] flex flex-col justify-center items-center py-10 px-3'>

{cartItems.map((items)=>(
      <div key={items.id} className='flex flex-col gap-8 border-b-2 border-black mb-8 py-4 items-center '>
       <div className='flex justify-center items-center'>
      <img className='w-48 h-56 object-contain' src={items.image} alt="img" />
      <div className='flex flex-col items-center gap-y-5'>
      <h1  className='text-2xl font-semibold text-center w-96'>{items.title}</h1>
      <div className='flex items-center gap-x-4'>
        <span className='text-xl  font-semibold'>quantity:</span>
        <button onClick={()=>{dispatch(decreaseQuantity(items))}} className='flex text-white font-bold rounded-md items-center text-2xl justify-center pb-1  bg-orange-400 w-8 h-8 '>-</button>
        <span className='flex text-gray-700 items-center text-2xl'>{items.quantity}</span>
        <button onClick={()=>{dispatch(increaseQuantity(items))}} className='flex text-white font-bold rounded-md items-center text-2xl  justify-center pb-1 bg-orange-400 w-8 h-8'>+</button>
      </div>
      <div className='flex gap-5 items-center'>
        <h1 className='text-2xl  uppercase '>Price : <span className='text-3xl text-violet-500'>₹{Math.round(items.price*items.quantity)}</span></h1>
        <button onClick={()=>{dispatch(removeItem(items.id))}} className='px-6 py-3 bg-green-500 rounded-md font-bold text-white text-lg'>Remove Item</button>
      </div>
      {console.log("total amount is",total)}
      </div>
       </div>
      </div>
    ))}

{ cartItems.length>0?  <div className='flex gap-10 items-center'>
  <h1 className='font-semibold text-2xl'>TOTAL : <span className='text-3xl text-violet-700'>₹{total}</span></h1>
  <Link to={"/checkout"} className='px-6 py-3 bg-yellow-500 rounded-md font-bold text-white text-xl'>Checkout Now</Link>
   <button onClick={()=>{dispatch(clearCart())}}
     className=' px-10 py-3 bg-red-500 rounded-md font-bold text-white'>Clear Cart</button>
     </div>
:<Link  className=' px-10 py-3 bg-yellow-500 rounded-md font-bold text-white' to={"/"}>Continue Shopping</Link> }
 </div>
  )
}

export default Cart