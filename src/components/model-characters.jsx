"use client"
import React from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function ModelCharacters() {
  return (
    <>
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <PositionCard/>
          </SwiperSlide>
        </Swiper>

      </div>
    </>
  )
}


function PositionCard () {
  return (
    <div>

    </div>
  )
}
