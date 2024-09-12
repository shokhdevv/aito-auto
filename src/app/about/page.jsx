"use server"
import {AboutPage} from "@/components/pages";
async function fetchAbout() {
  try {
    const aboutRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about`, {
      cache: "no-store"
    })
    return aboutRes.json()
  } catch (err) {
    return []
  }

}
export default async function Page() {
  const aboutRes=await fetchAbout()

  return <AboutPage about={aboutRes}/>
}


