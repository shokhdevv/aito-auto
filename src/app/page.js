"use server"
import {HomePage} from "@/components/pages";

async function fetchBanner() {
  try {
    const bannerRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banner`, {
      cache: "no-store"
    })
    return bannerRes.json()
  } catch (err) {
    return []
  }

}

async function fetchCar() {
  try {
    const carRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/car`, {
      cache: "no-store"
    })
    return carRes.json()
  } catch (err) {
    return []
  }

}

async function fetchAbout() {
  try {
    const aboutRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/about/home`, {
      cache: "no-store"
    })
    return aboutRes.json()
  } catch (err) {
    return {}
  }

}

async function fetchNews() {
  try {
    const newsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news?pageSize=3&pageNumber=1`, {
      cache: "no-store"
    })
    return newsRes.json()
  } catch (err) {
    return []
  }
}

export default async function Home() {
  const bannerRes = await fetchBanner()
  const carRes = await fetchCar()
  const aboutRes = await fetchAbout()
  const newsRes = await fetchNews()

  return <HomePage newsRes={newsRes} aboutRes={aboutRes} bannerRes={bannerRes} carRes={carRes}/>;
}

