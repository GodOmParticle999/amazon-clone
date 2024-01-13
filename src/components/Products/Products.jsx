import React, { useEffect} from 'react'
import Product from './Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../redux/slices/cartSlice'

const Products = () => {
    const products=useSelector(state=>state.cart.products)
    const dispatch=useDispatch()

    // fetch product 
    useEffect(()=>{
        const getProducts=async()=>{
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
                dispatch(setProducts(data))
                console.log(data)
            })
        }
        getProducts()
    },[])
  return (
   
        <div className='  mx-auto grid grid-cols-1 place-items-center sm:grid-cols-2 xl:grid-cols-3   p-10 gap-10  '>

        {
       
            products.map((product)=>(
                <Product key={product.id} product={product}/>
            ))
        }
        </div>
    
  )
}

export default Products