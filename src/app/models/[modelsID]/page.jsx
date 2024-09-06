"use client"
import { ButtonUI, ImgUI, ModelCharacters, SectionTitle } from '@/components'
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
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10 lg:grid-rows-3'>
            <div className='w-full aspect-square lg:row-span-3 lg:h-full relative rounded-xl overflow-hidden max-sm:order-2'>
              <ImgUI src={'/inner-page.png'} alt={'Image About car'} imageStyle={'object-center'}/>
            </div>
            <div className='text-white lg:col-span-2 lg:h-full flex flex-col justify-center lg:justify-between max-sm:order-1'>
              <div className='space-y-2'>
                <h3 className=' font-conquera text-lg lg:text-xl xl:text-2xl'>AITO M7 </h3>
                <p className='text-sm lg:text-base'>Обладает современным лаконичным дизайном кузова: светодиодная оптика, приветственное освещение, выдвижные дверные ручки — автомобиль выглядит внушительно и величественно с любого ракурса</p>
              </div>

            </div>
            <div className='w-full  max-sm:order-3 sm:col-span-2 lg:row-span-2'>
              <SwiperAboutCar/>
            </div>
          </div>
        </div>
      </section>
      <section className='pb-10 bg-[#EEEEEE]'>
        <div className="container grid grid-cols-1 lg:grid-cols-9 gap-7 lg:gap-20 xl:gap-[100px]">
          <div className=' relative lg:col-span-4 flex flex-col justify-end items-center pt-[20%] lg:pt-[50%]'>
            <div className='w-[90%] absolute top-0 h-[90%] clip-path-triagle bg-white'></div>
            <div className=' w-[60%] lg:w-[80%] xl:w-[60%] aspect-[37/30] relative'>
              <ImgUI src={'/modelpage.png'} alt={'Image Aito'}/>
            </div>
          </div>
          <div className='lg:col-span-5 lg:pt-14 xl:pt-20 space-y-4 ' >
            <SectionTitle title={'Особенности комплектации'} isDarkText isLittleSize={true}/>
            <p className=' font-conquera text-lg md:text-xl lg:text-2xl font-bold'>AITO M7</p>
            <div className='space-y-2 pt-4 lg:pt-12'>
              <div className='flex gap-2'>
                <span className='w-1.5 h-1.5 rounded-full bg-black mt-1.5'></span>
                <p className=''>Режим гидроусилителя руля (Comfort/Sport)</p>
              </div>
              <div className='flex gap-2'>
                <span className='w-1.5 h-1.5 rounded-full bg-black mt-1.5'></span>
                <p className=''>Система экстренного торможения </p>
              </div>
              <div className='flex gap-2'>
                <span className='w-1.5 h-1.5 rounded-full bg-black mt-1.5'></span>
                <p className=''>Система контроля полосы и удержания полосы движения</p>
              </div>
              <div className='flex gap-2'>
                <span className='w-1.5 h-1.5 rounded-full bg-black mt-1.5'></span>
                <p className=''>Предупреждение о снижении дистанции</p>
              </div>
              <div className='flex gap-2'>
                <span className='w-1.5 h-1.5 rounded-full bg-black mt-1.5'></span>
                <p className=''>Автоматическое экстренное торможение AEB</p>
              </div>
              <div className='flex gap-2'>
                <span className='w-1.5 h-1.5 rounded-full bg-black mt-1.5'></span>
                <p className=''>Мониторинг слепых зон BSD</p>
              </div>
              <div className='flex gap-2'>
                <span className='w-1.5 h-1.5 rounded-full bg-black mt-1.5'></span>
                <p className=''>Панорамный сдвижной люк с электрической солнцезащитной шторкой</p>
              </div>
              <div className='flex gap-2'>
                <span className='w-1.5 h-1.5 rounded-full bg-black mt-1.5'></span>
                <p className=''>20" литые диски с десятью спицами (шины 255/50 R20)</p>
              </div>
              <div className='flex gap-2'>
                <span className='w-1.5 h-1.5 rounded-full bg-black mt-1.5'></span>
                <p className=''>Режим гидроусилителя руля (Comfort/Sport)</p>
              </div>
              <div className='flex gap-2'>
                <span className='w-1.5 h-1.5 rounded-full bg-black mt-1.5'></span>
                <p className=''>128-цветная подсветка салона</p>
              </div>
            </div>
            <div className='lg:pt-5'>
              <ButtonUI extraStyle={'!bg-black !border-none'} text={'Скачать спецификацию'}/>
            </div>
          </div>
        </div>  
      </section>
      <section className='py-8 relative  lg:py-10 xl:pt-[90px] bg-currentDark'>
        <div className='absolute top-0 left-0 w-full h-full z-[5]'>
          <ImgUI src={'/bg-inner.png'} alt={'Bg Image'} />
        </div>
        <div className="container flex flex-col items-center relative z-10">
          <SectionTitle title={'Технические характеристики'} extraStyle={'text-center'} isLittleSize={true}/>
          <p className=' text-white text-center mt-2 lg:mt-4 max-lg:text-sm'>Узнайте больше о внутренних системах автомобиля</p>
          <div className='w-full mt-6 lg:mt-10 xl:mt-[60px]'>
            <SwiperSpecification/>
          </div>
        </div>
      </section>
      <section className='bg-[#151515] pt-7 lg:pt-[50px] pb-5 flex flex-col items-center'>
        <div className="container flex flex-col items-center ">
          <SectionTitle title={'Безопасность'} isTextCenter />
        </div>
          <div className='flex flex-wrap justify-evenly w-full gap-y-6 mt-7 lg:mt-10 max-w-[1820px]'>
            <div className='w-[100%] md:w-[30%] lg:w-[23%] xl:w-[20%] '>
              <SecurityCard/>
            </div>
            <div className='w-[100%] md:w-[30%] lg:w-[23%] xl:w-[20%] '>
              <SecurityCard/>
            </div>
            <div className='w-[100%] md:w-[30%] lg:w-[23%] xl:w-[20%] '>
              <SecurityCard/>
            </div>
            <div className='w-[100%] md:w-[30%] lg:w-[23%] xl:w-[20%] '>
              <SecurityCard/>
            </div>
          </div>
      </section>
    </div>
  )
}



