import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const CartCheckoutSec = () => {
  const dispatch = useDispatch();
  const total =useSelector(state=>state.cartReducer.total)
  return (
    <div
      className="flex md:gap-10 gap-4 flex-col min-h-[250px]  bg-white px-5 justify-center 
   md:fixed  md:top-[100px] shadow-md shadow-slate-400
  md:right-4 min-w-[200px] w-[280px] md:w-1/5   items-center"
    >
      <h1 className="font-semibold md:text-2xl text-xl">
        TOTAL : <span className=" text-3xl text-violet-700">₹{total}</span>
      </h1>
      <div className="flex flex-col gap-4">
        <Link
          to={"/checkout"}
          className="md:px-6 md:py-3 px-2 py-1 rounded-md bg-yellow-500 font-bold text-white 
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
  );
};

export default CartCheckoutSec;
