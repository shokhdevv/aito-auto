import { ButtonUI, ImgUI } from ".";

export default function TestDriveSection() {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-7 gap-8  relative z-10">
        <div className=" border-2 border-[#FFFFFFB3] rounded-xl gap-5 lg:gap-8 p-3 lg:p-5 relative xl:col-span-3 max-md:order-2">
          <div className="w-10 h-20 bg-currentDark absolute top-5 -right-6 max-md:hidden"></div>
          <div className=" bg-currentDark border border-[#2C2C2C80] rounded-xl p-5 lg:p-8">
            <form className="w-full font-futura flex flex-col items-center gap-5 xl:gap-8">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="changeModel" className="text-labelText max-lg:text-sm ">Выберите модель автомобиля</label>
                <select name="" id="changeModel" className="md:text-lg cursor-pointer appearance-none lg:text-xl p-2 !text-white bg-currentDark focus:!outline-none border-b border-labelText">
                  <option value="Aito M5" className="cursor-pointer ">Aito M5</option>
                  <option value="Aito M6" className="cursor-pointer ">Aito M6</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name" className="text-labelText max-lg:text-sm ">Ваше имя</label>
                <input type="text" id="name" className=" focus:outline-none bg-currentDark p-2 border-b border-labelText text-white" />
                <p className="error-text text-red-600 text-xs lg:text-sm">Укажите свое имя</p>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="number" className="text-labelText max-lg:text-sm ">Ваш номер телефона</label>
                <input type="text" id="number" className=" focus:outline-none bg-currentDark p-2 border-b border-labelText text-white" />
              </div>
              <ButtonUI text={'Отправить'} extraStyle={'px-5'}/>
            </form>
          </div>
        </div>
        <div className=" text-white space-y-4 md:mt-8 xl:col-span-4 ">
          <h2 className="text-2xl lg:text-3xl xl:text-[40px]">Запишитесь на тест-драйв</h2>
          <p className="lg:text-lg xl:text-xl max-w-[600px]">Оставьте заявку на тест-драйв у официального дистрибьютора в Узбекистане.</p>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-[60%] lg:w-[80%] h-full z-[5] max-md:hidden ">
          <ImgUI src={'/testdrive1home.png'} alt={'Aito Bg Image'} imageStyle={'object-center'}/>
      </div> 
    </>
  )
}
