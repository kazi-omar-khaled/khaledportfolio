import React from "react";
import './Portfolio.css';
import LocalMart from "../../img/localmart.jpg";
import Calculator from "../../img/simplecalculator.jpg";
import AddContact from "../../img/addcontact.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Portfolio = () => {
    return (
        <div className="Portfolio">
            <span>Recent Projects</span>
            <span>Portfolio</span>

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='Portfolio-slider'
            >
                <SwiperSlide>
                    <a href="https://kazi-omar-khaled.github.io/local-mart" target="_blank">
                        <img src={LocalMart} alt="Nothing" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://kazi-omar-khaled.github.io/calculator" target="_blank">
                        <img src={Calculator} alt="Nothing" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://kazi-omar-khaled.github.io/contact-app" target="_blank">
                        <img src={AddContact} alt="Nothing" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio; 