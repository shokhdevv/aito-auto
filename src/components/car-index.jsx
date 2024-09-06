import { AnimationBtn, ImgUI } from ".";

export default function CarIndex({ name, image , slug ,  useRef }) {


  return (
      <section ref={useRef} className="px-[5%] py-10 comparisonSection">
        <h2 className="text-[10vw] text-nowrap text-center font-extrabold font-conquera !leading-[1.3]">
          <span className="gradient-text">{name}</span>
        </h2>
        <div className="lg:mx-[8%] relative">
          <div className="w-full aspect-[19/9] relative translate-y-11s lg:-translate-y-[10%] comparisonImage">
            <ImgUI quality={100} src={image} alt={"Before Car Image"} objectFitContain card />
          </div>
        </div>
        <div className="flex justify-center w-full section-btn">
          <AnimationBtn text={'Узнать больше'} href={slug} />
        </div>
      </section>
  );
}
