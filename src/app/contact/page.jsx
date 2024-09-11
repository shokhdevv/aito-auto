import {ContactPage} from '@/components/pages'

async function getContact() {
  try{
    const resContact = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, { cache: 'no-store' })
    const dataContact = await resContact?.json()
  
    return [dataContact]
  }catch(err){
    return [{}]
  }
}


export default async function Page () {
  const [dataContact] = await getContact()
  return (
       <ContactPage data={dataContact}/>
  );
};