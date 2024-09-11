"use client"
import {AboutCard, ImgUI} from '@/components'
import React, {useEffect, useRef} from 'react'
import { gsap } from 'gsap';
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



const aboutBannerCard = [
  {
    title: 'Миссия',
    text: 'Содействовать трансформации автомобильной энергетики Создать условия для повседневной интелектуальной мобильности',
    _id: 500
  },
  {
    title: 'Цели и задачи',
    text: 'Стать глобальным производителем “умных” автомобилей',
    _id: 1223
  },
  {
    title: 'Главные ценности',
    text: 'Клиент - во главе, самоотдача, готовность к переменам, честность  и надежность, стремление к  общим ценностям',
    _id: 3245
  },
]

export default function Page() {
  // const AboutCard = dynamic(() => import('@/components/AboutCard'), { ssr: false });
  const bannerCardRefs = useRef([]);

  useEffect(() => {
    const countNumberElements = gsap.utils.toArray(".countNumber");

    countNumberElements.forEach((number, index) => {
      const targetNumber = aboutBannerCard[index]?._id;
      gsap.to(number, {
        textContent: targetNumber,
        duration: 3,
        delay:  0.1+ index * 0.2,
        ease: "power1.in",
        snap: { textContent: 1 },
        onStart: function() {
          gsap.to(number, {opacity:0.5 });
        },
        onComplete: function() {
          gsap.to(number, {  opacity:1 });
        },
        onUpdate: function () {
          number.innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
        }
      });
    });
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }, []);

  return (
      <>
        <section className='relative flex h-[70vh] flex-col justify-center'>
          <div className="w-full h-full absolute top-0 left-0 z-[4] overflow-hidden">
            <ImgUI src={'/aboutbannerpage.jpg'} alt={"Banner Image"} imageStyle={'!object-center'} />
          </div>
          <div className='w-full h-full bg-[linear-gradient(231deg,#0B0B0B00_0%,#0404048D_56%,#000000CC_80%)] absolute top-0 left-0 z-[6]'></div>
          <div className='relative z-10 text-white'>
            <div className="container ">
              <p className='!leading-[1.3] lg:text-xl xl:text-2xl lg:max-w-[60vw] xl:max-w-[590px] !font-normal'>
                <b>AITO</b> - ведущая китайская компания по производству автомобилей на новых источниках энергии. Она была основана в 1986 году и в настоящее время входит в число 500 наиболее крупных компаний КНР.
              </p>
              <div className='flex flex-wrap justify-evenly gap-y-3 lg:justify-between lg:max-w-[80%] xl:max-w-[70%] mt-6 lg:mt-10'>
                {aboutBannerCard.map((item, index) => (
                    <AboutBannerCard
                        key={item._id}
                        title={item.title}
                        number={item._id}
                        // ref={(el) => bannerCardRefs.current[index] = el}
                    />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className='bg-currentDark py-6 lg:py-[50px]'>
          <div className="container">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-[100px]'>
              {aboutCards.map(item => (
                  <AboutCard src={item.src} title={item.title} text={item.text} key={item._id} />
              ))}
            </div>
          </div>
        </section>
        <section className='bg-currentDark'>
          <div className="container flex flex-col items-center ">
            <p className='text-white text-sm lg:text-base'>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit sed maiores quae debitis repudiandae voluptatibus tempora sint esse, explicabo quasi iure aliquid cupiditate. Totam facilis debitis voluptas ullam incidunt, quae, minima delectus, nesciunt similique aspernatur alias nam ipsa culpa cupiditate! Temporibus cum autem in aliquam minima quibusdam fuga culpa impedit? sit amet, consectetur adipisicing elit. Adipisci sed optio corporis, modi incidunt sint distinctio odio esse, numquam harum aliquam hic cumque autem tempora nam quidem sunt, iure totam aperiam vitae voluptatum. Aspernatur necessitatibus, ipsa voluptatem dolorum consequatur earum quae at autem deserunt consectetur suscipit perferendis nesciunt rerum? Fugiat iusto assumenda eaque, repellat ipsum veritatis porro odit aliquid harum vel non itaque soluta, totam ad laboriosam, labore ratione ducimus consequuntur minima animi repudiandae. Architecto iste consectetur ipsam consequuntur doloribus atque autem error! Sapiente corporis ipsa alias voluptates distinctio, unde animi accusantium dicta modi, ea omnis rem error quis a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus ad adipisci architecto assumenda atque blanditiis commodi consequatur cupiditate debitis dolore doloremque doloribus ea eius eos explicabo fugiat iure libero minus necessitatibus numquam officia pariatur porro, quam quasi quis ratione sapiente sequi ut veniam! Ab accusantium ad animi at, consectetur eius esse, exercitationem harum, iure optio perspiciatis quaerat quas totam? Ab culpa, cupiditate dicta dolorum earum eligendi, eum impedit maiores obcaecati quam, sit sunt vero voluptas. Asperiores consectetur dolore error excepturi in maiores minima reiciendis vitae? Asperiores delectus maiores quas, qui repellat voluptatem voluptates! Alias aliquam aliquid commodi cum eaque fuga fugit incidunt itaque laboriosam magnam minima natus nobis non officia quaerat quia sed sit, sunt totam, vel. A consectetur dolorem, in ipsa iusto libero odit totam. A cumque dicta enim, expedita id laudantium libero minus obcaecati officiis pariatur quasi repellat repudiandae totam, vel voluptates. At aut consequatur dolor dolorem doloremque ea eaque enim explicabo harum, labore modi neque nisi nulla perspiciatis quae quas quo quos rem repellendus sit temporibus ullam voluptas? Ab accusamus asperiores beatae commodi culpa, cumque cupiditate delectus, doloribus fugiat, iure rerum soluta voluptatibus. Assumenda aut consequatur corporis, doloremque esse facere id illo impedit ipsam labore laborum minima numquam quas tenetur veritatis. Ab animi blanditiis consectetur consequuntur cum cumque delectus deleniti doloribus, eligendi est iste itaque maiores optio pariatur quis quisquam quos recusandae, vel vitae voluptatibus. Aperiam distinctio, dolorem magni nihil perferendis praesentium rerum sunt. Dolor dolorem eveniet fugiat soluta. A ab consectetur corporis dicta eum expedita explicabo ipsam magni, non optio, repudiandae tempore totam! A asperiores dolorum neque. Illo iusto labore magnam natus quibusdam suscipit velit. Ab aut commodi culpa ducimus, eaque, facere facilis id ipsa iusto magnam minus natus nemo nesciunt nobis nostrum obcaecati perspiciatis praesentium provident qui quos sunt suscipit voluptates. Alias aperiam asperiores, atque blanditiis cum distinctio doloremque dolores ea explicabo facere fugit incidunt iste laudantium nemo nobis numquam perspiciatis porro, possimus quis quos rem, sequi similique voluptas. Culpa dignissimos ea id, labore omnis repellendus temporibus! Aliquid architecto assumenda dolor exercitationem facere ipsa, ipsam magnam officia perferendis perspiciatis qui sapiente tempora tempore tenetur ullam vel voluptates! Amet doloribus eum ex excepturi explicabo incidunt maiores maxime, modi, non odio sed sint suscipit voluptatem! Ab adipisci alias, architecto culpa deserunt ea est facere in incidunt itaque molestiae nesciunt nulla numquam optio praesentium quia sint totam voluptatem. Accusantium assumenda eos exercitationem expedita laboriosam quis quo soluta. Consequuntur, culpa harum inventore iste nihil optio quia repellendus unde? Accusamus at cumque ea eaque facere id, minima quibusdam quis saepe suscipit. Accusantium asperiores blanditiis illo magnam nihil quasi quia quibusdam similique veritatis voluptates! Architecto consequatur corporis deleniti dolores eos, esse est, fugiat itaque magni molestias nemo optio quas quidem quisquam repellendus soluta totam voluptates? A adipisci animi asperiores assumenda autem commodi cupiditate deserunt dolorem dolores ducimus ea eius eligendi eum expedita explicabo harum ipsam itaque laborum molestiae nam necessitatibus nostrum odit perferendis possimus quasi qui quibusdam quisquam quos ratione sed sint sit tempora tempore ullam ut vitae, voluptas. Obcaecati!</p>
          </div>
        </section>
      </>
  );
}


const AboutBannerCard = React.forwardRef(({ title, number }, ref) => (
    <div className='bg-[#FFFFFF08] rounded-xl overflow-hidden backdrop-blur-xl shadow-[unset_0_0_68px_0_#FFFFFF05] p-4 lg:p-7 w-[45%] md:w-[30%]'>
      <h3 ref={ref} className='text-3xl mb-1.5 lg:text-5xl xl:text-6xl 2xl:text-7xl countNumber'>{number}</h3>
      <p className='text-sm'>{title}</p>
    </div>
));