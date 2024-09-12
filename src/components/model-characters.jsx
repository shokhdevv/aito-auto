"use client"
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { GiCarSeat, GiCheckMark } from "react-icons/gi";
import { ImgUI, SectionTitle } from '.';
import { useEffect, useState } from 'react';
import { IoCarSportOutline } from 'react-icons/io5';
import { langSelect } from '@/helper';
import { useTranslation } from 'react-i18next';
import apiService from '@/service/axios';
import { useQuery } from 'react-query';
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
export default function ModelCharacters({positions  }) {
  const { t , i18n} = useTranslation()
  const [angle, setAngle] = useState(-105);
  const [position , setPosition] = useState()
  const [exterior , setExterior] = useState()
  const [interior , setInterior] = useState()
  const [isInterior, setIsInterior] = useState(false);

  const {
    data: exteriorData,
    refetch: exteriorRefetch,
    isSuccess: exteriorIsSucces,
  } = useQuery(
    "exterior",
    () => apiService.getData(`/position/exterior/${position?._id}`),
    { enabled: false }
  );

  const {
    data: interiorData,
    refetch: interiorRefetch,
    isSuccess: interiorIsSucces,
  } = useQuery(
    "interior",
    () => apiService.getData(`/exterior/interior/${exterior._id}`),
    { enabled: false }
  );

  useEffect(() => {
    setPosition(positions[0])
  }, [positions])
  useEffect(() => {
    setExterior(exteriorData?.exterior[0])
  }, [exteriorData])
  useEffect(() => {
    setInterior(interiorData?.interior[0])
  }, [interiorData])

  useEffect(() => {
    if (position) {
      exteriorRefetch();
    }
  }, [position]);
  useEffect(() => {
    if (exterior) {
      interiorRefetch();
    }
  }, [exterior ]);

  useEffect(() => {
    const handleResize = () => {
      setAngle(window.innerWidth > 1023 ? -105 : -195);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleModelColor = (car) => {
    if (!isInterior) {
      setExterior(car);
    }else  if (isInterior){
      setInterior(car);
    }
  };

  let activeBtn = 'outline outline-offset-4 outline-1 outline-[#FFFFFF] bg-white'
  let deActiveBtn = 'bg-transparent text-white '
  
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
            positions?.map(card => (
              <SwiperSlide key={card._id} className='!h-[auto]'>
                <PositionCard onClick={() => setPosition(card)} isActive={card === position} title={langSelect(i18n.language , card?.titleRu , card?.titleUz)} key={card?._id} list={card?.list}   />
              </SwiperSlide>
            ))
          }
          <div className="swiper-pagination">
          </div>
        </Swiper>
      </div>
      {
        exteriorData?.exterior?.length > 0 &&
        <div className=' relative pt-10  z-10  overflow-hidden'>
            <div className="container">
              <div className='lg:px-10 space-y-6 lg:space-y-10'>
                <SectionTitle extraStyle={'uppercase'} title={!isInterior ? langSelect(i18n.language , exterior?.colorNameRu , exterior?.colorNameUz) : langSelect(i18n.language , interior?.colorNameRu , interior?.colorNameUz) }/>
                <div className='grid grid-cols-1 grid-rows-2 lg:grid-rows-1 '>
                  <div className='w-full aspect-[2/1] lg:w-[65%] relative mb-2'>
                    {
                      !isInterior ? 
                      <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${exterior?.carImage?.path}`} alt={'Model color'} objectFitContain/>
                       : 
                      <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${interior?.carImage?.path}`} alt={'Model color'}/>
                    }
                  </div>
                  <div className='max-lg:w-[80%]  right-[50%] translate-x-1/2  -bottom-[35%] lg:h-[90%] lg:bottom-1/2 lg:translate-y-1/2 lg:-right-0 max-w-[550px] absolute  aspect-square rounded-full border border-[#FFFFFFCC] flex flex-col lg:justify-center max-lg:items-center p-[20%] lg:p-[7%]'>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {
                        !isInterior ?
                          exteriorData?.exterior.map((item, index) => {
                            const angleStep = 150 / (buttons.length - 1);; 
                            const currentangle = angleStep * index - angle; 
                            const radians = (currentangle * Math.PI) / 180;
                            const x = 50 + 50 * Math.cos(radians); 
                            const y = 50 + 50 * Math.sin(radians); 
                            return (
                              <ColorBtn y={y} x={x} image={item?.colorImage.path} isActive={item === exterior} onClick={() => handleModelColor(item)}/>
                            )
                          })
                          : 
                          interiorData?.interior.map((item, index) => {
                            const angleStep = 150 / (buttons.length - 1);; 
                            const currentangle = angleStep * index - angle; 
                            const radians = (currentangle * Math.PI) / 180;
                            const x = 50 + 50 * Math.cos(radians); 
                            const y = 50 + 50 * Math.sin(radians); 
                            return (
                              <ColorBtn y={y} x={x} image={item?.colorImage.path} isActive={item === interior} onClick={() => handleModelColor(item)}/>
                            )
                          })
                      }
                    </div>
                    <div className=' flex items-center gap-4 lg:gap-6 relative z-10'>
                      <button onClick={() => setIsInterior(false)} className={`p-1 lg:p-2 rounded-full  ${!isInterior ? activeBtn : deActiveBtn} `}>
                        <IoCarSportOutline className='text-2xl lg:text-3xl' />
                      </button>
                      {
                        interiorData?.interior?.length > 0 &&
                        <button onClick={() => setIsInterior(true)} className={`p-1 lg:p-2 rounded-full  ${isInterior ? activeBtn : deActiveBtn} `}>
                          <GiCarSeat className='text-2xl lg:text-3xl ' />
                        </button>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      }
    </>
  )
}


function PositionCard ({isActive, title, list, onClick}) {
  const { t , i18n} = useTranslation()
  return (
    <div onClick={onClick} className={`border h-full cursor-pointer border-[#3F3F3F] p-8 pt-5 text-white xl:p-[60px] gap-5 xl:gap-10 xl:pt-10 flex flex-col items-center rounded-xl ${isActive ? 'bg-[#FFFFFF08] shadow-[inset_0_0_68px_0_rgba(255,255,255,0.05),inset_0_1px_4px_0_rgba(255,255,255,0.15)]' : " bg-[#151515]"} `}>
      <h4 className=' font-futura text-lg lg:text-xl '>{title}</h4>
      <ul className='space-y-2 max-lg:text-sm'>
        {
          list?.map(item => (
            <li key={item?._id} className='flex gap-2 leading-[1.1]'>
              <GiCheckMark />
              <span>{langSelect(i18n.language , item?.titleRu , item?.titleUz)}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}


function ColorBtn({image , y , x, onClick, isActive}) {
  return (
    <div
      onClick={onClick}
      className={`absolute`}
      style={{
        top: `${y}%`,
        left: `${x}%`,
        transform: "translate(-50%, -50%)",
      }}
  >
      <button  className={`w-8 ${isActive && 'outline outline-offset-4 outline-1 outline-[#FFFFFF]'}  lg:w-10 xl:w-[50px] aspect-square relative overflow-hidden  rounded-full  `}>
        <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${image}`} alt={"Icon Image"}/>
      </button>
  </div>
  )
}

