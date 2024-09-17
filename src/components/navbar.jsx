"use client";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ImgUI } from '.';
import { NavList } from '@/config/navbar';
import { IoGlobeOutline } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import { GrFormClose } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import { langSelect } from '@/helper';
import gsap from 'gsap';

export default function Navbar() {
  const {t} = useTranslation()
  const [navScroll, setNavScroll] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      setNavScroll(currentScrollTop > 5);

      if (currentScrollTop > lastScrollTop) {
        setIsScrollingDown(true);
      } else if (currentScrollTop < lastScrollTop) {
        setIsScrollingDown(false);
      }

      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const handleOpenNav = () => {
    setOpenNav(true);
  }
  const closeNav = () => {
    setOpenNav(false);
  }
  return (
    <nav className={`fixed py-4 z-50 w-full lg:py-7 duration-300 ${isScrollingDown ? "-top-20" : "top-0"} ${navScroll ? 'bg-black' : 'bg-[#1515150F] backdrop-blur-2xl'}`}>
      <div className="container flex items-center justify-between">
        <ul className='max-lg:hidden text-white flex ! items-center justify-start gap-3 text-sm lg:w-[40%] xl:text-base xl:gap-6'>
          {
            NavList.slice(0, 3).map(link => (
              <li className='!font-future' key={link._id}>
                <Link href={link.slug}>{t(link.name)}</Link>
              </li>
            ))
          }
        </ul>
        <Link href={'/'} className='w-[140px] h-5 lg:w-[175px] lg:h-6 relative'>
          <ImgUI objectFitContain src={'/front/aitologo.png'} priority alt={'Aito Logo'} />
        </Link>
        <div className='flex items-center gap-3 xl:gap-6 lg:w-[40%] justify-end'>
          <ul className='max-lg:hidden text-white !font-future flex items-center gap-3 text-sm xl:text-base xl:gap-6'>
            {
              NavList.slice(3).map(link => (
                <li className='' key={link._id}>
                  <Link href={link.slug}>{t(link.name)}</Link>
                </li>
              ))
            }
          </ul>
          <div className='flex items-center gap-2 !font-future'>
            <NavbarDropdownLang/>
          </div>
          <div>
            <CgMenuRightAlt className='text-white text-4xl lg:hidden' onClick={handleOpenNav} />
          </div>
          <div className={`bg-black/50 w-screen h-screen absolute z-[5] top-0 left-0 ${openNav ? "block" : "hidden"}`} onClick={closeNav}></div>
          <div className={`w-[300px] xs:w-[340px] flex flex-col fixed lg:hidden top-0 z-[6] duration-300 bg-black h-screen ${openNav ? "right-0" : "-right-full"}`}>
            <GrFormClose className='text-3xl text-white self-end m-5' onClick={closeNav} />
            <ul className='text-white flex flex-col py-6 px-5 items-start gap-2 text-xl'>
              {
                NavList.map(link => (
                  <li className='' key={link._id} >
                    <Link onClick={closeNav} href={link.slug}>{t(link.name)}</Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}


const NavbarDropdownLang = () => {
  const { t, i18n } = useTranslation();
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef()
  const animationRef = useRef(null)
  const langList = [
    {
      title: t("lang.ru"),
      value: "ru",
      id: 0,
    },
    {
      title: t("lang.uz"),
      value: "uz",
      id: 1,
    },
  ];
  const openDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };

    if (dropdown) {
      window.addEventListener('click', handleClick);
      window.addEventListener('scroll', () => setDropdown(false));
    }
    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', () => setDropdown(false));
    };
  }, [dropdown]); 
  
  useEffect(() => {
    if (dropdown) {
      gsap.to(animationRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power1.out", display: 'block' });
    } else {
      gsap.to(animationRef.current, { opacity: 0, y: -20, duration: 0.3, ease: "power1.in", display: 'none' });
    }
  }, [dropdown]);
  
  const handleLang = (lang) => {
    i18n.changeLanguage(lang.value);
    setDropdown(false);
  };
  return (
    <div className={"relative cursor-pointer"}>
      <div className="flex gap-1 items-center"  ref={dropdownRef} onClick={() => openDropdown()}>
         <IoGlobeOutline className='w-6 h-6 text-white' />
         <span className=' text-white'>
           {langSelect(i18n.language , t('lang.ru') , t('lang.uz'))}
         </span>
      </div>
      {
        dropdown ?
          <div ref={animationRef}  style={{ opacity: 0, display: "none" }}  className={`flex flex-col  w-14 absolute z-50 top-[40px] -left-2 font-futura  `}>
            <ul className={"rounded-b-lg  flex flex-col overflow-hidden  bg-black  text-white  pt-2 "}  onClick={(e) => e.preventDefault()}>
              {langList.map((lang) => (
                <li onClick={() => handleLang(lang)} className={"cursor-pointer hover:bg-gray-50/50 text-center  py-1.5 px-2 !leading-[1]"} key={lang?.id}>
                  {t(lang?.title)}
                </li>
              ))}
            </ul>
          </div>
        :
          null
      }
    </div>
  );
};
