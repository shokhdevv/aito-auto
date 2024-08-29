import Link from 'next/link'
import React from 'react'

export default function AnimationBtn({text, href}) {
  return (
    <Link href={href} className='flex flex-col items-center justify-center relative w-fit'>
      <div className='w-20 h-20   border-x rounded-[90%] p-4  border-white  '>
      {/* <div className='w-full h-full  border-x rounded-full border-white '>
      </div> */}
      </div>
      <span className='font-futura text-white text-sm lg:text-base  text-nowrap text-center absolute'>{' '}</span>
    </Link>
  )
}
