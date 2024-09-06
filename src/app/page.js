"use client"
import {  CarIndex, ImgUI, IndexBanner, NewsCard, TestDriveSection } from "@/components";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from 'swiper/modules';

const banner = {
    src : 'https://www.global-seres.com/website-resources/video/WHATISSERES.mp4?v=72727988',
    _id: 0
}
const news = [
  {
    _id: 0,
    text: 'Мы вынуждены отталкиваться от того, что социально-экономическое развитие способствует повышению качества прогресса профессионального сообщества. ',
    date: "03 август, 2024",
    image: "/news1home.jpg",
    slug: "/news/1"
  },
  {
    _id: 1,
    text: 'Мы вынуждены отталкиваться от того, что социально-экономическое развитие способствует повышению качества прогресса профессионального сообщества. ',
    date: "03 август, 2024",
    image: "/news2home.jpeg",
    slug: "/news/1"
  },
  {
    _id: 2,
    text: 'Мы вынуждены отталкиваться от того, что социально-экономическое развитие способствует повышению качества прогресса профессионального сообщества. ',
    date: "03 август, 2024",
    image: "/news3home.webp",
    slug: "/news/1"
  },
  {
    _id: 3,
    text: 'Мы вынуждены отталкиваться от того, что социально-экономическое развитие способствует повышению качества прогресса профессионального сообщества. ',
    date: "03 август, 2024",
    image: "/news3home.webp",
    slug: "/news/1"
  },
]

export default function Home() {
  return (
    <>
      <section className=" ">
        <IndexBanner src={banner.src}/>
      </section>
      <section id="models" className="bg-currentDark pt-10 pb-7 lg:pt-20 lg:pb-14 relative">
        <div className="container flex flex-col items-center">
          <div className="w-full lg:px-[5%] scroll-thin">
            <h2 className=" font-futura text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#FFFFFF9C]">Модели</h2>
            <div className="">
              <CarIndex name={'AITO M5'} image={'/aitoM5.png'} slug={'/models/m5'}/>
              <CarIndex name={'AITO M7'} image={'/aitoM7.png'} slug={'/models/m7'}/>
              <CarIndex name={'AITO M9'} image={'/aitoM9.png'} slug={'/models/m9'}/>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-[#F9F9F9] max-md:pt-10 overflow-x-hidden overflow-y-visible md:pb-16 ">
        <div className="container">
          <h2 className=" text-[14vw] md:text-[12vw] !leading-[1.3] font-goodTiming text-nowrap ">
            <span className=" gradient-text-light ">О БРЕНДЕ</span>
          </h2>
          <h4 className="text-[5.8vw] font-conquera font-bold  !leading-[1.3] -translate-y-[40%]">
            <span className="gradient-text-dark">AITO</span>
          </h4>
          <div className="font-futura max-md:text-sm !leading-[1.3] 3xl:text-xl lg:text-lg text-currentDark font-normal md:w-1/2 space-y-6">
            <p className="">AITO - ведущая китайская компания по производству автомобилей на новых источниках энергии. Она была основана в 1986 году и в настоящее время входит в число 500 наиболее крупных компаний КНР. Штат компании превышает 20 000 сотрудников, ее акции котируются на Шанхайской фондовой бирже. </p>
            <p>В 2021 году в сотрудничестве с Huawei, одной из крупнейших мировых компаний в сфере телекоммуникаций, было запущено производство премиальных гибридных и электромобилей под брендом AITO. Бренд AITO был выбран для продвижения на внешних для КНР рынках.</p>
          </div>
        </div>
          <div className="w-full relative md:absolute bottom-0 right-0 aspect-[2/1] lg:w-[1100px] md:-right-1/2 lg:-right-[400px] 2xl:-right-[230px]  ">
            <ImgUI src={'/abouthome.png'} alt={'About Home'} />
          </div>
      </section>
      <section className=" bg-gradient-to-b from-[#2A2A2A] to-[#151515] py-14">
        <div className="container">
          <h2 className="text-[14vw] md:text-[12vw] !leading-[1.3] mb-5 font-goodTiming font-bold text-nowrap">
            <span className="gradient-text-black ">НОВОСТИ</span>
          </h2>
          <NewsSwiper />
        </div>
      </section>
      <section className=" bg-currentDark pb-10 lg:py-16 relative overflow-hidden">
        <TestDriveSection/>
      </section>
    </>
  );
}

const NewsSwiper = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
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
        modules={[Pagination]}
        className="newsSwiper custom-pagination !pb-5"
      >
        {
          news?.map(card => (
            <SwiperSlide key={card?._id}>
              <NewsCard image={card?.image} slug={card?.slug} text={card?.text} date={card?.date}/>
            </SwiperSlide>
          ))
        }
        <div className="swiper-pagination">
        </div>
      </Swiper>
    </div>
  )
}
