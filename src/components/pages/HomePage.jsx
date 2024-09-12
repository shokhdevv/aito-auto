"use client"
import {  BgPage, CarIndex, ImgUI, IndexBanner, NewsCard, TestDriveSection } from "@/components";
import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from 'swiper/modules';
import gsap from "gsap";
import {useEffect, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {langSelect} from "@/helper";
import {useTranslation} from "react-i18next";
import moment from "moment";

gsap.registerPlugin(ScrollTrigger);

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

export default function HomePage({bannerRes,carRes,aboutRes,newsRes}) {
    const component = useRef();
    const slider = useRef();
    const about = useRef();

    const {i18n}=useTranslation()
    console.log(newsRes)


    useEffect(() => {
        let ctx = gsap.context(() => {
            let carImageBanner = gsap.utils.toArray(".comparisonImage");
            let panelsTitle = gsap.utils.toArray(".comparisonSection h2");
            let panels = gsap.utils.toArray(".comparisonSection");
            let aboutImage = gsap.utils.toArray(".aboutImage");
            let mm = gsap.matchMedia();

            mm.add("(min-width: 600px)", () => {
                aboutImage?.forEach((image) => {
                    gsap.fromTo(
                        image,
                        { opacity: 0, scale: 0.8, yPercent: -10, xPercent: 100 },
                        {
                            yPercent: 0,
                            xPercent: 0,
                            opacity: 1,
                            scale: 1,
                            scrollTrigger: {
                                trigger:about.current,
                                start: '-50% top',
                                end: 'center center',
                                scrub: 2,
                                marker:true,
                            },
                        }
                    );
                });
                carImageBanner.forEach((image, index) => {
                    gsap.fromTo(
                        image,
                        { opacity: 0, scale: 0.8, yPercent: -10, xPercent: 100 },
                        {
                            yPercent: 0,
                            xPercent: 0,
                            opacity: 1,
                            scale: 1,
                            scrollTrigger: {
                                trigger: panels[index],
                                start: '-50% top',
                                end: 'center center',
                                scrub: 2,
                            },
                        }
                    );
                });

                panelsTitle.forEach((title, index) => {
                    gsap.fromTo(
                        title,
                        { opacity: 0, scale: 0.6, yPercent: 80 },
                        {
                            yPercent: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 1,
                            scrollTrigger: {
                                trigger: panels[index],
                                start: '-50% top',
                                end: 'center center',
                                scrub: true,
                            },
                        }
                    );
                });
            });

            mm.add("(max-width: 599px)", () => {
                carImageBanner.forEach((image, index) => {
                    gsap.fromTo(
                        image,
                        { opacity: 0, scale: 0.8,  xPercent: 50 },
                        {
                            xPercent: 0,
                            opacity: 1,
                            scale: 1,
                            scrollTrigger: {
                                trigger: panels[index],
                                start: '-200% top',
                                end: 'center center',
                                scrub: 2,
                            },
                        }
                    );
                });

                panelsTitle.forEach((title, index) => {
                    gsap.fromTo(
                        title,
                        { opacity: 0, yPercent:0 , height:0 },
                        {
                            height:'100%',
                            yPercent: 10,
                            opacity: 1,
                            duration: 0.8,
                            scrollTrigger: {
                                trigger: panels[index],
                                start: '-100% top',
                                end: 'center center',
                                scrub: true,
                            },
                        }
                    );
                });
            });
            return () => {
                ctx.revert();
                mm.revert();
            };
        });
    }, []);


    return (
        <main className=" overflow-x-hidden">
            <section className="">
                <IndexBanner banner={bannerRes[0]} />
            </section>
            <section id="models" className="bg-currentDark pt-10 pb-7 lg:pt-20 lg:pb-14 relative">
                <div className="container flex flex-col items-center relative z-10">
                    <div className="w-full lg:px-[5%] scroll-thin">
                        {/*<h2 className=" font-futura text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#FFFFFF9C]">Модели</h2>*/}
                        <div className=" overflow-x-hidden relative"  ref={component}>
                            {
                                carRes?.map(car=>(
                            <CarIndex key={car?._id} name={`AITO ${car?.name}`} image={`${process.env.NEXT_PUBLIC_API_URL}/${car?.imageHome?.path}`} slug={`models/${car?.slug}`} useRef={slider}/>

                                ))
                            }
                        </div>
                    </div>
                </div>
                <BgPage positionStyle={'w-[250px] lg:w-[500px] -top-[5%] -left-[40%] md:-top-[4%] md:-left-[17%]'}/>
                <BgPage positionStyle={'w-[250px] lg:w-[500px] top-[10%] -left-[25%] md:top-[8%] md:-left-[10%]'}/>
                <BgPage positionStyle={'w-[250px] lg:w-[500px] bottom-[10%] -right-[40%] md:bottom-[8%] md:-right-[17%]'}/>
                <BgPage positionStyle={'w-[250px] lg:w-[500px]  -bottom-[5%] -right-[25%] md:-bottom-[4%]  md:-right-[10%]'}/>
            </section>
            <section ref={about} className="relative bg-[#F9F9F9] max-md:pt-10 overflow-x-hidden overflow-y-visible md:pb-16 ">
                <div className="container">
                    <h2 className=" text-[14vw] md:text-[12vw] !leading-[1.3] font-goodTiming text-nowrap ">
                        <span className=" gradient-text-light ">О БРЕНДЕ</span>
                    </h2>
                    <h4 className="text-[5.8vw] font-conquera font-bold  !leading-[1.3] -translate-y-[40%]">
                        <span className="gradient-text-dark">AITO</span>
                    </h4>
                    <div className="font-futura max-md:text-sm !leading-[1.3] 3xl:text-xl lg:text-lg text-currentDark font-normal md:w-1/2 space-y-6">
                        <p>{langSelect(i18n.language,aboutRes?.aboutHome?.textRu,aboutRes?.aboutHome?.textUz)}</p>
                    </div>
                </div>
                <div className="w-full relative md:absolute bottom-0 right-0 aspect-[2/1] lg:w-[1000px] xl:w-[1100px] md:-right-1/2 lg:-right-[400px] 2xl:-right-[230px] aboutImage ">
                    <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${aboutRes?.aboutHome?.image?.path}`} alt={'About Home'} />
                </div>
            </section>
            <section className=" bg-gradient-to-b from-[#2A2A2A] to-[#151515] py-14 relative">
                <div className="container relative z-10">
                    <h2 className="text-[14vw] md:text-[12vw] !leading-[1.3] mb-5 font-goodTiming font-bold text-nowrap">
                        <span className="gradient-text-black ">НОВОСТИ</span>
                    </h2>
                    <NewsSwiper newsRes={newsRes}/>
                </div>
                <BgPage positionStyle={'w-[250px] lg:w-[500px] xl:w-[600px] bottom-0 -left-[10%]'}/>
                <BgPage positionStyle={'w-[250px] lg:w-[500px] xl:w-[600px] top-[20%] -right-[5%]'}/>
            </section>
            <section className=" bg-currentDark pb-10 lg:py-16 relative overflow-hidden">
                <TestDriveSection/>
            </section>
        </main>
    );
}

const NewsSwiper = ({newsRes}) => {
    const {i18n}=useTranslation()
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
                    newsRes?.map(news => (
                        <SwiperSlide key={news?._id}>
                            <NewsCard news={news}/>
                        </SwiperSlide>
                    ))
                }
                <div className="swiper-pagination">
                </div>
            </Swiper>
        </div>
    )
}
