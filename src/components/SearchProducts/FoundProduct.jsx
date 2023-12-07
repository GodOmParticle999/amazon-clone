import React from 'react'

const FoundProduct = ({product}) => {
  return (
    <div className='flex p-5 items-center gap-x-2  '>
        <img className='w-10 h-10' src={product.image} alt="found Product" />
        <p >{product.title}</p>
    </div>
  )
}

export default FoundProduct