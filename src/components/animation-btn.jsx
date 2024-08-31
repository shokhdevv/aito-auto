import Link from 'next/link'
import React from 'react'
import { ImgUI } from '.'

export default function AnimationBtn({text, href}) {
  return (
    <Link href={href} className='flex flex-col items-center justify-center relative w-fit group'>
      <div className='flex flex-col items-center justify-between aspect-square w-14 md:w-[74px]  animate-spin-slow '>
        <div className='relative w-full h-[10%]'>
          <ImgUI src={'/subtrack.svg'} alt={'Subtrack Icon'}/>
        </div>
        <div className='relative w-full h-[10%] rotate-180'>
          <ImgUI src={'/subtrack.svg'} alt={'Subtrack Icon'}/>
        </div>
      </div>
      <div className='flex items-center justify-between aspect-square w-16 md:w-[90px]  absolute z-[5] animate-spin-reverse '>
        <div className='relative w-full h-[10%] -rotate-90'>
          <ImgUI src={'/subtrack.svg'} alt={'Subtrack Icon'}/>
        </div>
        <div className='relative w-full h-[10%] rotate-90'>
          <ImgUI src={'/subtrack.svg'} alt={'Subtrack Icon'}/>
        </div>
      </div>
      <span className='font-futura text-white text-sm lg:text-base  text-nowrap text-center absolute z-10'>{text}</span>
    </Link>
  )
}
