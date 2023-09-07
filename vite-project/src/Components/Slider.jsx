import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // centeredSlides={true}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="featuredItem">
              <img
                src="https://images.pexels.com/photos/59924/pexels-photo-59924.jpeg"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">Redisson blu</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="featuredItem">
              <img
                src="https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">Taj Landsend</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="featuredItem">
              <img
                src="https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">The Oberoi</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="featuredItem">
              <img
                src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">Trident</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="featuredItem">
              <img
                src="https://images.pexels.com/photos/59924/pexels-photo-59924.jpeg"
                alt=""
                className="featuredImg"
              />
              <div className="featuredTitles">Lila</div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
