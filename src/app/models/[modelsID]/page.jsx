import {ModelsIDPage} from '@/components/pages'

async function getModel(params) {
  try {
    const resModel = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/car/${params}`, { cache: 'no-store' })
    const modelData = await resModel?.json()
    
    return [modelData]
  } catch (err) {
    return [{}]
  }
}

export default async function Page ({params}) {
  const [modelData] = await getModel(params.modelsID)
  return (
    <ModelsIDPage data={modelData}/>
  );
};