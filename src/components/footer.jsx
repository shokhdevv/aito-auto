'use client'
import { FaMapMarkerAlt, FaFacebookF, FaTelegramPlane  } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import {useQuery} from "react-query";
import apiService from "@/service/axios";
import {useEffect} from "react";
import {langSelect} from "@/helper";
import {useTranslation} from "react-i18next";

export default function Footer() {
  const {refetch,data}=useQuery('footer',()=>apiService.getData('/contact'),{
    enabled:false
  })
  const {i18n}=useTranslation()

  useEffect(() => {
    refetch()
  }, []);
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='bg-currentDark py-10 lg:py-14 xl:py-20'>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-x-2 lg:grid-cols-4 gap-y-5 text-[#FFFFFFCC] justify-between ">
        <div className='flex gap-2 max-lg:justify-center xl:gap-4  '>
          <FaMapMarkerAlt className="text-[#FFFFFFCC] lg:text-2xl"/>
          <p className=" text-sm xl:text-base">{langSelect(i18n.language,data?.addressRu,data?.addressUz)}</p>
        </div>
        <a href="tel:+998 98 999 88 99" className='flex gap-2 max-lg:justify-center xl:gap-4 '>
          <BsFillTelephoneFill  className="text-[#FFFFFFCC] lg:text-2xl"/>
          <p className=" text-sm xl:text-base">{data?.tel[0]}</p>
        </a>
        <div className="flex gap-3 xl:gap-6  max-lg:justify-center">
          <a target={"_blank"} href={data?.facebook}>
            <FaFacebookF className=" text-2xl duration-200 hover:scale-110" />
          </a>
          <a target={"_blank"} href={data?.telegram}>
            <FaTelegramPlane  className=" text-2xl duration-200 hover:scale-110" />
          </a>
          <a target={"_blank"} href={data?.instagram}>
            <AiFillInstagram  className=" text-2xl duration-200 hover:scale-110" />
          </a>
        </div>
        <div className="text-sm xl:text-base flex justify-center lg:justify-end">
          &copy; {year}. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
