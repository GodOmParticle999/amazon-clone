import React, { useEffect } from 'react'
import Banner from '../components/Banner/Banner'
import Products from '../components/Products/Products'

const HomePage = () => {
  
  useEffect(()=>{
    const getUsers=async()=>{
      try {
        const res=await fetch("http://localhost:5000/user/getUsers")
        const data=await res.json()
        console.log(data)
      } catch (error) {
      
      }
    }
    getUsers()
  },[])
  return (
    <div  >
      <div className='w-full  h-auto z-0'>
        
     <Banner/>
     <div className='-mt-16 md:-mt-[132px] relative z-10'>

     <Products/>
     </div>
      </div>
     
    </div>
  )
}

export default HomePage

