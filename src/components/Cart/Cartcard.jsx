import React from 'react'
import {
    
    decreaseQuantity,
    increaseQuantity,
    removeItem,
  } from "../../redux/slices/cartSlice";
  import { useDispatch } from 'react-redux'; 
const Cartcard = ({items}) => {
    const dispatch = useDispatch()
  return (
  
        <div
          
            className="flex w-[340px] md:w-[420px] h-[250px]  md:flex-col  bg-white gap-8
          justify-center shadow-sm shadow-slate-400 mb-8 py-4 px-2 items-center "
          >
            <div className="flex justify-center items-center">
              <img
                className="min-w-[100px] w-28  object-contain"
                src={items.image}
                alt="img"
              />
              <div className="flex flex-col items-center gap-y-5">
                <h1 className="text-md md:text-2xl font-semibold text-center ">
                  {items.title.substr(0, 50)}{" "}
                  {items.title.length > 50 ? "..." : ""}
                </h1>
                <div className="flex items-center gap-x-4">
                  <span className="md:text-xl ">quantity:</span>
                  <button
                    onClick={() => {
                      dispatch(decreaseQuantity(items));
                    }}
                    className="flex text-white font-bold rounded-md items-center text-2xl justify-center pb-1 
                     bg-orange-400 w-8 h-8 "
                  >
                    -
                  </button>
                  <span className="flex text-gray-700 items-center text-2xl">
                    {items.quantity}
                  </span>
                  <button
                    onClick={() => {
                      dispatch(increaseQuantity(items));
                    }}
                    className="flex text-white font-bold rounded-md items-center text-2xl  justify-center pb-1
                     bg-orange-400 w-8 h-8"
                  >
                    +
                  </button>
                </div>
                <div className="flex gap-2 md:gap-4 px-1 text-sm font-serif items-center">
                  <h1 className="  md:text-lg uppercase ">
                    Price :{" "}
                    <span className="md:text-2xl text-violet-500">
                      ₹{Math.round(items.price * items.quantity)}
                    </span>
                  </h1>
                  <button
                    onClick={() => {
                      dispatch(removeItem(items.id));
                    }}
                    className=" px-2 py-2  bg-green-500 rounded-md font-bold text-white text-sm md:text-lg
                  shadow-md shadow-gray-300 whitespace-nowrap"
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            </div>
          </div>

  )
}

export default Cartcard