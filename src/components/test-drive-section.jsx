'use client'
import {ButtonUI, ImgUI, SuccesModal} from ".";
import {useDispatch, useSelector} from "react-redux";
import {useMutation, useQuery} from "react-query";
import apiService from "@/service/axios";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {AiOutlineLoading} from "react-icons/ai";
import InputMask from "react-input-mask";
import {useTranslation} from "react-i18next";
import {useRouter} from "next/navigation";
import {selectCar} from "@/store/slice/testDriveSlice";


export default function TestDriveSection() {
  const {t}=useTranslation()
  const dispatch=useDispatch()
  const [succesModal , setSuccessModal] = useState(false)
  const router=useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm()
  const {model} = useSelector(state => state.drive)
  const {refetch, data} = useQuery('test-drive', () => apiService.getData('/car/testdrive'), {
    enabled: false
  })

  const {
    mutate: userPost,
    data: userPostData,
    isLoading: userPostLoading,
    isSuccess: userPostSuccess
  }=useMutation(({url, data}) => apiService.postData(url, data))

  useEffect(() => {
    if (userPostSuccess) {
      reset();
      setSuccessModal(true);
      setTimeout(() => {
        setSuccessModal(false);
        router.push("/");
        reset()
        dispatch(selectCar(model))
      }, 2000);
    }
  }, [userPostSuccess]);
  useEffect(() => {
    refetch()
  }, []);

  const onSubmit = (data) => {
    userPost({url: '/testDrive', data})
  }

  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-8  relative z-10">
        <div className=" border-2 border-[#FFFFFFB3] rounded-xl gap-5 lg:gap-8 p-3 lg:p-5 relative xl:col-span-3 max-md:order-2">
          <div className="w-10 h-20 bg-currentDark absolute top-5 -right-6 max-md:hidden"></div>
          <div className=" bg-currentDark border border-[#2C2C2C80] rounded-xl p-5 lg:p-8">
            <form onSubmit={handleSubmit(onSubmit)}
                  className="w-full font-futura flex flex-col items-center gap-5 xl:gap-8">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="changeModel" className="text-labelText max-lg:text-sm ">{t('input.model')}</label>
                <select
                    {...register('model', {required: true})}

                    id="changeModel"
                    className="md:text-lg cursor-pointer appearance-none lg:text-xl p-2 !text-white bg-currentDark focus:!outline-none border-b border-labelText uppercase">
                  {
                    data?.map(car => {
                      const selectCar=model ? model===car?.name:false
                      return (
                          <option defaultValue={selectCar} key={car?._id} value={car?.name}
                                  className="cursor-pointer uppercase">Aito {car?.name}</option>
                      )
                    })
                  }
                </select>
                {errors.model && (
                    <span className={"text-red-600 text-xs"}>{t('input.model')}</span>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name" className="text-labelText max-lg:text-sm ">{t('input.name')}</label>
                <input
                    {...register('name', {required: true})}
                    type="text"
                    id="name"
                    className="focus:outline-none bg-currentDark p-2 border-b border-labelText text-white"
                />
                {errors.name && (
                    <span className={"text-red-600 text-xs"}>{t('input.errorName')}</span>
                )}
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="number" className="text-labelText max-lg:text-sm ">{t('input.telephone')}</label>
                <InputMask
                    mask="+\9\98 (99) 999-99-99"
                    alwaysShowMask={false}
                    id="tel"
                    type="text"
                    {...register('tel', {required: true})}
                    className="focus:outline-none bg-currentDark p-2 border-b border-labelText text-white"
                />

                {errors.tel && (
                    <span className={"text-red-600 text-xs"}>{t('input.errorTelephone')}</span>
                )}
              </div>
              <ButtonUI text={userPostLoading ? <AiOutlineLoading className="animate-spin text-2xl"/> : 'Отправить'} extraStyle={'px-5'}/>
            </form>
          </div>
        </div>
        <div className=" text-white space-y-4 md:mt-8 xl:col-span-4 ">
          <h2 className="text-2xl lg:text-3xl xl:text-[40px]">{t('drive.title')}</h2>
          <p className="lg:text-lg xl:text-xl max-w-[600px]">{t('drive.text')}</p>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-[60%] lg:w-[80%] h-full z-[5] max-md:hidden ">
          <ImgUI src={'/front/testdrive1home.png'} alt={'Aito Bg Image'} imageStyle={'object-center'}/>
      </div>
      <SuccesModal modal={succesModal} setModal={setSuccessModal}/>
    </>
  )
}
