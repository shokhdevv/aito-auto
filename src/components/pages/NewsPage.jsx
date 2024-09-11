"use client"
import { NewsBanner, NewsCard } from "@/components";
import { langSelect } from "@/helper";
import moment from "moment";
import { useTranslation } from "react-i18next";

export default function Page ({list}) {
  const {i18n} = useTranslation()
  return (
    <>
      <NewsBanner image={`${process.env.NEXT_PUBLIC_API_URL}/${list[0]?.image?.path}`} date={moment(list[0]?.createdAt).format('MMM DD, YYYY')} title={langSelect(i18n.language ,list[0]?.titleRu, list[0]?.titleUz )} href={`/news/${list[0]?.slug}`}/>
      <section className="py-6 lg:pt-[70px] bg-currentDark min-h-[20vh]">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-y-10">
          {
            list?.slice(1)?.map(card => (
              <NewsCard news={card}/>
            ))
          }
        </div>
      </section>
    </>
  )
}
