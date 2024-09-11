"use client"
import { useTranslation } from 'react-i18next';
import { ButtonUI, ImgUI, SectionTitle } from '.'
import { MdArrowOutward } from "react-icons/md";

export default function NewsBanner({image, date, title, href}) {
  const {t} = useTranslation()
  return (
    <div className=' h-[70vh] w-full relative flex flex-col justify-center '>
      <div className='absolute top-0 left-0 z-[4] w-full h-full '>
        <ImgUI src={image} imageStyle={'object-center'} alt={"News Banner Image"}/>
      </div>
      <span className='w-full h-full bg-gradient-to-l absolute top-0 left-0 z-[5] from-[#0000001A] to-[#00000097]'></span>
      <div className='relative z-10 w-full'>
        <div className="container  ">
          <div className='flex flex-col items-start lg:max-w-[530px] gap-4 lg:gap-5'>
            <p className=' text-white max-lg:text-sm'>{date}</p>
            <SectionTitle title={title} extraStyle={'!leading-[1.3]'}/>
            {
              href &&
              <ButtonUI text={t('btn.more')} href={href} icon={<MdArrowOutward className=' text-lg xl:text-xl' />} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}
