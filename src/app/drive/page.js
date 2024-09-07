import { TestDriveSection } from '@/components'
import React from 'react'

export default function Page() {
  return (
    <div className='min-h-[85vh] md:pt-20 lg:pt-[150px] bg-currentDark'>
      <section className='relative py-20 '>
        <TestDriveSection/>
      </section>
    </div>
  )
}
