import {NewsIDPage} from '@/components/pages'

async function getNew(params) {
  try {
    const resNew = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/${params}`, { cache: 'no-store' })
    return  resNew?.json()
  } catch (err) {
    return {}
  }
}

export default async function Page ({params}) {
  const newData = await getNew(params.newsID)
  return (
    <NewsIDPage data={newData}/>
  );
};