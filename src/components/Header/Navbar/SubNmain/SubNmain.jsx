import React from 'react'

const SubNmain = (props) => {
const {sub,main,hidden}=props
  return (
    <div className={`px-1 ${hidden} md:block applyBorder cursor-pointer`}>
    <div className="text-[11px] text-gray-300 ">{sub}</div>
    <div className="uppercase text-[13px] ">{main}</div>
  </div>
  )
}

export default SubNmain