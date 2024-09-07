import {ImgUI} from "@/components/index";

const AboutCard = ({ src, title, text }) => {
  return (
      <div className='flex items-center gap-3 lg:gap-5 text-white'>
        <div className='relative w-14 aspect-square shrink-0 xl:w-[68px]'>
          <ImgUI src={src} alt={"Aito Icon "} objectFitContain />
        </div>
        <div>
          <h2 className='font-bold lg:text-lg xl:text-xl'>{title}</h2>
          <p className='text-[#FFFFFFB3] text-sm'>{text}</p>
        </div>
      </div>
  );


}


export default AboutCard;