import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  const [quan, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartReducer.items);

  useEffect(() => {
    const quanti = items.find((item) => item.id === product.id);
    quanti && setQuantity(quanti.quantity);
  }, [items, product.id, product.quantity]);

  return (
    <div className="flex flex-col w-[360px] h-[270px] justify-between bg-white shadow-xl px-2
     shadow-gray-400">
      <Link to={`/product/${product.id}`} className="flex flex-col py-2">
        <div className=" flex justify-between px-4 md:px-10 items-center">
          <img
            className="w-28 h-28   flex-1 object-contain"
            src={product.image}
            alt={product.title}
          />
          <p className="text-xl font-sans text-violet-700">
            ₹{Math.round(Number(product.price))}
          </p>
         
        </div>

        <div className="flex flex-col items-center gap justify-center">
          <h1 className="text-xl text-center ">
            {product.title.substr(0, 50)}....
          </h1>
    {/* star rating section */}
          <i className="text-lg mb-2">{product.rating.rate}</i>
        </div>
      </Link>
    {
      quan>0?  <Link to={"/cart"}
     
      className="px-8 text-center mb-2 py-2 disabled:opacity-50 bg-orange-400 
      rounded-sm font-semibold whitespace-nowrap"
    >
      Go to cart
    </Link> :  <button
       
        onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
        className="px-8 mb-2 py-2 disabled:opacity-50 bg-[#F7CA00] font-semibold 
        rounded-sm whitespace-nowrap"
      >
        Add to cart
      </button>   }
    </div>
  );
};

 

export default Product;
