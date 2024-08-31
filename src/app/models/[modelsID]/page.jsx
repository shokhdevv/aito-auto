import { ImgUI, ModelCharacters } from '@/components'
import React from 'react'

export default function Page() {
  return (
    <div className=''>
      <section className='h-screen relative flex flex-col items-center justify-end'>
        <div className=' absolute top-0 left-0 w-full h-full z-[4]'>
          <ImgUI src={'/bannermodelpage.jpg'} alt={'Header Image'}/>
        </div>
        <div className='flex flex-col items-center relative z-10 text-white'>
          <h2 className=' font-conquera text-lg md:text-xl lg:text-2xl xl:text-[32px] '>MODEL M7</h2>
          <p className='mt-4 text-sm lg:text-base'>Премиальный спортивный кроссовер</p>
          <div className=' rounded-xl max-w-[760px] bg-[#FFFFFF08] backdrop-blur-xl overflow-hidden mx-3 gap-y-2 p-4 md:p-6 lg:p-10 flex flex-wrap justify-evenly translate-y-[35%]'>
            <div className='flex flex-col items-center gap-1.5 px-4 lg:px-5 w-[30%] md:w-[25%]'>
              <h3 className='font-futura text-lg text-center md:text-xl lg:text-2xl xl:text-[32px]'>1200км</h3>
              <p className='font-futura text-xs lg:text-sm text-center'>Запас хода</p>
            </div>
            <div className='flex flex-col items-center gap-1.5 px-4 lg:px-5 w-[30%] md:w-[25%]'>
              <h3 className='font-futura text-lg text-center md:text-xl lg:text-2xl xl:text-[32px]'>487л.с</h3>
              <p className='font-futura text-xs lg:text-sm text-center'>Пиковая мощность</p>
            </div>
            <div className='flex flex-col items-center gap-1.5 px-4 lg:px-5 w-[30%] md:w-[25%]'>
              <h3 className='font-futura text-lg text-center md:text-xl lg:text-2xl xl:text-[32px]'>4.6сек</h3>
              <p className='font-futura text-xs lg:text-sm text-center'>Разгон до 100 км/ч</p>
            </div>
            <div className='flex flex-col items-center gap-1.5 px-4 lg:px-5 w-[30%] md:w-[25%]'>
              <h3 className='font-futura text-lg text-center md:text-xl lg:text-2xl xl:text-[32px]'>4.6сек</h3>
              <p className='font-futura text-xs lg:text-sm text-center'>Разгон до 100 км/ч</p>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-28 pb-10  bg-currentDark'>
        <ModelCharacters/>
      </section>
    </div>
  )
}
