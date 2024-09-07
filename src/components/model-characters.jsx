"use client"
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { GiCarSeat, GiCheckMark } from "react-icons/gi";
import { ImgUI, SectionTitle } from '.';
import { useEffect, useState } from 'react';
import { IoCarSportOutline } from 'react-icons/io5';
const positions = [
  {
    title: "AITO M5 Ultimate",
    _id: 0,
    list: [
      {
        title: "12-позиционная электрорегулировка передних сидений",
        _id: 0
      },
      {
        title: "Передние сиденья с функцией массажа",
        _id: 1
      },
      {
        title: "Функция памяти сиденья водителя",
        _id: 2
      },
      {
        title: "Проекционный дисплей HUD",
        _id: 3
      },
      {
        title: "Адаптивная система круиз-контроля (ACC)",
        _id: 4
      },
      {
        title: "Панорамная крыша",
        _id: 5
      },
      
      {
        title: "Зеркала заднего вида с автоматическим затемнением",
        _id: 6
      },
      {
        title: '10,25" дисплей комбинации приборов',
        _id:7
      },
      {
        title: '15,6" мультимедийный дисплей',
        _id: 8
      },
      
    ]
  },
  {
    title: "AITO M5 Ultimate",
    _id: 1,
    list: [
      {
        title: "12-позиционная электрорегулировка передних сидений",
        _id: 0
      },
      {
        title: "Передние сиденья с функцией массажа",
        _id: 1
      },
      {
        title: "Функция памяти сиденья водителя",
        _id: 2
      },
      {
        title: "Проекционный дисплей HUD",
        _id: 3
      },
      {
        title: "Адаптивная система круиз-контроля (ACC)",
        _id: 4
      },
      {
        title: "Панорамная крыша",
        _id: 5
      },
      
      {
        title: "Зеркала заднего вида с автоматическим затемнением",
        _id: 6
      },
      {
        title: '10,25" дисплей комбинации приборов',
        _id:7
      },
      {
        title: '15,6" мультимедийный дисплей',
        _id: 8
      },
      
    ]
  },
  {
    title: "AITO M5 Ultimate",
    _id: 2,
    list: [
      {
        title: "12-позиционная электрорегулировка передних сидений",
        _id: 0
      },
      {
        title: "Передние сиденья с функцией массажа",
        _id: 1
      },
      {
        title: "Функция памяти сиденья водителя",
        _id: 2
      },
      {
        title: "Проекционный дисплей HUD",
        _id: 3
      },
      {
        title: "Адаптивная система круиз-контроля (ACC)",
        _id: 4
      },
      {
        title: "Панорамная крыша",
        _id: 5
      },
      
      {
        title: "Зеркала заднего вида с автоматическим затемнением",
        _id: 6
      },
      {
        title: '10,25" дисплей комбинации приборов',
        _id:7
      },
      {
        title: '15,6" мультимедийный дисплей',
        _id: 8
      },
      
    ]
  },
]
const buttons = [
  {
    _id: 0
  },
  {
    _id: 1
  },
  {
    _id: 2
  },
  {
    _id: 3
  },
  {
    _id: 4
  },
  {
    _id: 5
  },
  {
    _id: 6
  },
 
]
export default function ModelCharacters({  }) {
  const [angle, setAngle] = useState(-105);
  useEffect(() => {
    const handleResize = () => {
      setAngle(window.innerWidth > 1023 ? -105 : -195);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="container relative z-10">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1.4,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.6,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="positionSwiper custom-pagination"
        >
          {
            positions.map(card => (
              <SwiperSlide key={card._id}>
                <PositionCard title={card?.title} key={card?._id} list={card?.list}   />
              </SwiperSlide>
            ))
          }
          <div className="swiper-pagination">
          </div>
        </Swiper>
      </div>
      <div className=' relative pt-10 max-lg:overflow-hidden lg:overflow-x-hidden lg:overflow-y-visible z-10 '>
          <div className="container">
            <div className='lg:px-10'>
              <SectionTitle extraStyle={'uppercase'} title={'кристально-серый'}/>
              <p className='text-[#FFFFFFCC] font-futura text-sm md:text-base lg:text-lg xl:text-xl lg:mt-3'>Crystal grey</p>
              <div className='grid grid-cols-1 grid-rows-2 lg:grid-rows-1 '>
                <div className='w-full aspect-[2/1] lg:w-[65%] relative'>
                  <ImgUI src={'/modelcolor.png'} alt={'Model color'} objectFitContain/>
                </div>
                <div className='max-lg:w-[90%]  right-[50%] translate-x-1/2  -bottom-[40%] lg:h-[90%] lg:bottom-1/2 lg:translate-y-1/2 lg:-right-0 max-w-[550px] absolute  aspect-square rounded-full border border-[#FFFFFFCC] flex flex-col lg:justify-center max-lg:items-center p-[20%] lg:p-[7%]'>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {buttons.map((_, index) => {
                      const angleStep = 150 / (buttons.length - 1);; 
                      const currentangle = angleStep * index - angle; 
                      const radians = (currentangle * Math.PI) / 180;

                      const x = 50 + 50 * Math.cos(radians); 
                      const y = 50 + 50 * Math.sin(radians); 
                    
                      return (
                        <div
                          key={index}
                          className="absolute"
                          style={{
                            top: `${y}%`,
                            left: `${x}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <button className={`w-8 lg:w-10 xl:w-[51px] aspect-square relative  rounded-full  `}>
                            <ImgUI src={'/color-icon.png'} alt={"Icon Image"}/>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  <div className=' flex items-center gap-2'>
                    <button className='bg-white p-1 lg:p-2 rounded-full'>
                      <IoCarSportOutline className='text-2xl lg:text-3xl' />
                    </button>
                    <button className='bg-transparent p-1 lg:p-2 rounded-full'>
                      <GiCarSeat className='text-2xl lg:text-3xl text-white' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}


function PositionCard ({isActive, title, list}) {
  return (
    <div className={`border border-[#3F3F3F] p-8 pt-5 text-white xl:p-[60px] gap-5 xl:gap-10 xl:pt-10 flex flex-col items-center rounded-xl ${isActive ? 'bg-[#FFFFFF08] shadow-inner-[0_0_68px_0_#FFFFFF0D]' : " bg-[#151515]"} `}>
      <h4 className=' font-futura text-lg lg:text-xl '>{title}</h4>
      <ul className='space-y-2 max-lg:text-sm'>
        {
          list?.map(item => (
            <li key={item?._id} className='flex gap-2 leading-[1.1]'>
              <GiCheckMark />
              <span>{item?.title}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

