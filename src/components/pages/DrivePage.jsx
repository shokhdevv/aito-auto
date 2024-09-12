import { BgPage, TestDriveSection } from '@/components'

export default function Page() {
    return (
        <div className='min-h-[85vh] md:pt-20 lg:pt-[150px] bg-currentDark overflow-hidden relative'>
            <section className='relative py-20 '>
                <TestDriveSection/>
            </section>
            <BgPage positionStyle={' w-[200px] top-[-50px] left-[-50px] md:w-[350px] xl:w-[500px] xl:left-[-200px] xl:top-[-200px]'}/>
        </div>
    )
}