import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [response, setResponse] = useState();
  const cartItems = [];
  const Items = useSelector((state) => state.cart.items);
  const orderPrice = useSelector((state) => state.cart.total);
  const user=useSelector((state)=>state.user.user)
  // extract required info of the products to be ordered
  Items.forEach((element) => {
    cartItems.push({ productId: element.id, quantity: element.quantity });
  });

  useEffect(()=>{
    const order=async()=>{
      const res=await fetch('http://localhost:5000/order/placeOrder',{
      method:"POST",
      // use this credentials whenever accessing the protected route
     credentials:'include' ,
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify( { orderPrice:orderPrice,
      customer:user._id,
      orderedProducts:cartItems})
      })
     
      const data=await res.json()

      setResponse(data)
     
    }
    order()
  },[])
  return (
    <div className="mt-[100px]">
      Checkout page
      {console.log("orderedProducts", Items)}
      {console.log(cartItems)}
      {console.table(response)}
    </div>
  );
};

export default Checkout;
