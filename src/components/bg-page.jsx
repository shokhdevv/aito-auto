import React from 'react'

export default function BgPage({positionStyle , }) {
  return (
    <div className={` border-[0.5px] flex items-center justify-center aspect-square border-[#FFFFFF26] rounded-full absolute z-[1] ${positionStyle}`}>
      <div className='w-[90%] h-[90%]  border-[0.5px] border-[#FFFFFF26] rounded-full'></div>
    </div>
  )
}
