// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import { addToCart, removeItem } from "../../redux/slices/cartSlice";
// const ProductDetail = () => {

//   const dispatch = useDispatch();
//   const [singleProduct, setSingleProduct] = useState(null);

//   const { id } = useParams();

//   useEffect(() => {
//     const getProductById = async () => {
//       const promise = await fetch(`https://fakestoreapi.com/products/${id}`);
//       const data = await promise.json();
//       setSingleProduct(data);
//     };

//     getProductById();
//   }, [id]);

//   return (
//     <>
//       {singleProduct && (
//         <div className="flex flex-col md:flex-row md:items-center md:pt-5 md:justify-center ">
//           <div className="flex justify-center bg-white py-4 shadow-lg shadow-slate-200 px-4 md:px-6">
//             <img
//               className=" w-auto h-96 md:w-[30vw]  md:h-[450px]"
//               src={singleProduct.image}
//               alt={singleProduct.title}
//             />
//           </div>
//           <div className="md:w-[66vw] px-10 py-4 max-w-lg">

//             <h1 className="text-2xl lg:text-2xl ">{singleProduct?.title}</h1>
//             <p className="font-serif">{singleProduct?.category}</p>
//             <div className="flex gap-x-10 px-6 my-2">
//               <p className="text-lg lg:text-2xl font-serif whitespace-nowrap">
//                 ₹ {Math.round(singleProduct.price)}
//               </p>
//               <div className="flex gap-2 items-center ">
//                 <p className="font-bold text-xl">Rating:</p>
//                 {[...Array(Math.round(Number(singleProduct.rating.rate)))].map(
//                   (_, i) => (
//                     <span
//                       className="px-2 py-2 w-4 h-4 bg-yellow-500  rounded-full"
//                       key={i}
//                     ></span>
//                   )
//                 )}
//                 <span className="text-lg font-medium">
//                   {singleProduct.rating.rate}
//                 </span>
//               </div>
//             </div>
//             <p>{singleProduct?.description}</p>
//             <div className="flex justify-center gap-4 mt-5 ">
//             {
//               singleProduct.quantity>0?  (<button

//               onClick={() =>
//                 dispatch(removeItem(singleProduct))
//               }
//               className={`px-4  font-semibold md:px-10 py-2 bg-red-500
//               rounded-sm whitespace-nowrap`}
//             >
//               Remove
//             </button>):  (<button

//               onClick={() =>
//                 dispatch(addToCart({ ...singleProduct, quantity: 1 }))
//               }
//               className={`px-4  font-semibold md:px-10 py-2 hover:bg-yellow-500 bg-[#F7CA00]
//               rounded-sm whitespace-nowrap`}
//             >
//               Add to cart
//             </button>)
//             }
//               <Link
//                 to={"/cart"}
//                 className="px-4 font-semibold md:px-10 py-2 hover:bg-orange-600 bg-orange-400 rounded-sm whitespace-nowrap"
//               >
//                 Go To Cart
//               </Link>

//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ProductDetail;
