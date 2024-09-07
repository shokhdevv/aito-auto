import { ImgUI, PageBannerImage, SectionTitle } from '@/components'
import React from 'react'
const aboutCards = [
  {
    src : '/icon-1.png',
    title: 'Миссия',
    text: 'Содействовать трансформации автомобильной энергетики Создать условия для повседневной интелектуальной мобильности',
    _id: 0
  },
  {
    src : '/icon-2.png',
    title: 'Цели и задачи',
    text: 'Стать глобальным производителем “умных” автомобилей',
    _id: 1
  },
  {
    src : '/icon-3.png',
    title: 'Главные ценности',
    text: 'Клиент - во главе, самоотдача, готовность к переменам, честность  и надежность, стремление к  общим ценностям',
    _id: 2
  },
]
export default function Page() {
  return (
    <>
      <section className=' relative flex h-[70vh] flex-col justify-center'>
        <div className="w-full h-full  absolute top-0 left-0 z-[4] ">
          <ImgUI src={'/aboutbannerpage.jpg'} alt={"Banner Image"} imageStyle={'!object-center'}/>
        </div>
        <div className='w-full h-full bg-[linear-gradient(231deg,#0B0B0B00_0%,#0404048D_56%,#000000CC_80%)] absolute top-0 left-0 z-[6]'></div>
        <div className='relative z-10  text-white'>
          <div className="container ">
            <p className='!leading-[1.3] lg:text-xl xl:text-2xl lg:max-w-[60vw] xl:max-w-[590px] !font-normal'> <b>AITO</b> - ведущая китайская компания по производству автомобилей на новых источниках энергии. Она была основана в 1986 году и в настоящее время входит в число 500 наиболее крупных компаний КНР. </p>
            <div className='flex flex-wrap justify-evenly gap-y-3 lg:justify-between lg:max-w-[80%] xl:max-w-[70%] mt-6 lg:mt-10'>
              <AboutBannerCard/>
              <AboutBannerCard/>
              <AboutBannerCard/>
            </div>  
          </div>
        </div>
      </section>
      <section className='bg-currentDark py-6 lg:py-[50px]'>
        <div className="container">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-[100px]'>
            {
              aboutCards.map(item => (
                <AboutCard src={item.src} title={item.title} text={item.text} key={item._id}/>
              ))
            }
          </div>
        </div>
      </section>
      <section className='bg-currentDark'>
        <div className="container flex flex-col items-center ">
          <p className=' text-white text-sm lg:text-base'>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit sed maiores quae debitis repudiandae voluptatibus tempora sint esse, explicabo quasi iure aliquid cupiditate. Totam facilis debitis voluptas ullam incidunt, quae, minima delectus, nesciunt similique aspernatur alias nam ipsa culpa cupiditate! Temporibus cum autem in aliquam minima quibusdam fuga culpa impedit? sit amet, consectetur adipisicing elit. Adipisci sed optio corporis, modi incidunt sint distinctio odio esse, numquam harum aliquam hic cumque autem tempora nam quidem sunt, iure totam aperiam vitae voluptatum. Aspernatur necessitatibus, ipsa voluptatem dolorum consequatur earum quae at autem deserunt consectetur suscipit perferendis nesciunt rerum? Fugiat iusto assumenda eaque, repellat ipsum veritatis porro odit aliquid harum vel non itaque soluta, totam ad laboriosam, labore ratione ducimus consequuntur minima animi repudiandae. Architecto iste consectetur ipsam consequuntur doloribus atque autem error! Sapiente corporis ipsa alias voluptates distinctio, unde animi accusantium dicta modi, ea omnis rem error quis a.</p>
        </div>
      </section>
    </>
  )
}


 function AboutBannerCard() {
  return (
    <div className='bg-[#FFFFFF08] rounded-xl overflow-hidden  backdrop-blur-xl shadow-[unset_0_0_68px_0_#FFFFFF05] p-4 lg:p-7 w-[45%] md:w-[30%] '>
      <h3 className='text-3xl mb-1.5 lg:text-5xl xl:text-6xl 2xl:text-7xl'>2,196</h3> 
      <p className='text-sm '>Содействовать трансформации</p>
    </div>
  )
}


 function AboutCard({src , title , text}) {
  return (
    <div className='flex items-center gap-3 lg:gap-5 text-white'>
      <div className='relative w-14 aspect-square shrink-0 xl:w-[68px]'>
        <ImgUI src={src} alt={"Aito Icon "} objectFitContain/>
      </div>
      <div>
        <h2 className=' font-bold lg:text-lg xl:text-xl'>{title}</h2>
        <p className=' text-[#FFFFFFB3] text-sm '>{text}</p>
      </div>
    </div>
  )
}


