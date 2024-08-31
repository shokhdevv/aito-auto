"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { ImgUI } from '.';
import { NavList } from '@/config/navbar';
import { IoGlobeOutline } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import { GrFormClose } from "react-icons/gr";

export default function Navbar() {
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
                <Link href={link.slug}>{link.name}</Link>
              </li>
            ))
          }
        </ul>
        <Link href={'https://aitoauto.uz/'} className='w-[140px] h-5 lg:w-[175px] lg:h-6 relative'>
          <ImgUI objectFitContain src={'/aitologo.png'} alt={'Aito Logo'} />
        </Link>
        <div className='flex items-center gap-3 xl:gap-6 lg:w-[40%] justify-end'>
          <ul className='max-lg:hidden text-white !font-future flex items-center gap-3 text-sm xl:text-base xl:gap-6'>
            {
              NavList.slice(3).map(link => (
                <li className='' key={link._id}>
                  <Link href={link.slug}>{link.name}</Link>
                </li>
              ))
            }
          </ul>
          <div className='flex items-center gap-2 !font-future'>
            <IoGlobeOutline className='w-5 h-5 text-white' />
            <span className='text-sm xl:text-base text-white'>
              RU
            </span>
          </div>
          <div>
            <CgMenuRightAlt className='text-white text-4xl lg:hidden' onClick={handleOpenNav} />
          </div>
          <div className={`bg-black/30 w-screen h-screen absolute z-[5] top-0 left-0 ${openNav ? "block" : "hidden"}`} onClick={closeNav}></div>
          <div className={`w-[300px] flex flex-col fixed lg:hidden top-0 z-[6] duration-300 bg-black h-screen ${openNav ? "right-0" : "-right-full"}`}>
            <GrFormClose className='text-3xl text-white self-end m-5' onClick={closeNav} />
            <ul className='text-white flex flex-col py-6 px-3 items-start gap-2 text-lg'>
              {
                NavList.map(link => (
                  <li className='' key={link._id}>
                    <Link href={link.slug}>{link.name}</Link>
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
