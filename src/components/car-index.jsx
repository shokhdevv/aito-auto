import { AnimationBtn, ImgUI } from ".";

export default function CarIndex({name, image , slug}) {
  return (
    <div className="px-[5%]  py-10">
      <h2 className="text-[10vw] text-nowrap text-center font-extrabold font-conquera !leading-[1.3]">
        <span className=" gradient-text">{name}</span>
      </h2>
      <div className="lg:mx-[8%]">
        <div className="w-full  aspect-[19/9] relative translate-y-11s lg:-translate-y-[10%]">
          <ImgUI quality={100} src={image} alt={"Car Image "} objectFitContain card/>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <AnimationBtn text={'Узнать больше'} href={slug}/>
      </div>
    </div>
  )
}
