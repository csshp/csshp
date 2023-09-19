import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/effect-fade';

import { Autoplay,EffectFade} from "swiper/modules";

import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.jpg";

export default function Swiperr() {
    return (
        <>
            <Swiper
                spaceBetween={1920}
                centeredSlides={true}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay,EffectFade]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} alt="img1" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="img2" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="img3" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="img4" /></SwiperSlide>
            </Swiper>
        </>
    );
}
