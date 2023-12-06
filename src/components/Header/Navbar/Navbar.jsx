import React, { useEffect, useState } from "react";
import SubNmain from "./SubNmain/SubNmain";
import { logo } from "../../../assets/imgExporter";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [total,setTotal]=useState(0)
  const products=useSelector((state)=>state.cartReducer.items)
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
        <SubNmain sub={"Deliver to Navin"} main={"Lohardaga"}/>
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
         placeholder="Search any product" />
      </div>
       
      {/* nav right */}
      <div className="flex items-center gapx-4">
       <SubNmain sub={"Hello,Navin"} main={"Accounts & Lists "}/>
       <SubNmain sub={"Returns "} main={"& Orders "}/>
      <Link to={"/cart"} className="applyBorder text-3xl mr-4 cursor-pointer">
        <span className="relative">cart
          <span className="absolute -top-2 px-2 py-1 bg-orange-400 rounded-full ">{total}</span>
          </span>
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
