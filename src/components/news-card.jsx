import Link from "next/link";
import { ImgUI } from ".";
import { FiArrowUpRight } from "react-icons/fi";

export default function NewsCard({slug, text, date , image}) {
  return (
    <Link href={slug} className="w-full group aspect-[7/6] block relative overflow-hidden rounded-xl">
      <div className="absolute top-0 left-0 z-[4]  w-full h-full">
        <ImgUI src={image} alt={"Aito News Image"}/>
      </div>
      <div className="w-full h-full absolute z-[5] p-3 md:p-4 bg-[#FFFFFF08] rounded-xl duration-200 overflow-hidden backdrop-blur-[20px] translate-y-[65%]">
        <div className="flex gap-5 lg:gap-7">
          <div className="font-futura text-sm space-y-2 3xl:text-base text-white !leading-[1.1] gap-4 lg:gap-7 ">
            <p>{text}</p>
            <p>{date}</p>
          </div>
          <div className="p-1.5 lg:p-2.5 rounded-full overflow-hidden bg-[#1C1C1C] shrink-0 h-fit mt-1.5">
            <FiArrowUpRight className=" text-white text-2xl lg:text-3xl group-hover:rotate-45 duration-200"/>
          </div>
        </div>
      </div>
    </Link>
  )
}
