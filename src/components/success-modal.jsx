"use client";
import { GiCheckMark } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ServiceFormModal = ({ modal, setModal }) => {
  const { t } = useTranslation();
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (modal) {
      gsap.fromTo(modalRef.current, 
        { opacity: 0, display: 'none' },
        { opacity: 1, display: 'block', duration: 0.5, ease: "power1.out" }
      );
      gsap.fromTo(contentRef.current, 
        { opacity: 0, scale: 0, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power1.out" }
      );
    } else {
      gsap.to(contentRef.current, 
        { opacity: 0, scale: 0, y: -20, duration: 0.3, ease: "power1.in" }
      );
      gsap.to(modalRef.current, 
        { opacity: 0, display: 'none', duration: 0.3, ease: "power1.in" }
      );
    }
  }, [modal]);

  return (
    modal &&
    <div
      ref={modalRef}
      onClick={() => setModal(false)}
      className={`w-screen h-screen bg-black/50 fixed top-0 left-0 z-[9999] flex justify-center flex-col items-center`}
    >
      <div className="container-fluid flex flex-col items-center h-full justify-center ">
        <div
          ref={contentRef}
          onClick={e => e.stopPropagation()}
          className="w-full max-w-[600px] flex flex-col items-center gap-3.5 text-center md:gap-5 rounded-lg p-6 md:p-9 bg-currentDark"
        >
          <GiCheckMark className="text-xl text-white md:text-3xl" />
          <h2 className="font-futura font-bold text-lg md:text-xl lg:text-2xl text-white">
            {t('modal.successTitle')}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceFormModal;
