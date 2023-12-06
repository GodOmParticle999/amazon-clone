import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className=" flex flex-col bg-white shadow-xl px-2  shadow-gray-400   ">
      <Link to={`/product/${product.id}`} className="flex flex-col py-2 ">
        <div className="w-full flex  justify-between px-4 md:px-10 items-center">
          <img
            className="w-28 h-32 md:w-52 md:h-64 flex-1 object-contain"
            src={product.image}
            alt={product.title}
          />
          <p className="text-3xl font-semibold">
            ₹{Math.round(Number(product.price))}
          </p>
        </div>

        <div className="flex flex-col items-center gap justify-center">
          <h1 className="text-xl text-center md:text-3xl">
            {product.title.substr(0, 50)}....
          </h1>

          <i className="text-2xl mb-2">{product.rating.rate}</i>
        </div>
      </Link>
      <button
        onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
        className="px-8 mb-2 py-2  bg-[#F7CA00] font-semibold  whitespace-nowrap"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
