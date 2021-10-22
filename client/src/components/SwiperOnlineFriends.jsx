import React from 'react'
/* import swiper*/ 
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper.min.css'
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([Pagination]);


const SwiperOnlineFriends = () => {


    return (
        <div className="swiperOnline">
                <Swiper slidesPerView={6} spaceBetween={0} pagination={{"clickable": true}} className="mySwiper">
                    <SwiperSlide><img style={{width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover"}} src="img/anonymous.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover"}} src="img/anonymous.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover"}} src="img/anonymous.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover"}} src="img/anonymous.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover"}} src="img/anonymous.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover"}} src="img/anonymous.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover"}} src="img/anonymous.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover"}} src="img/anonymous.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover"}} src="img/anonymous.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover"}} src="img/anonymous.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover"}} src="img/anonymous.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover"}} src="img/anonymous.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover"}} src="img/anonymous.png" alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{width: "42px", height: "42px", borderRadius: "50%", objectFit: "cover"}} src="img/anonymous.png" alt="" /></SwiperSlide>
                </Swiper>
        </div>
    )
}

export default SwiperOnlineFriends
