import {NewsPage} from '@/components/pages'


async function getNews() {
  const resNewsList = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news`, { cache: 'no-store' })
  return  resNewsList?.json()
}


export default async function Page () {
  
  const listData = await getNews()

  return (
      <NewsPage list={listData}/>
  );
};