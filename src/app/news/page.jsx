import { NewsBanner, NewsCard } from "@/components";
const news = [
  {
    _id: 0,
    text: 'Мы вынуждены отталкиваться  ',
    date: "03 август, 2024",
    image: "/news1home.jpg",
    slug: "/news/1"
  },
  {
    _id: 1,
    text: 'Мы вынуждены отталкиваться  ',
    date: "03 август, 2024",
    image: "/news2home.jpeg",
    slug: "/news/1"
  },
  {
    _id: 2,
    text: 'Мы вынуждены отталкиваться  ',
    date: "03 август, 2024",
    image: "/news3home.webp",
    slug: "/news/1"
  },
  {
    _id: 3,
    text: 'Мы вынуждены отталкиваться  ',
    date: "03 август, 2024",
    image: "/news3home.webp",
    slug: "/news/1"
  },
  {
    _id: 4,
    text: 'Мы вынуждены отталкиваться  ',
    date: "03 август, 2024",
    image: "/news3home.webp",
    slug: "/news/1"
  },
  {
    _id: 5,
    text: 'Мы вынуждены отталкиваться  ',
    date: "03 август, 2024",
    image: "/news3home.webp",
    slug: "/news/1"
  },
]
export default function page() {
  return (
    <>
      <NewsBanner image={'/newsbannerpage.jpg'} date={'28 августа, 2024'} title={'Премиальный автомобильный бренд AITO проведет первое роуд-шоу по территориии Узбекистана'} href={'/news/1'}/>
      <section className="py-6 lg:pt-[70px] bg-currentDark">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-y-10">
          {
            news?.map(card => (
              <NewsCard image={card?.image} key={card._id} slug={card?.slug} text={card?.text} date={card?.date}/>
            ))
          }
        </div>
      </section>
    </>
  )
}
