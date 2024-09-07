import { BgPage, ButtonUI, SectionTitle } from '@/components'
import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebookF, FaMapMarkerAlt, FaTelegramPlane } from 'react-icons/fa'

export default function page() {
  return (
    <main className='pt-[68px] bg-currentDark lg:pt-20 relative overflow-x-hidden'>
      <section className='py-6 lg:pt-[50px] relative z-10'>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 text-white">
          <div className='space-y-6'>
            <SectionTitle title={'Контакты'}/>
            <div className='lg:space-y-8 space-y-3 max-md:text-sm'>
              <div className='text-[#FFFFFFCC] flex items-center gap-4'>
                <FaMapMarkerAlt className="lg:text-2xl"/>
                <p>г. Ташкент, ул. Фурката, 34</p>
              </div>
              <div className='text-[#FFFFFFCC] flex items-center gap-4'>
                <BsFillTelephoneFill className="lg:text-2xl"/>
                <div className='flex flex-col'>
                  <a href='tell:+998989998899'>+998 98 999 88 99</a>
                  <a href='tell:+998989998899'>+998 98 999 88 99</a>
                </div>
              </div>
              <div className="flex gap-3 xl:gap-6 items-center ">
                <a href="https://www.facebook.com">
                  <FaFacebookF className=" text-2xl duration-200 hover:scale-110" />
                </a>
                <a href="https://www.telegram.org/">
                  <FaTelegramPlane  className=" text-2xl duration-200 hover:scale-110" />
                </a>
                <a href="https://www.instagram.com">
                  <AiFillInstagram  className=" text-2xl duration-200 hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
          <div className=''>
            <form className='flex flex-col items-start gap-4  lg:gap-8'>
              <div className='max-w-[470px]'>
                <h3 className='text-lg font-bold lg:text-xl xl:text-2xl mb-4'>Появились вопросы? Мы Вам поможем</h3>
                <p className=' max-lg:text-sm '>Пожалуйста заполните небольшую форму. Наш оператор свяжется с вами в удобное для вас время</p>
              </div>
              <div className='max-w-[470px] w-full space-y-3 lg:space-y-6'>
                <input type="text" placeholder='Имя' className='w-full focus:outline-none px-3 py-2 !leading-[1.2] lg:px-4 lg:py-3 text-white font-futura max-lg:text-sm rounded bg-currentDark border-[0.5px] border-[#FFFFFFE5]' />
                <input type="text" placeholder='Телефон' className='w-full focus:outline-none px-3 py-2 !leading-[1.2] lg:px-4 lg:py-3 text-white font-futura max-lg:text-sm rounded bg-currentDark border-[0.5px] border-[#FFFFFFE5]' />
                <textarea type="text" placeholder='Комментарий' className='w-full focus:outline-none px-3 py-2 !leading-[1.2] lg:px-4 lg:py-3 text-white font-futura max-lg:text-sm rounded bg-currentDark border-[0.5px] border-[#FFFFFFE5]' />
              </div>
              <ButtonUI text={'Отправить'}/>
            </form>
          </div>
          <div className='w-full aspect-square md:aspect-[5/2] lg:col-span-2'>
            <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.5853654117986!2d69.2450475765396!3d41.296127701650114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b749be55555%3A0x1afb789ee32b6ccf!2sAbduganiev%20Technology!5e0!3m2!1sru!2s!4v1725544659138!5m2!1sru!2s" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </section>
      <BgPage positionStyle={' w-[200px] -top-[50px] md:-top-[200px] xl:-top-[300px] -left-[50px] md:w-[350px] xl:w-[500px]'}/>
      <BgPage positionStyle={' w-[200px] top-[50%]  -right-[50px] md:w-[350px] xl:w-[500px]'}/>
    </main>
  )
}
