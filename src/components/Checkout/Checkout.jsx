import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartReducer.orderedProducts);
  const Items = useSelector((state) => state.cartReducer.items);
  const orderPrice = useSelector((state) => state.cartReducer.total);
const [res,setRes]=useState()

  useEffect(()=>{
    const order=async()=>{
      const res=await fetch('http://localhost:5000/order/placeOrder',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify( { orderPrice:orderPrice,
      customer:"6598ac435c8ac5bf95f3b06c",
      orderedProducts:cartItems})
      })
      if(!res.ok){
        throw new Error("failed to create order")
      }
      const data=await res.json()
      setRes(data)
    }
    order()
  },[cartItems, orderPrice])
  return (
    <div className="mt-[100px]">
      Checkout page
      {console.log("orderedProducts", Items, cartItems)}
      {console.log(res)}
    </div>
  );
};

export default Checkout;
