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
  }, [cartItems]);
  return (
    <div className="mt-[100px] w-full  flex flex-col md:flex-row justify-center  items-center py-10 px-3">
      <h1 className="text-2xl ">
        Review Items
      </h1>
     <div className="h-[500px] overflow-y-scroll mb-4">
     <div className="flex md:w-4/5 flex-col justify-center md:flex-wrap p-3  gap-4 ">
        {cartItems.map((items) => (
         <Cartcard key={items.id} items={items}/>
        ))}
      </div>
     </div>

      {cartItems.length > 0 ? (
      <CartCheckoutSec/>
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
