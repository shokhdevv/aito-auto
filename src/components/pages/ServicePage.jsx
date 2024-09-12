"use client"
import { ButtonUI, ImgUI, SectionTitle, ServiceFormModal } from '@/components'
import { langSelect } from '@/helper'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function page({data}) {
  const {i18n , t} = useTranslation()
  const [formModal , setFormModal] = useState(false)
  return ( 
    <>
      <section className=' relative flex h-[70vh] flex-col justify-center'>
        <div className="w-full h-full  absolute top-0 left-0 z-[4] ">
          <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.banner?.path}`} alt={"Banner Image Aito"} imageStyle={'!object-center'}/>
        </div>
        <div className='relative z-10  text-white bg-currentDark/50 w-full h-full flex flex-col justify-center'>
          <div className="container flex flex-col items-center">
            <div className='flex flex-col items-center lg:max-w-[550px] gap-4 '>
              <SectionTitle isTextCenter={true} title={langSelect(i18n.language , data?.titleRu, data?.titleUz )} isLittleSize/>
              <p className='text-[#FFFFFFCC] text-center max-lg:text-sm'>{langSelect(i18n.language , data?.textRu, data?.textUz )}</p>
              <div className='flex items-center gap-5 pt-4 lg:gap-10'>
                <ButtonUI text={t('btn.signService')} onClick={() => setFormModal(true)}/>
                <ButtonUI text={t('btn.warranty')} isFillBtn/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-6 lg:pt-[60px] bg-currentDark'>
        <div className="container">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10 2xl:gap-[60px]'>
            {
              data?.list?.map((card ) => (
                <ServiceCard service={card} key={card?._id}/>
              ))
            }
          </div>
        </div>
      </section>
      <ServiceFormModal setModal={setFormModal} modal={formModal}/>
    </>
  )
}

function ServiceCard({service}) {
  const {i18n} = useTranslation()
  return (
    <div className='bg-[#0303039E] p-4 xl:p-6 rounded-[20px] border border-[#282828] text-white space-y-4 xl:space-y-6'>
      <div className='flex items-center gap-4 xl:gap-6'>
        <div className='p-2.5 rounded-xl bg-[#444444] border border-[#000000B2] '>
          <div className='w-8 aspect-square lg:w-[46px] relative'>
            <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${service?.icon?.path}`} alt={"Icon Aito"} objectFitContain/>
          </div>
        </div>
        <h4 className=' font-bold md:text-lg lg:text-xl xl:text-2xl'>{langSelect(i18n.language , service?.titleRu, service?.titleUz)}</h4>
      </div>
      <p className=' max-xl:text-sm'>{langSelect(i18n.language , service?.textRu, service?.textUz)}</p>
    </div>
  )
}

