import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const CartCheckoutSec = () => {
  const dispatch = useDispatch();
  const total =useSelector(state=>state.cartReducer.total)
  return (
    <div
      className=" h-[250px]   
     
    min-w-[250px] md:w-1/5 "
    >
     <h1 className="text-3xl font-serif mb-3 text-center whitespace-nowrap">Order Summary</h1>
     <div className="bg-white h-[350px] md:p-2 p-5  flex flex-col gap-10 justify-center">
      <div className="text-xl flex justify-between px-2">
        <p>shipping charge :</p>
        <p> free</p>
      </div>
      <h1 className="font-semibold flex justify-between md:text-2xl text-xl">
        <p>TOTAL : </p>
        <p className=" text-3xl text-violet-700">₹{total}</p>
      </h1>
      <div className="flex flex-col gap-4">
        <Link
          to={"/checkout"}
          className="md:px-4 md:py-3 p-1 rounded-md bg-yellow-500 font-bold text-center text-white 
      shadow-md shadow-gray-300 text-xl whitespace-nowrap"
        >
          Checkout Now
        </Link>
        <button
          onClick={() => {
            dispatch(clearCart());
          }}
          className=" md:px-6 md:py-3 px-1 rounded-md py-1 bg-red-500 font-bold text-xl text-white 
      shadow-md shadow-gray-300 whitespace-nowrap"
        >
          Clear Cart
        </button>
      </div>
     </div>
    </div>
  );
};

export default CartCheckoutSec;
