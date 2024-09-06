import { ButtonUI, ImgUI, SectionTitle } from '@/components'
import React from 'react'

export default function page() {
  return (
    <>
      <section className=' relative flex h-[70vh] flex-col justify-center'>
        <div className="w-full h-full  absolute top-0 left-0 z-[4] ">
          <ImgUI src={'/car-service.jpg'} alt={"Banner Image"} imageStyle={'!object-center'}/>
        </div>
        <div className='relative z-10  text-white bg-currentDark/50 w-full h-full flex flex-col justify-center'>
          <div className="container flex flex-col items-center">
            <div className='flex flex-col items-center lg:max-w-[550px] gap-4 '>
              <SectionTitle isTextCenter={true} title={'Официальный сервис'} isLittleSize/>
              <p className='text-[#FFFFFFCC] text-center max-lg:text-sm'>Покупая автомобиль, вы получаете доступ к ряду премиальных сервисов и услуг, с которым владение автомобилем становится ещё более комфортным</p>
              <div className='flex items-center gap-5 pt-4 lg:gap-10'>
                <ButtonUI text={'Записаться на сервис'}/>
                <ButtonUI text={'Гарантия'} isFillBtn/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-6 lg:pt-[60px] bg-currentDark'>
        <div className="container">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 2xl:gap-[60px]'>
            {
              Array.from({ length: 6 }).map((card , index) => (
                <ServiceCard key={index}/>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

 function ServiceCard() {
  return (
    <div className='bg-[#0303039E] p-4 xl:p-6 rounded-[20px] border border-[#282828] text-white space-y-4 xl:space-y-6'>
      <div className='flex items-center gap-4 xl:gap-6'>
        <div className='p-2.5 rounded-xl bg-[#444444] border border-[#000000B2] '>
          <div className='w-8 aspect-square lg:w-[46px] relative'>
            <ImgUI src={'/service-icon.png'} alt={"Icon Aito"} objectFitContain/>
          </div>
        </div>
        <h4 className=' font-bold md:text-lg lg:text-xl xl:text-2xl'>Надежно</h4>
      </div>
      <p className=' max-xl:text-sm'>Срок гарантии на новые автомобили SERES составляет 2 (два) года или 100.000 км пробега (в зависимости от того, что наступит ранее)</p>
    </div>
  )
}

