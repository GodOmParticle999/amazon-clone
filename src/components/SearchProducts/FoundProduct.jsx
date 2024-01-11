import React from "react";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const FoundProduct = ({ product }) => {
  const dispatch = useDispatch();
  const navigateToProductDetail = () => {
    dispatch(setSearchText(""));
  };
  return (
    <Link
      to={`/product/${product.id}`}
      onClick={navigateToProductDetail}
      className="flex p-5 items-center cursor-pointer gap-x-2  "
    >
      <img className="w-10 h-10" src={product.image} alt="found Product" />
      <p>{product.title}</p>
    </Link>
  );
};

export default FoundProduct;
