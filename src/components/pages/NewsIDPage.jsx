"use client"
import { NewsBanner, NewsCard } from '@/components'
import { langSelect } from '@/helper'
import i18next from 'i18next'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function page({data}) {
  const {t , i18n } = useTranslation()
  return (
    <main className='overflow-x-hidden'>
      <NewsBanner title={langSelect(i18n.language , data?.titleRu ,data?.titleUz)} date={moment(data?.createdAt).format('MMM DD, YYYY')} image={`${process.env.NEXT_PUBLIC_API_URL}/${data?.image?.path}`}/> 
      <section className='py-6 lg:pt-[50px] bg-currentDark text-white'>
        <div className="container flex flex-col items-center space-y-6 lg:space-y-10">
          <div className='xl:px-[5vw] space-y-6 lg:space-y-10 w-full'>
            <div className='  !text-white w-full max-w-none prose prose-slate prose-strong:text-white' dangerouslySetInnerHTML={{__html: i18n.language === 'ru' ? data?.textRu : data?.textUz}}>
            </div>
          </div>
          <div className='space-y-3 lg:space-y-6 w-full'>
            <div className='flex justify-between items-center'>
              <h3 className=' font-bold md:text-lg lg:text-xl xl:text-2xl'>{t('newsInner')}</h3>
              <div></div>
            </div>
            <Swiper
              slidesPerView={3}
              breakpoints={{
                640: {
                  slidesPerView: 1.4,
                },
                768: {
                  slidesPerView: 1.7,
                },
                1024: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 2.6,
                },
                1500: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={30}
              modules={[Navigation]}
              className="mySwiper w-full"
            >

              {/* {news &&
          news?.map(card => (
            <SwiperSlide key={card?._id}>
              <NewsCard image={card?.image} slug={card?.slug} text={card?.text} date={card?.date}/>
            </SwiperSlide>
          ))
        } */}
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  )
}