function SwiperSpecification () {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1.7,
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
        className="SwiperSpecification custom-pagination"
      >
        <SwiperSlide className='!h-[auto]'>
          <div className='bg-currentDark h-full overflow-hidden rounded-xl text-white'>
            <div className='relative w-full aspect-[3/2] overflow-hidden rounded-xl'>
              <ImgUI src={'/spefication-inner-1.webp'}/>
            </div>
            <div className=' flex flex-col h-auto items-center justify-between py-4 gap-y-5 lg:py-6 px-2 lg:px-5'>
              <h2 className=''>Высоковольтная аккумуляторная батарея</h2>
              <div className='w-full flex flex-col items-center text-center text-[#FFFFFFCC] text-sm'>
                <span className='h-[0.5px] bg-[#FFFFFFCC] w-[40%]  mb-3 lg:mb-6'></span>
                <div className='flex items-center gap-1'>
                  <p>Суммарная максимальная мощность: </p>
                  <p>449 л.с.</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Разгон до 100 км/ч : </p>
                  <p> 4.8 с</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Расход топлива в смешанном цикле:  </p>
                  <p>1.09 л/100 км</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Суммарный запас хода: </p>
                  <p>1100 км</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='!h-[auto]'>
          <div className='bg-currentDark h-full overflow-hidden rounded-xl text-white'>
            <div className='relative w-full aspect-[3/2] overflow-hidden rounded-xl'>
              <ImgUI src={'/spefication-inner-2.webp'}/>
            </div>
            <div className=' flex flex-col h-auto items-center justify-between py-4 gap-y-5 lg:py-6 px-2 lg:px-5'>
              <h2 className=''>Высоковольтная аккумуляторная батарея</h2>
              <div className='w-full flex flex-col items-center text-center text-[#FFFFFFCC] text-sm'>
                <span className='h-[0.5px] bg-[#FFFFFFCC] w-[40%]  mb-3 lg:mb-6'></span>
                <div className='flex items-center gap-1'>
                  <p>Суммарная максимальная мощность: </p>
                  <p>449 л.с.</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Суммарная максимальная мощность: </p>
                  <p>449 л.с.</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Суммарная максимальная мощность: </p>
                  <p>449 л.с.</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Разгон до 100 км/ч : </p>
                  <p> 4.8 с</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Расход топлива в смешанном цикле:  </p>
                  <p>1.09 л/100 км</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Суммарный запас хода: </p>
                  <p>1100 км</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='!h-[auto]'>
          <div className='bg-currentDark h-full overflow-hidden rounded-xl text-white'>
            <div className='relative w-full aspect-[3/2] overflow-hidden rounded-xl'>
              <ImgUI src={'/spefication-inner-3.webp'}/>
            </div>
            <div className=' flex flex-col h-auto items-center justify-between py-4 gap-y-5 lg:py-6 px-2 lg:px-5'>
              <h2 className=''>Высоковольтная аккумуляторная батарея</h2>
              <div className='w-full flex flex-col items-center text-center text-[#FFFFFFCC] text-sm'>
                <span className='h-[0.5px] bg-[#FFFFFFCC] w-[40%]  mb-3 lg:mb-6'></span>
                <div className='flex items-center gap-1'>
                  <p>Суммарная максимальная мощность: </p>
                  <p>449 л.с.</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Разгон до 100 км/ч : </p>
                  <p> 4.8 с</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Расход топлива в смешанном цикле:  </p>
                  <p>1.09 л/100 км</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Суммарный запас хода: </p>
                  <p>1100 км</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Суммарная максимальная мощность: </p>
                  <p>449 л.с.</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Разгон до 100 км/ч : </p>
                  <p> 4.8 с</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Расход топлива в смешанном цикле:  </p>
                  <p>1.09 л/100 км</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Суммарный запас хода: </p>
                  <p>1100 км</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Суммарная максимальная мощность: </p>
                  <p>449 л.с.</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Разгон до 100 км/ч : </p>
                  <p> 4.8 с</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Расход топлива в смешанном цикле:  </p>
                  <p>1.09 л/100 км</p>
                </div>
                <div className='flex items-center gap-1'>
                  <p>Суммарный запас хода: </p>
                  <p>1100 км</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

function SwiperAboutCar() {
  return (
    <div>
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
        className="exteriorSwiper"
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
  )
}


function SecurityCard() {
  return (
    <div className='w-full flex flex-col items-start'>
      <div className='py-3 px-[22px] rounded-full shadow-[0_4px_4px_0_#FFFFFF20] bg-[#474747] text-[#FFFFFFE5] text-3xl md:text-4xl lg:text-5xl'>
        1
      </div>
      <h2 className=' lg:text-lg text-white mt-3 lg:mt-6 '>Система удержания автомобиля в полосе</h2>
      <p className=' text-xs text-[#FFFFFFCC] lg:text-sm mt-2 lg:mt-4'>Предотвращает возможные опасные ситуации на дорогах, сохраняя движение автомобиля в пределах полосы</p>
    </div>
  )
}
