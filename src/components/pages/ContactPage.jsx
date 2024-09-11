"use client"
import { BgPage, ButtonUI, SectionTitle, SuccesModal } from '@/components'
import { formatPhoneNumber, langSelect } from '@/helper'
import apiService from '@/service/axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { AiFillInstagram, AiOutlineLoading } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebookF, FaMapMarkerAlt, FaTelegramPlane, FaYoutube } from 'react-icons/fa'
import { useMutation } from 'react-query'

export default function page({data}) {
  const {t, i18n} = useTranslation()
  const navigate = useRouter()
  const [successModal, setSuccessModal] = useState(false)

  const {
      register,
      handleSubmit,
      reset,
      control,
      formState: {errors},
  } = useForm();
  const {
      mutate: questionsPost,
      data: questionsPostData,
      isLoading: questionsPostLoading,
      isSuccess: questionsPostSuccess,
  } = useMutation(({url, data}) => apiService.postData(url, data));

  useEffect(() => {
    if (questionsPostSuccess) {
        reset();
        setSuccessModal(true);
        setTimeout(() => {
            setSuccessModal(false);
            navigate.push("/");
        }, 2000);
    }
  }, [questionsPostSuccess]);

  const onSubmit = (data) => {
    const postData = {...data}
    questionsPost({url: '/questions', data: postData})
  }

  return (
    <main className='pt-[68px] bg-currentDark lg:pt-20 relative overflow-hidden'>
      <section className='py-6 lg:pt-[50px] relative z-10'>
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 text-white">
          <div className='space-y-10 lg:space-y-16'>
            <div className='space-y-6'>
              <SectionTitle title={t('contact.title')}/>
              <div className='lg:space-y-8 space-y-3 max-md:text-sm'>
                <div className='text-[#FFFFFFCC] flex items-center gap-4'>
                  <FaMapMarkerAlt className="lg:text-2xl"/>
                  <p>{langSelect(i18n.language , data?.addressRu , data?.addressUz)}</p>
                </div>
                <div className='text-[#FFFFFFCC] flex items-center gap-4'>
                  <BsFillTelephoneFill className="lg:text-2xl"/>
                  <div className='flex flex-col'> 
                    {
                      data?.tel?.map((number, idx) => (
                        <a key={idx} href={`tell:${number}`}>{formatPhoneNumber(number)}</a>
                      ))
                    }
                  </div>
                </div>
                <div className="flex gap-3 xl:gap-6 items-center ">
                  {
                    data?.facebook &&
                    <a target='_blank' href={data?.facebook}>
                      <FaFacebookF className=" text-2xl duration-200 hover:scale-110" />
                    </a>
                  }
                  {
                    data?.telegram && 
                    <a target='_blank' href={data?.telegram}>
                      <FaTelegramPlane  className=" text-2xl duration-200 hover:scale-110" />
                    </a>
                  }
                  {
                    data?.instagram &&
                    <a target='_blank' href={data?.instagram}>
                      <AiFillInstagram  className=" text-2xl duration-200 hover:scale-110" />
                    </a>
                  }
                  {
                    data?.youtube &&
                    <a target='_blank' href={data?.youtube}>
                      <FaYoutube  className=" text-2xl duration-200 hover:scale-110" />
                    </a>
                  }
                </div>
              </div>
            </div>
            <div className=''>
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4  lg:gap-8'>
                <div className='max-w-[470px]'>
                  <h3 className='text-lg font-bold lg:text-xl xl:text-2xl mb-4'>{t('contact.formTitle')}</h3>
                  <p className=' max-lg:text-sm '>{t('contact.formText')}</p>
                </div>
                <div className='max-w-[470px] w-full space-y-3 lg:space-y-6'>
                  <input  id='name' {...register('name', {required: true})} type="text" placeholder={t('input.name')} className='w-full focus:outline-none px-3 py-2 !leading-[1.2] lg:px-4 lg:py-3 text-white font-futura max-lg:text-sm rounded bg-currentDark border-[0.5px] border-[#FFFFFFE5]' />
                  {errors.name && (
                    <p className="error-text text-red-600 text-xs lg:text-sm">{t('input.errorName')}</p>
                  )}
                  <InputMask mask="+\9\98 (99) 999-99-99"  {...register('tel', {required: true})} alwaysShowMask={false} id={'tel'} type={'text'}  className="w-full focus:outline-none px-3 py-2 !leading-[1.2] lg:px-4 lg:py-3 text-white font-futura max-lg:text-sm rounded bg-currentDark border-[0.5px] border-[#FFFFFFE5]"  placeholder={t('input.telephone')}/>
                  {errors.tell && (
                    <p className="error-text text-red-600 text-xs lg:text-sm">{t('input.telephone')}</p>
                  )}
                  <textarea id='comment' {...register('comment', {required: true})} type="text" placeholder={t('input.comment')} className='w-full focus:outline-none px-3 py-2 !leading-[1.2] lg:px-4 lg:py-3 text-white font-futura max-lg:text-sm rounded bg-currentDark border-[0.5px] border-[#FFFFFFE5]' />
                  {errors.comment && (
                    <p className="error-text text-red-600 text-xs lg:text-sm">{t('input.errorComment')}</p>
                  )}
                </div>
                <ButtonUI text={questionsPostLoading ? <AiOutlineLoading className="animate-spin text-2xl"/> : t("btn.send")}/>
              </form>
            </div>
          </div>
          <div className='w-full aspect-square m rounded-lg overflow-hidden'>
            <iframe className='w-full h-full' src={data?.location}  loading="lazy"></iframe>
          </div>
        </div>
      </section>
      <BgPage positionStyle={' w-[200px] -top-[50px] md:-top-[200px] xl:-top-[300px] -left-[50px] md:w-[350px] xl:w-[500px]'}/>
      <BgPage positionStyle={' w-[200px] top-[50%]  -right-[50px] md:w-[350px] xl:w-[500px]'}/>
      <SuccesModal setModal={setSuccessModal} modal={successModal}/>
    </main>
  )
}
