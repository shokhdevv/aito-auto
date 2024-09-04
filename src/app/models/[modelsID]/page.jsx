"use client"
import { ImgUI, ModelCharacters } from '@/components'
import React from 'react'
import { Pagination } from 'swiper/modules'
import { SwiperSlide, Swiper } from 'swiper/react'

export default function Page() {
  return (
    <div>
      <section className='h-screen relative flex flex-col items-center justify-end'>
        <div className=' absolute top-0 left-0 w-full h-full z-[4]'>
          <ImgUI src={'/bannermodelpage.jpg'} alt={'Header Image'}/>
        </div>
        <div className='flex flex-col items-center relative z-10 text-white'>
          <h2 className=' font-conquera text-lg md:text-xl lg:text-2xl xl:text-[32px] '>MODEL M7</h2>
          <p className='mt-4 text-sm lg:text-base'>Премиальный спортивный кроссовер</p>
          <div className=' rounded-xl max-w-[760px] w-full bg-[#FFFFFF08] backdrop-blur-xl overflow-hidden mx-3 gap-y-2 p-4 md:p-6 lg:p-10 flex flex-wrap justify-evenly translate-y-[35%]'>
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
        <ModelCharacters />
      </section>
      <section className='py-7 lg:py-10 bg-currentDark'>
        <div className="container">
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10 lg:grid-rows-2'>
            <div className='w-full aspect-square lg:row-span-2 lg:h-full relative rounded-xl overflow-hidden max-sm:order-2'>
              <ImgUI src={'/inner-page.png'} alt={'Image About car'} imageStyle={'object-center'}/>
            </div>
            <div className='text-white lg:col-span-2 lg:h-full flex flex-col justify-center lg:justify-between max-sm:order-1'>
              <div className='space-y-2'>
                <h3 className=' font-conquera text-lg lg:text-xl xl:text-2xl'>AITO M7 </h3>
                <p className='text-sm lg:text-base'>Обладает современным лаконичным дизайном кузова: светодиодная оптика, приветственное освещение, выдвижные дверные ручки — автомобиль выглядит внушительно и величественно с любого ракурса</p>
              </div>

            </div>
            <div className='w-full  max-sm:order-3 sm:col-span-2'>
              <Swiper
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1.8,
                  },
                  1024: {
                    slidesPerView: 1.6,
                  },
                  1280: {
                    slidesPerView: 2,
                  },
                }}
                spaceBetween={20}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className='w-full '>
                  <div className='relative aspect-[4/3] overflow-hidden rounded-xl'>
                    <div className='w-full h-full absolute top-0 left-0 z-[5]'>
                      <ImgUI src={'/ekstrier-1.png'} alt={'Exterior Image'}/>
                    </div>
                    <div className='w-full absolute bottom-0 z-10 rounded-xl space-y-1 !leading-[1.2] overflow-hidden left-0 bg-[#00000080] backdrop-blur-[20px] px-4 py-3 shadow-[inset_0_0_30px_0_rgba(255,255,255,0.05),inset_0_1px_4px_0_rgba(255,255,255,0.15)]'>
                      <h4 className=' text-white text-[15px] '>Светодиодная оптика</h4>
                      <p className=' text-white text-xs'>Вытянутые светодиодные фары автомобиля создают утонченный и элегантный облик</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='w-full '>
                  <div className='relative aspect-[4/3] overflow-hidden rounded-xl'>
                    <div className='w-full h-full absolute top-0 left-0 z-[5]'>
                      <ImgUI src={'/ekstrier-1.png'} alt={'Exterior Image'}/>
                    </div>
                    <div className='w-full absolute bottom-0 z-10 rounded-xl space-y-1 !leading-[1.2] overflow-hidden left-0 bg-[#00000080] backdrop-blur-[20px] px-4 py-3 shadow-[inset_0_0_30px_0_rgba(255,255,255,0.05),inset_0_1px_4px_0_rgba(255,255,255,0.15)]'>
                      <h4 className=' text-white text-[15px] '>Светодиодная оптика</h4>
                      <p className=' text-white text-xs'>Вытянутые светодиодные фары автомобиля создают утонченный и элегантный облик</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className='w-full '>
                  <div className='relative aspect-[4/3] overflow-hidden rounded-xl'>
                    <div className='w-full h-full absolute top-0 left-0 z-[5]'>
                      <ImgUI src={'/ekstrier-1.png'} alt={'Exterior Image'}/>
                    </div>
                    <div className='w-full absolute bottom-0 z-10 rounded-xl space-y-1 !leading-[1.2] overflow-hidden left-0 bg-[#00000080] backdrop-blur-[20px] px-4 py-3 shadow-[inset_0_0_30px_0_rgba(255,255,255,0.05),inset_0_1px_4px_0_rgba(255,255,255,0.15)]'>
                      <h4 className=' text-white text-[15px] '>Светодиодная оптика</h4>
                      <p className=' text-white text-xs'>Вытянутые светодиодные фары автомобиля создают утонченный и элегантный облик</p>
                    </div>
                  </div>
                </SwiperSlide>
                
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
