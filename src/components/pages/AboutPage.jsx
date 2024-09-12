"use client"
import {AboutCard, ImgUI} from '@/components'
import React, {useEffect} from 'react'
import {gsap} from 'gsap';
import {useTranslation} from "react-i18next";
import {langSelect} from "@/helper";


export default function About({about}) {
    const {i18n} = useTranslation()

    const aboutCards = [
        {
            src: '/icon-1.png',
            title: 'Миссия',
            text: langSelect(i18n.language, about?.missionRu, about?.missionUz),
            _id: 0
        },
        {
            src: '/icon-2.png',
            title: 'Цели и задачи',
            text: langSelect(i18n.language, about?.objectivesRu, about?.objectivesUz),
            _id: 1
        },

        {
            src: '/icon-3.png',
            title: 'Главные ценности',
            text: langSelect(i18n.language, about?.valuesRu, about?.valuesUz),
            _id: 2
        },
    ]
    console.log(about)
    useEffect(() => {
        const countNumberElements = gsap.utils.toArray(".countNumber");
        gsap.from(countNumberElements, {
            textContent: 0,
            duration: 3,
            ease: "Power1.easeIn",
            snap: {textContent: 1},
            stagger: 0.2
        });


    }, []);

    return (
        <>
            <section className='relative flex h-[70vh] flex-col justify-center'>
                <div className="w-full h-full absolute top-0 left-0 z-[4] overflow-hidden">
                    <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${about?.bannerWeb?.path}`} alt={"Banner Image"}
                           imageStyle={'!object-center'}/>
                    {/*<ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${about?.bannerRes?.path}`} alt={"Banner Image"} imageStyle={'!object-center'} />*/}
                </div>
                <div
                    className='w-full h-full bg-[linear-gradient(231deg,#0B0B0B00_0%,#0404048D_56%,#000000CC_80%)] absolute top-0 left-0 z-[6]'></div>
                <div className='relative z-10 text-white'>
                    <div className="container ">
                        <p className='!leading-[1.3] lg:text-xl xl:text-2xl lg:max-w-[60vw] xl:max-w-[590px] !font-normal'>
                            {langSelect(i18n.language, about?.aboutTextRu, about?.aboutTextUz)}
                        </p>
                        <div
                            className='flex flex-wrap justify-evenly gap-y-3 lg:justify-between lg:max-w-[80%] xl:max-w-[70%] mt-6 lg:mt-10'>
                            {about?.statistics?.map((item) => (
                                <AboutBannerCard
                                    key={item._id}
                                    title={langSelect(i18n.language, item?.titleRu, item?.titleUz)}
                                    number={item?.value}
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
                            <AboutCard src={item.src} title={item.title} text={item.text} key={item._id}/>
                        ))}
                    </div>
                </div>
            </section>
            <section className='bg-currentDark'>
                <div className="container flex flex-col items-center ">
                    <p className='text-white text-sm lg:text-base'>
                        {langSelect(i18n.language, about?.textRu, about?.textUz)}
                    </p>
                </div>
            </section>
        </>
    );
}


const AboutBannerCard = ({title, number}) => (
    <div
        className='bg-[#FFFFFF08] rounded-xl overflow-hidden backdrop-blur-xl shadow-[unset_0_0_68px_0_#FFFFFF05] p-4 lg:p-7 w-[45%] md:w-[30%]'>
        <h3 className='text-3xl mb-1.5 lg:text-5xl xl:text-6xl 2xl:text-7xl countNumber'>{number}</h3>
        <p className='text-sm'>{title}</p>
    </div>
);