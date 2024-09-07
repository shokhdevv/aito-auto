import Link from "next/link";
import { ImgUI } from ".";
import { FiArrowUpRight } from "react-icons/fi";

export default function NewsCard({slug, text, date , image}) {
  return (
    <Link href={slug} className="w-full group aspect-[7/6] block relative overflow-hidden rounded-xl">
      <div className="absolute top-0 left-0 z-[4]  w-full h-full group-hover:-translate-y-5 duration-200">
        <ImgUI src={image} alt={"Aito News Image"}/>
      </div>
      <div className="w-full absolute z-[5]   bottom-0 left-0  duration-200  ">
        <div className="bg-[#FFFFFF08] w-full h-full rounded-xl p-3 md:p-4 overflow-hidden backdrop-blur-[20px]">
          <div className="flex gap-5 lg:gap-7 justify-between">
            <div className="font-futura text-sm  space-y-2 3xl:text-base text-white !leading-[1.1] gap-4 lg:gap-7 ">
              <p className=" font-medium   text-lg h-16">{text}</p>
              <p className=" font-normal">{date}</p>
            </div>
            <div className="p-1.5 lg:p-2.5 rounded-full overflow-hidden bg-[#1C1C1C] shrink-0 h-fit mt-1.5">
              <FiArrowUpRight className=" text-white text-2xl lg:text-3xl group-hover:rotate-45 duration-200"/>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
