"use client"
import { BgPage, TestDriveSection } from '@/components'

export default function Page() {
    return (
        <section className='min-h-[85vh] md:pt-20 lg:pt-[150px]  flex flex-col justify-center bg-currentDark overflow-hidden relative'>
            <div className='relative   md:py-20'>
                <TestDriveSection/>
            </div>
            <BgPage positionStyle={' w-[200px] top-[-50px] left-[-50px] md:w-[350px] xl:w-[500px] xl:left-[-200px] xl:top-[-200px]'}/>
        </section>
    )
}