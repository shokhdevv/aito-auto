import {ServicePage} from '@/components/pages'

async function getService() {
  try{
    const resService = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/service`, { cache: 'no-store' })
    return await resService?.json()
  }catch(err){
    return {}
  }
}


export default async function Page () {
  const dataService = await getService()
  return (
       <ServicePage data={dataService}/>
  );
};