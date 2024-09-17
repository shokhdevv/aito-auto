"use client"
import {BgPage, ButtonUI, HeaderCharacteristics, ImgUI, ModelCharacters, SectionTitle} from '@/components'
import {Pagination} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useEffect, useRef} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useTranslation} from 'react-i18next';
import {langSelect} from '@/helper';

gsap.registerPlugin(ScrollTrigger);

export default function Page({data}) {
  const {t , i18n} = useTranslation()
  const containerRef = useRef(null);
  const parentRef = useRef(null)



  useEffect(() => {
    let aboutImage = gsap.utils.toArray(".scroll-image");
    console.log(aboutImage)
    const endHeight = parentRef.current.scrollWidth-aboutImage[0].offsetWidth
  console.log(endHeight)
      let ctx = gsap.context(() => {
        gsap.to(aboutImage,
            {
              x: -endHeight,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            start: `top top`,
            end:"+=" +endHeight,
            scrub: 1,
            markers: true
          },
        });
      });


      return () => {
        ctx.revert();
      };

  }, [data]);
  return (
    <main className=' overflow-x-hidden'>
      <section className='h-[70vh] relative flex flex-col items-center justify-end'>
        <div className='max-lg:hidden absolute top-0 left-0 w-full h-full z-[4]'>
          <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.bannerWeb?.path}`} alt={'Header Image'}/>
        </div>
        <div className='lg:hidden absolute top-0 left-0 w-full h-full z-[4]'>
          <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.bannerRes?.path}`} alt={'Header Image'}/>
        </div>
        <div className='w-full h-full absolute top-0 left-0 z-[5] bg-black/50 '></div>
        <div className='flex flex-col items-center relative z-10 text-white'>
          <h2 className=' font-conquera text-lg md:text-xl lg:text-2xl xl:text-[32px] font-bold uppercase'>{t('modelId.header')} {data?.name}</h2>
          <p className='mt-4 text-sm lg:text-base'>{langSelect(i18n.language, data?.modelDescriptionRu , data?.modelDescriptionUz)}</p>
          <div className=' rounded-xl max-w-[760px] lg:gap-y-5 w-full bg-[#FFFFFF08] backdrop-blur-xl overflow-hidden mx-3 gap-y-2 p-4 md:p-6 lg:p-10 flex flex-wrap justify-evenly translate-y-[35%]'>
            {
              data?.character?.map(card =>  (
                <HeaderCharacteristics key={card?._id} name={langSelect(i18n.language, card?.keyRu , card?.keyUz )} value={langSelect(i18n.language, card?.valueRu , card?.valueUz )} />
              ))
            }
          </div>
        </div>
      </section>
      <section className='pt-28 pb-10  bg-currentDark relative '>
        <ModelCharacters positions={data?.position}/>
        <BgPage positionStyle={'max-lg:hidden lg:w-[500px] xl:w-[600px] bottom-0 lg:-right-[250px] xl:-right-[300px] 2xl:-bottom-2 2xl:-right-[340px] 2xl:w-[680px] 3xl:-right-[360px] 3xl:w-[720px]'}/>
        <BgPage positionStyle={'max-lg:hidden bottom-[-18%] -left-[10%] lg:w-[350px] xl:left-[-120px]'}/>
      </section>
      <section className='py-7 lg:py-10 bg-currentDark relative'>
        <div className="container relative z-10">
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10 lg:grid-rows-3'>
            <div className='w-full aspect-square lg:row-span-3 lg:h-full relative rounded-xl overflow-hidden max-sm:order-2'>
              <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.exteriorReview?.bannerImage?.path}`} alt={'Image About car'} imageStyle={'object-center'}/>
            </div>
            <div className='text-white lg:col-span-2 lg:h-full flex flex-col justify-center lg:justify-between max-sm:order-1'>
              <div className='space-y-2'>
                <h3 className=' font-conquera text-lg lg:text-xl xl:text-2xl uppercase font-bold'>{t('modelId.header')} {data?.name}</h3>
                <p className='text-sm lg:text-base'>{langSelect(i18n.language , data?.exteriorReview?.textRu , data?.exteriorReview?.textUz)}</p>
              </div>
            </div>
            <div className='w-full  max-sm:order-3 sm:col-span-2 lg:row-span-2'>
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
                {
                  data?.exteriorReview?.list?.map(card => (
                    <SwiperSlide key={card?._id} className='w-full h-auto'>
                      <ExteriorCard title={langSelect(i18n.language , card?.titleRu , card?.titleUz)} text={langSelect(i18n.language , card?.textRu , card?.textUz)} image={`${process.env.NEXT_PUBLIC_API_URL}/${card?.image?.path}`}/>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section
          ref={containerRef}
          className=' bg-currentDark py-7 lg:pt-10 pb-[90px] flex flex-col items-center justify-center relative z-[-10] h-screen overflow-hidden'>

        <div className='  grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 max-w-[1630px] w-full '>
          <div className='w-full aspect-square md:aspect-[3/2] relative rounded-xl overflow-hidden md:col-span-2'>
            {/*<div className='w-full h-full absolute top-0 left-0 z-[4]'>*/}
              <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.interiorReview?.bannerImage?.path}`} alt={"Bg Image"}/>
            {/*</div>*/}
            <div className='w-full h-full absolute top-0 left-0 z-[5] bg-[#00000094]'></div>
            <div className=' rounded-lg backdrop-blur-[20px] p-4 lg:p-7 absolute bottom-0 right-0 z-[6] max-w-[680px] bg-[#FFFFFF1A] shadow-[unset_0_0_30px_0_#FFFFFF] '>
              <p className='text-[#FFFFFFE6] max-lg:text-xs'>{langSelect(i18n.language , data?.interiorReview?.textRu , data?.interiorReview?.textUz)}</p>
            </div>
            <div className=' absolute z-[7] top-3 left-3 max-w-[430px] md:top-6 md:left-8 xl:top-[50px] xl:left-20'>
              <SectionTitle title={langSelect(i18n.language , data?.interiorReview?.titleRu , data?.interiorReview?.titleUz)}/>
            </div>
          </div>
          <div  className=' w-full relative rounded-xl  overflow-hidden h-[500px]'>
            <div ref={parentRef} className='parent flex w-full items-center  h-full gap-5 image-col '>
              {
                data?.interiorReview?.list?.map(image => (
                    <div key={image?._id} className='w-full flex-shrink-0 relative scroll-image h-full'>
                      <ImgUI  src={`${process.env.NEXT_PUBLIC_API_URL}/${image?.path}`}
                             alt={'Aito interior'}/>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
      <section className='pb-10 bg-[#EEEEEE]'>
        <div className="container grid grid-cols-1 lg:grid-cols-9 gap-7 lg:gap-20 xl:gap-[100px]">
          <div className=' relative lg:col-span-4 flex flex-col justify-end items-center pt-[20%] lg:pt-[50%]'>
            <div className='w-[90%] absolute top-0 h-[90%] clip-path-triagle bg-white'></div>
            <div className=' w-[60%] lg:w-[80%] xl:w-[60%] aspect-[37/30] relative'>
              <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${data?.equipment?.image?.path}`} alt={'Image Aito'}/>
            </div>
          </div>
          <div className='lg:col-span-5 lg:pt-14 xl:pt-20 space-y-4 max-lg:!text-center' >
            <SectionTitle title={t('modelId.features')} isDarkText isLittleSize={true}/>
            <p className=' font-conquera text-lg md:text-xl  lg:text-2xl font-bold uppercase'>{t('modelId.header')} {data?.name}</p>
            <div className='gap-y-2 pt-4 lg:pt-12 flex flex-col max-lg:items-center'>
              {
                data?.equipment?.list?.map(item => (
                  <div className='flex gap-2' key={item?._id}>
                    <span className='w-1.5 h-1.5 rounded-full bg-black mt-1.5'></span>
                    <p className=''>{langSelect(i18n.language , item?.textRu , item?.textUz)}</p>
                  </div>
                ))
              }
            <div className='lg:pt-5 pt-3'>
              <ButtonUI dowload={true} href={`${process.env.NEXT_PUBLIC_API_URL}/${data?.equipment?.pdf?.path}`} extraStyle={'!bg-black !border-none w-fit'} text={t('btn.downloadSpecification')}/>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-8 relative  lg:py-10 xl:pt-[90px] bg-currentDark'>
        <div className='absolute top-0 left-0 w-full h-full z-[5]'>
          <ImgUI src={'/front/bg-inner.png'} alt={'Bg Image'} />
        </div>
        <div className="container flex flex-col items-center relative z-10 px-[5%]">
          <SectionTitle title={t('modelId.charactersTitle')} extraStyle={'text-center'} isLittleSize={true}/>
          <p className=' text-white text-center mt-2 lg:mt-4 max-lg:text-sm'>{t('modelId.charactersText')}</p>
          <div className='w-full mt-6 lg:mt-10 xl:mt-[60px]'>
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
              {
                data?.technicalCharacter?.map(card => (
                  <SwiperSlide className='!h-[auto]' key={card?._id}>
                    <SpecificationCard title={langSelect(i18n.language , card?.titleRu ,card?.titleUz)} text={langSelect(i18n.language , card?.textRu ,card?.textUz)} image={`${process.env.NEXT_PUBLIC_API_URL}/${card?.image?.path}`}/>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </section>
      <section className='bg-[#151515] pt-7 lg:pt-[50px] pb-5 flex flex-col items-center'>
        <div className="container flex flex-col items-center ">
          <SectionTitle title={t('modelId.security')} isTextCenter />
        </div>
        <div className='container flex flex-wrap justify-evenly w-full gap-y-6 mt-7 lg:mt-10 max-w-[1820px]'>
            {
              data?.safety?.map((card , idx) => (
                <div key={card?._id} className='w-[100%] md:w-[30%] lg:w-[23%] xl:w-[20%] '>
                  <SecurityCard text={langSelect(i18n.language , card?.textRu ,card?.textUz)} title={langSelect(i18n.language , card?.titleRu ,card?.titleUz)} idx={++idx}/>
                </div>
              ))
            }
          </div>
      </section>
    </main>
  )
}



function SpecificationCard ({title , text , image}) {
  return (
    <div className='bg-currentDark h-full overflow-hidden rounded-xl text-white'>
      <div className='relative w-full aspect-[3/2] overflow-hidden rounded-xl'>
        <ImgUI src={image} alt={'Specification Image'}/>
      </div>
      <div className=' flex flex-col h-auto items-center justify-between py-4 gap-y-5 lg:py-6 px-2 lg:px-5'>
        <h2 className='lg:text-lg'>{title}</h2>
        <div className='w-full flex flex-col items-center text-center text-[#FFFFFFCC] gap-1 text-sm'>
          <span className='h-[0.5px] bg-[#FFFFFFCC] w-[40%]  mb-3 lg:mb-6'></span>
          <p className=' text-center'>{text}</p>
        </div>
      </div>
    </div>
  )
}

function ExteriorCard({title , text , image , }) {
  return (
    <div className='relative aspect-[4/3] h-full overflow-hidden rounded-xl'>
      <div className='w-full h-full absolute top-0 left-0 z-[5]'>
        <ImgUI src={image} alt={'Exterior Image'}/>
      </div>
      <div className='w-full absolute bottom-0 z-10 rounded-xl space-y-1 !leading-[1.2] overflow-hidden left-0 bg-[#00000080] backdrop-blur-[20px] px-4 py-3 shadow-[inset_0_0_30px_0_rgba(255,255,255,0.05),inset_0_1px_4px_0_rgba(255,255,255,0.15)]'>
        <h4 className=' text-white text-[15px] '>{title}</h4>
        <p className=' text-white text-xs'>{text}</p>
      </div>
    </div>
  )
}


function SecurityCard({idx , title , text}) {
  return (
    <div className='w-full flex flex-col items-start max-md:items-center max-md:px-5'>
      <div className='py-3 px-[22px] rounded-full shadow-[0_4px_4px_0_#FFFFFF20] bg-[#474747] text-[#FFFFFFE5] text-3xl md:text-4xl lg:text-5xl'>
        {idx}
      </div>
      <h2 className=' lg:text-lg text-white mt-3 lg:mt-6 '>{title}</h2>
      <p className=' text-xs text-[#FFFFFFCC] lg:text-sm mt-2 lg:mt-4'>{text}</p>
    </div>
  )
}
