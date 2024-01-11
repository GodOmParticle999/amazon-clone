import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Cartcard from "./Cartcard";
import CartCheckoutSec from "./CartCheckoutSec";
import { calculateTotal } from "../../redux/slices/cartSlice";

const Cart = () => {
   const dispatch=useDispatch()
  const cartItems = useSelector((state) => state.cartReducer.items);

  


  useEffect(() => {
    const prices = cartItems?.map((items) =>
      Math.round(items.price * items.quantity)
    );
    const totalAmount = prices.reduce((totalAmount, productPrice) => totalAmount + productPrice, 0);
      dispatch(calculateTotal(totalAmount))
  }, [cartItems, dispatch]);
  return (
    <div className="mt-[90px] w-full  flex flex-col md:flex-row md:justify-between  items-center md:items-start py-10 px-3">
     

      {cartItems.length > 0 ? (
        <>
        <div className="flex flex-col md:w-4/5 items-center  ">
     <h1 className="text-4xl font-serif  ">
        Review Items
      </h1>
     <div className="min-h-[300px] max-h-[500px] mt-1 overflow-y-scroll mb-4">
     <div className="flex  flex-col justify-center md:flex-row md:flex-wrap p-3  gap-4 ">
        {cartItems.map((items) => (
         <Cartcard key={items.id} items={items}/>
        ))}
      </div>
     </div>
     </div>
      <CartCheckoutSec/>
        </>
      ):( <Link
        className=" px-10  shadow-md shadow-gray-300 py-4 bg-yellow-500 rounded-md font-bold
        whitespace-nowrap text-white"
        to={"/"}
      >
        Continue Shopping
      </Link>)}
    </div>
  );
};

export default Cart;
