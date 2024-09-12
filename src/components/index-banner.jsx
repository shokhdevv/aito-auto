"use client"
import React from 'react'
import {ButtonUI, ImgUI} from '.'
import {langSelect} from "@/helper";
import {useTranslation} from "react-i18next";
import Link from "next/link";

export default function IndexBanner({banner}) {
  const {i18n} = useTranslation()
  return (
    <div className='h-screen relative'>
      <video className="object-cover object-bottom w-full h-full relative z-10" autoPlay loop muted>
        <source
          className="w-full"
          src={`${process.env.NEXT_PUBLIC_API_URL}/${banner?.video?.path}`}
          type="video/mp4"
        />
      </video>
      <div className=' z-[11]  absolute bottom-8 left-0 right-0'>
        <div className='container flex max-lg:flex-col justify-between items-center lg:items-end gap-y-5'>
          <div className='w-full lg:w-[40%] text-white lg:max-w-[420px] gap-1.5 overflow-hidden rounded-2xl bg-[#FFFFFF08] p-4 backdrop-blur-[48px] flex flex-col max-lg:items-center'>
            <p className=' text-2xl font-conquera font-bold tracking-wider'>AITO</p>
            <h2 className=' text-3xl font-conquera uppercase'>MODEL {banner?.car?.name}</h2>
            <p className=' text-base font-future'>{langSelect(i18n.language, banner?.car?.modelDescriptionRu, banner?.car?.modelDescriptionUz
            )}</p>
            <div className='flex lg:w-full w-fit items-center  pt-3 gap-3 md:gap-6 '>
              <ButtonUI text={'Тест-драйв'}/>

              <ButtonUI href={`models/${banner?.car?.slug}`} text={'Подробнее'} isFillBtn />
            </div>
          </div>
          <div className='grid grid-cols-3 text-white w-full lg:w-fit divide-x divide-white'>
            <div className='px-5 gap-2 flex flex-col items-center '>
              <div className='w-[42px] aspect-square lg:w-[52px] relative'>
                <ImgUI src={'/speed.svg'} alt={'Speed icon'}/>
              </div>
              <h3 className=' font-futura text-lg md:text-xl text-center lg:text-2xl  xl:text-3xl'>{banner?.powerReserve} км</h3>
              <p className=' text-sm text-center font-futura'>Запас хода</p>
            </div>
            <div className='px-5 gap-2 flex flex-col items-center '>
              <div className='w-[42px] aspect-square lg:w-[52px] relative'>
                <ImgUI src={'/hybrid.svg'} alt={'hybrid icon'}/>
              </div>
              <h3 className=' font-futura text-lg md:text-xl text-center lg:text-2xl  xl:text-3xl'>{banner?.peakPower} л.с</h3>
              <p className=' text-sm text-center font-futura'>Пиковая мощность</p>
            </div>
            <div className='px-5 gap-2 flex flex-col items-center '>
              <div className='w-[42px] aspect-square lg:w-[52px] relative'>
                <ImgUI src={'/speedometer.svg'} alt={'speedometer icon'}/>
              </div>
              <h3 className=' font-futura text-lg md:text-xl text-center lg:text-2xl  xl:text-3xl'>{banner?.acceleration} сек</h3>
              <p className=' text-sm text-center font-futura'>Разгон до 100 км/ч</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
