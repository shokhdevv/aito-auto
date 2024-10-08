'use client'
import Link from "next/link";
import { ImgUI } from ".";
import { FiArrowUpRight } from "react-icons/fi";
import { langSelect } from "@/helper";
import { useTranslation } from "react-i18next";
import moment from "moment";

export default function NewsCard({news}) {
  const {i18n} = useTranslation()
  const formattedDate = moment(news?.createdAt).format('MMM DD, YYYY');
  return (
    <Link href={`/news/${news?.slug}`} className="w-full group aspect-[7/6] block relative overflow-hidden rounded-xl">
      <div className="absolute top-0 left-0 z-[4]  w-full h-full group-hover:-translate-y-5 duration-200">
        <ImgUI src={`${process.env.NEXT_PUBLIC_API_URL}/${news?.image?.path}`} alt={"Aito News Image"}/>
      </div>
      <div className="w-full absolute z-[5]   bottom-0 left-0  duration-200  ">
        <div className="bg-[#FFFFFF08] w-full h-full rounded-xl p-3 md:p-4 overflow-hidden backdrop-blur-[20px]">
          <div className="flex gap-5 lg:gap-7 justify-between">
            <div className="font-futura text-sm  space-y-2 3xl:text-base text-white !leading-[1.1] gap-4 lg:gap-7 ">
              <p className=" font-medium   text-lg h-[56px] line-clamp-2	">{langSelect(i18n.language , news?.titleRu , news?.titleUz)}</p>
              <p className=" font-normal">{formattedDate}</p>
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
