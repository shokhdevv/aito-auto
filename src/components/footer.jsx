
import { FaMapMarkerAlt, FaFacebookF, FaTelegramPlane  } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className='bg-currentDark py-10 lg:py-14 xl:py-20'>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-x-2 lg:grid-cols-4 gap-y-5 text-[#FFFFFFCC] justify-between items-center">
        <div className='flex gap-2 max-lg:justify-center xl:gap-4 items-end '>
          <FaMapMarkerAlt className="text-[#FFFFFFCC] lg:text-2xl"/>
          <p className=" text-sm xl:text-base">г. Ташкент, ул. Фурката, 34</p>
        </div>
        <a href="tel:+998 98 999 88 99" className='flex gap-2 max-lg:justify-center xl:gap-4 items-end '>
          <BsFillTelephoneFill  className="text-[#FFFFFFCC] lg:text-2xl"/>
          <p className=" text-sm xl:text-base">+998 98 999 88 99</p>
        </a>
        <div className="flex gap-3 xl:gap-6 items-center max-lg:justify-center">
          <a href="https://www.facebook.com">
            <FaFacebookF className=" text-2xl duration-200 hover:scale-110" />
          </a>
          <a href="https://www.telegram.org/">
            <FaTelegramPlane  className=" text-2xl duration-200 hover:scale-110" />
          </a>
          <a href="https://www.instagram.com">
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
