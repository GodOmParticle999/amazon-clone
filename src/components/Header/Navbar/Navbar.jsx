import React, { useEffect, useState } from "react";
import SubNmain from "./SubNmain/SubNmain";
import { logo } from "../../../assets/imgExporter";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import SearchProduct from "../../SearchProducts/SearchProduct";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../../redux/slices/cartSlice";
const Navbar = () => {
  const [total,setTotal]=useState(0)
  const user=useSelector((state)=>state.user.user)
  const products=useSelector((state)=>state.cart.items)
  // const showSearch=useSelector(state=>state.cartReducer.showSearch)
  const searchText=useSelector(state=>state.cart.searchText)

  const dispatch=useDispatch()
 useEffect(()=>{
  const totalPrice=products?.map((product)=>(
    product.quantity
   ))
   setTotal(totalPrice.reduce((a,b)=>a+b,0))
   
 },[products])
   
  const categories=[
    {
    id:1,
    category:"All Categories"
  },
    {
    id:2,
    category:"Electronics"
  },
    {
    id:3,
    category:"Clothing"
  },
    {
    id:4,
    category:"Books"
  },
    {
    id:5,
    category:"Furniture"
  },
    
  ]
  const searchHandler=(e)=>{
  
   dispatch(setSearchText(e.target.value))
   
  }
  return (
    <div className="bg-[#131921] h-[60px] w-full fixed top-0 z-50 text-white flex 
    px-4 items-center justify-between">
      {/* nav left */}
      
      <div className="flex  items-center">
       <Link to={"/"}>

        <img
          className="w-28 pt-2 object-contain "
          src={logo}
          alt="Amazon-Logo"
        />
       </Link>
        <SubNmain sub={"Deliver to Navin"} main={"Lohardaga"} hidden={"hidden"}/>
      </div>
      {/* nav fill */}

      <div className="text-black  flex-grow hidden md:flex px-4 cursor-pointer">
        <select className="py-2 rounded-bl-md rounded-tl-md " >
          {
            categories.map((item)=>{
              return(
                <option  key={item.id} value={item.category}>{item.category}</option>
              )
            })
          }
        </select>
        <input className=" flex-grow outline-none border-none py-2 rounded-tr-md
        px-2 rounded-br-md " 
        type="text"
        onChange={searchHandler}
        value={searchText}
         placeholder="Search any product" />
      </div>
      <input className="  outline-none md:hidden border-none w-16 py-1 rounded-tr-md
        px-1 rounded-md text-black " 
        type="text"
        onChange={searchHandler}
        value={searchText}
         placeholder="Search" />
       {searchText&&<SearchProduct />}
      {/* nav right */}
      <div className="flex items-center gapx-4">
      <Link to={'/login'}> <SubNmain sub={"Hello"} main={`${user.name.toUpperCase()} `} /></Link>
       <SubNmain sub={"Returns "} main={"& Orders "} hidden={"hidden"}/>
      <Link to={"/cart"} className="applyBorder text-xl mr-4 cursor-pointer">
        <span className="relative">cart
          <span className="absolute -top-[2px] px-2 text-xs py-1 bg-orange-400 rounded-full ">{total}</span>
          </span>
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
