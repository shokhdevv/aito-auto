
const HeaderCharacteristics = ({name , value}) => {
  return (
        <div className='flex flex-col items-center gap-1.5 px-4 lg:px-5 w-[30%] md:w-[25%]'>
          <h3 className='font-futura text-lg text-center md:text-xl lg:text-2xl xl:text-[32px]'>{name}</h3>
          <p className='font-futura text-xs lg:text-sm text-center'>{value}</p>
        </div>
  );
};

export default HeaderCharacteristics;