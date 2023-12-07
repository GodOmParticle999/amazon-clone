import React from 'react'
import Menu from '../../Icons/Menu/Menu'
import Title from "./Title"

const NavMain = () => {
  const services=[
    {id:1,
     service:"Amazon miniTV"
    },
    {id:2,
     service:"Sell"
    },
    {id:3,
     service:"Amazon Pay"
    },
    {id:4,
     service:"Buy Again"
    },
    {id:5,
     service:"Gift Ideas"
    },
    {id:6,
     service:"Coupons"
    },
    {id:7,
     service:"Today's Deals"
    }
   
  ]
  return (
    <div className='bg-[#232f3e] w-full flex fixed top-[60px] z-40 items-center h-[40px]  px-2 overflow-hidden no-scrollbar'>
      {/* nav main left */}
      <div className='h-full flex items-center mr-4'>
        <Menu/>
        <p className='ml-2 text-white'>
          All
        </p>
      </div>
      {/* nav fill */}
      <div className='flex justify-between flex-1 shrink-0'>
      {
      services.map((item)=>{
        return(
          <Title key={item.id} title={item.service}/>
        )
      })
      }
      </div>
      {/* nav main right */}
      <p className='text-white whitespace-nowrap ml-6'>
        New Launches from Mobiles, Electronics & more|shop now
      </p>
    </div>
  )
}

export default NavMain