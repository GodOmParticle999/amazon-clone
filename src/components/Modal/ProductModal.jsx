// import React from "react";
// import { useDispatch } from "react-redux";
// import { addToCart, removeItem } from "../../redux/slices/cartSlice";
// import { Link } from "react-router-dom";

// const ProductModal = ({ singleProduct, setShowDetail }) => {
//   const hideModal = (e) => {
//     if (e.target.id === "modal") {
//       setShowDetail(false)
//     }
//   };
//   const dispatch = useDispatch();
//   return (
//     <div
//       id="modal"
//       className="fixed flex mt-28 items-center justify-center inset-0 backdrop-blur-sm overflow-scroll z-50"
//     >
//       <div className="flex relative flex-col md:flex-row bg-slate-700 md:items-center md:pt-5 md:justify-center  ">
//         <button
//           onClick={hideModal}
//           className="text-6xl font-semibold text-red-600 z-50 absolute -top-1 right-0 px-2 py-2 "
//         >
//           X
//         </button>
//         <div className="flex justify-center bg-white py-4 shadow-lg shadow-slate-200 px-4 md:px-6">
//           <img
//             className=" w-48 h-48 md:w-[30vw]"
//             src={singleProduct.image}
//             alt={singleProduct.title}
//           />
//         </div>
//         <div className="md:w-[66vw] px-10 py-4 max-w-lg">
//           <h1 className="text-2xl lg:text-2xl ">{singleProduct?.title}</h1>
//           <p className="font-serif">{singleProduct?.category}</p>
//           <div className="flex gap-x-10 px-6 my-2">
//             <p className="text-lg lg:text-2xl font-serif whitespace-nowrap">
//               ₹ {Math.round(singleProduct.price)}
//             </p>
//             <div className="flex gap-2 items-center ">
//               <p className="font-bold text-xl">Rating:</p>
//               {[...Array(Math.round(Number(singleProduct.rating.rate)))].map(
//                 (_, i) => (
//                   <span
//                     className="px-2 py-2 w-4 h-4 bg-yellow-500  rounded-full"
//                     key={i}
//                   ></span>
//                 )
//               )}
//               <span className="text-lg font-medium">
//                 {singleProduct.rating.rate}
//               </span>
//             </div>
//           </div>
//           <p>{singleProduct?.description}</p>
//           <div className="flex justify-center gap-4 mt-5 ">
//             {singleProduct.quantity > 0 ? (
//               <button
//                 onClick={() => dispatch(removeItem(singleProduct))}
//                 className={`px-4  font-semibold md:px-10 py-2 bg-red-500 
//             rounded-sm whitespace-nowrap`}
//               >
//                 Remove
//               </button>
//             ) : (
//               <button
//                 onClick={() =>
//                   dispatch(addToCart({ ...singleProduct, quantity: 1 }))
//                 }
//                 className={`px-4  font-semibold md:px-10 py-2 hover:bg-yellow-500 bg-[#F7CA00] 
//         rounded-sm whitespace-nowrap`}
//               >
//                 Add to cart
//               </button>
//             )}
//             <Link
//               to={"/cart"}
//               className="px-4 font-semibold md:px-10 py-2 hover:bg-orange-600 bg-orange-400 rounded-sm whitespace-nowrap"
//             >
//               Go To Cart
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;
