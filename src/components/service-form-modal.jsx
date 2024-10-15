"use client";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useRouter } from 'next/navigation'
import { ButtonUI, SuccesModal } from ".";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import apiService from "@/service/axios";
import { AiOutlineLoading } from "react-icons/ai";

const ServiceFormModal = ({ modal, setModal }) => {
  const { t } = useTranslation();
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const navigate = useRouter()
  const [succesModal , setSuccessModal] = useState(false)
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

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: {errors},
} = useForm();
const {
    mutate: serviceOrderPost,
    data: serviceOrderPostData,
    isLoading: serviceOrderPostLoading,
    isSuccess: serviceOrderPostSuccess,
} = useMutation(({url, data}) => apiService.postData(url, data));

useEffect(() => {
  if (serviceOrderPostSuccess) {
      reset();
      setModal(false)
      setSuccessModal(true);
      setTimeout(() => {
          setSuccessModal(false);
          navigate.push("/");
      }, 2000);
  }
}, [serviceOrderPostSuccess]);

const onSubmit = (data) => {
  const postData = {...data}
  serviceOrderPost({url: '/serviceOrder', data: postData})
}

  return (
    <>
      {
        modal &&
        <div
          ref={modalRef}
          onClick={() => setModal(false)}
          className={`w-screen h-screen bg-black/50 fixed top-0 left-0 z-[9999] flex justify-center flex-col items-center`}
        >
          <div className="container-fluid flex flex-col items-center h-full justify-center ">
            <div ref={contentRef} onClick={e => e.stopPropagation()} className="w-full max-w-[460px] flex flex-col text-white items-center gap-3.5 text-center md:gap-5 rounded-lg p-6 md:p-9 bg-[#050505]"> 
              <h3 className="text-lg md:text-xl lg:text-2xl">{t('service.modalTitle')}</h3>
              <form  onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4 ">
                <div className="space-y-2">
                  <input  id='name' {...register('reason', {required: true})} type="text" placeholder={t('input.reason')} className='w-full focus:outline-none px-3 py-2 !leading-[1.2] lg:px-4 lg:py-3 text-white font-futura max-lg:text-sm rounded bg-currentDark border-[0.5px] border-[#FFFFFFE5]' />
                  {errors.reason && (
                    <p className="error-text text-red-600 text-xs lg:text-sm text-start">{t('input.errorReason')}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="relative w-full">
                    <select 
                      {...register('model', {required: true})}
                      id='model' 
                      placeholder={t('input.model')} 
                      className='w-full focus:outline-none px-3 py-2 !leading-[1.2] lg:px-4 lg:py-3 text-white font-futura max-lg:text-sm rounded bg-currentDark border-[0.5px] border-[#FFFFFFE5] appearance-none pr-10'
                    >
                      <option selected value=" ">{t('input.model')}</option>
                      <option  value="Aito M5">{'Aito M5'}</option>
                      <option  value="Aito M7">{'Aito M7'}</option>
                      <option  value="Aito M9">{'Aito M9'}</option>
                    </select>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </span>
                  </div>
                  {errors.model && (
                    <p className="error-text text-red-600 text-xs lg:text-sm text-start">{t('input.errorModel')}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="relative w-full">
                    <input 
                      type="date" 
                      id="date" 
                      {...register('date', {required: true})}
                      placeholder={t('input.date')} 
                      className='w-full focus:outline-none px-3 py-2 !leading-[1.2] lg:px-4 lg:py-3 text-white font-futura max-lg:text-sm rounded bg-currentDark border-[0.5px] border-[#FFFFFFE5] appearance-none pr-10' 
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </span>
                  </div>
                  {errors.date && (
                    <p className="error-text text-red-600 text-xs lg:text-sm text-start">{t('input.errorDate')}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="relative w-full">
                    <input 
                      id='time' 
                      {...register('time', {required: true})}
                      type="time" 
                      placeholder={t('input.reason')} 
                      className='w-full focus:outline-none px-3 py-2 !leading-[1.2] lg:px-4 lg:py-3 text-white font-futura max-lg:text-sm rounded bg-currentDark border-[0.5px] border-[#FFFFFFE5] appearance-none pr-10' 
                    />
                    <span className="absolute inset-y-0 right-0  flex items-center pr-4 pointer-events-none">
                      <svg className="w-5 h-5 text-white"  viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.375 10.1821C17.7852 10.4624 18.1509 10.7803 18.4722 11.1357C18.7935 11.4912 19.0703 11.8809 19.3027 12.3047C19.5352 12.7285 19.7061 13.1763 19.8154 13.6479C19.9248 14.1196 19.9863 14.6016 20 15.0938C20 15.9072 19.8462 16.6729 19.5386 17.3906C19.231 18.1084 18.8071 18.7339 18.2671 19.2671C17.7271 19.8003 17.1016 20.2207 16.3906 20.5283C15.6797 20.8359 14.9141 20.9932 14.0938 21C13.4717 21 12.8701 20.9077 12.2891 20.7231C11.708 20.5386 11.1748 20.272 10.6895 19.9233C10.2041 19.5747 9.77344 19.1577 9.39746 18.6724C9.02148 18.187 8.73096 17.6504 8.52588 17.0625H0.3125V1.3125H2.9375V0H4.25V1.3125H13.4375V0H14.75V1.3125H17.375V10.1821ZM1.625 2.625V5.25H16.0625V2.625H14.75V3.9375H13.4375V2.625H4.25V3.9375H2.9375V2.625H1.625ZM8.21826 15.75C8.19775 15.5381 8.1875 15.3193 8.1875 15.0938C8.1875 14.2803 8.34131 13.5146 8.64893 12.7969C8.95654 12.0791 9.38037 11.4536 9.92041 10.9204C10.4604 10.3872 11.0859 9.9668 11.7969 9.65918C12.5078 9.35156 13.2734 9.19434 14.0938 9.1875C14.7773 9.1875 15.4336 9.30029 16.0625 9.52588V6.5625H1.625V15.75H8.21826ZM14.0938 19.6875C14.7295 19.6875 15.3242 19.5679 15.8779 19.3286C16.4316 19.0894 16.917 18.7612 17.334 18.3442C17.751 17.9272 18.0791 17.4419 18.3184 16.8882C18.5576 16.3345 18.6807 15.7363 18.6875 15.0938C18.6875 14.458 18.5679 13.8633 18.3286 13.3096C18.0894 12.7559 17.7612 12.2705 17.3442 11.8535C16.9272 11.4365 16.4419 11.1084 15.8882 10.8691C15.3345 10.6299 14.7363 10.5068 14.0938 10.5C13.458 10.5 12.8633 10.6196 12.3096 10.8589C11.7559 11.0981 11.2705 11.4263 10.8535 11.8433C10.4365 12.2603 10.1084 12.7456 9.86914 13.2993C9.62988 13.853 9.50684 14.4512 9.5 15.0938C9.5 15.7295 9.61963 16.3242 9.85889 16.8779C10.0981 17.4316 10.4263 17.917 10.8433 18.334C11.2603 18.751 11.7456 19.0791 12.2993 19.3184C12.853 19.5576 13.4512 19.6807 14.0938 19.6875ZM14.75 14.4375H16.7188V15.75H13.4375V11.8125H14.75V14.4375Z" fill="white"/>
                      </svg>
                    </span>
                  </div>
                  {errors.time && (
                    <p className="error-text text-red-600 text-xs lg:text-sm text-start">{t('input.errorTime')}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="relative w-full">
                    <input 
                      id='name' 
                      {...register('name', {required: true})}
                      type="text" 
                      placeholder={t('input.name')} 
                      className='w-full focus:outline-none px-3 py-2 !leading-[1.2] lg:px-4 lg:py-3 text-white font-futura max-lg:text-sm rounded bg-currentDark border-[0.5px] border-[#FFFFFFE5] appearance-none pr-10' 
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9849 15.3462C8.11731 15.3462 4.81445 15.931 4.81445 18.2729C4.81445 20.6148 8.09636 21.2205 11.9849 21.2205C15.8525 21.2205 19.1545 20.6348 19.1545 18.2938C19.1545 15.9529 15.8735 15.3462 11.9849 15.3462Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9849 12.0059C14.523 12.0059 16.5802 9.94781 16.5802 7.40971C16.5802 4.87162 14.523 2.81448 11.9849 2.81448C9.44682 2.81448 7.3887 4.87162 7.3887 7.40971C7.38015 9.93924 9.42396 11.9973 11.9525 12.0059H11.9849Z" stroke="white" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </span>
                  </div>
                  {errors.name && (
                    <p className="error-text text-red-600 text-xs lg:text-sm text-start">{t('input.errorName')}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="relative w-full">
                    <InputMask
                      mask="+\9\98 (99) 999-99-99"
                      alwaysShowMask={false}
                      id="tel"
                      type="text"
                      {...register('tel', {required: true})}
                      placeholder={t('input.telephone')}
                      className="w-full focus:outline-none px-3 py-2 !leading-[1.2] lg:px-4 lg:py-3 text-white font-futura max-lg:text-sm rounded bg-currentDark border-[0.5px] border-[#FFFFFFE5] appearance-none pr-10"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.72907 2.86337L10.656 8.25748L8.93105 11.2532C8.99237 11.4341 9.09094 11.6944 9.2378 12.0043C9.53723 12.6361 10.0321 13.4627 10.8117 14.2422C11.6375 15.0681 12.5138 15.6095 13.1845 15.944C13.5181 16.1104 13.798 16.2242 13.9911 16.2954L16.9783 14.5754L22.516 18.6589L22.1929 19.2362C21.2675 20.8896 20.0864 22.0708 18.433 22.9961L18.2782 23.0828L18.101 23.0909C13.2223 23.3142 9.02729 20.6613 6.20413 17.3777C4.78771 15.7303 3.69292 13.8991 3.01153 12.1366C2.33529 10.3873 2.04183 8.64088 2.31358 7.18787L2.3374 7.0605L2.40258 6.94851C3.33734 5.34226 4.54416 4.14491 6.1431 3.20707L6.72907 2.86337ZM14.0736 17.1133C13.8754 17.8366 13.8751 17.8366 13.8749 17.8365L13.8733 17.8361L13.8705 17.8353L13.8626 17.8331L13.8384 17.826C13.8185 17.8202 13.7912 17.8119 13.7571 17.801C13.6887 17.7793 13.5929 17.7473 13.4739 17.7034C13.236 17.6158 12.9045 17.4806 12.515 17.2863C11.7376 16.8986 10.7178 16.2697 9.75106 15.3029C8.8227 14.3745 8.23677 13.3945 7.88233 12.6467C7.70474 12.272 7.58396 11.9528 7.50659 11.7234C7.46786 11.6085 7.4399 11.5158 7.42105 11.4494C7.41162 11.4163 7.40446 11.3896 7.39937 11.3701L7.39326 11.3461L7.39132 11.3382L7.39061 11.3353L7.39033 11.3341C7.39027 11.3339 7.39009 11.3331 8.11968 11.1593L7.39009 11.3331L7.32106 11.0433L8.87014 8.35297L6.32925 4.86277C5.26855 5.58502 4.44165 6.46287 3.76676 7.58833C3.60255 8.6518 3.81333 10.0507 4.41062 11.5957C5.02641 13.1886 6.02928 14.8736 7.34153 16.3998C9.93905 19.421 13.6568 21.7232 17.8546 21.5992C18.9924 20.936 19.844 20.1367 20.543 19.0677L16.8772 16.3645L14.1769 17.9193L13.8749 17.8365L14.0736 17.1133Z" fill="white"/>
                      </svg>
                    </span>
                  </div>              
                  {errors.tel && (
                    <p className="error-text text-red-600 text-xs lg:text-sm text-start">{t('input.errorTelephone')}</p>
                  )}
                </div>
                <ButtonUI type={'submit'} text={serviceOrderPostLoading ? <AiOutlineLoading className="animate-spin text-2xl"/> : t("btn.send")} extraStyle={'w-fit self-center'}/>
              </form>
            </div>
          </div>
        </div>
      }
      <SuccesModal modal={succesModal} setModal={setSuccessModal}/>
    </>
  );
};

export default ServiceFormModal;
