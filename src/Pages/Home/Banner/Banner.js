import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from "swiper";
import './Banner.css'

const Banner = () => {
    return (
        <div >
            <div >
                <Swiper
                    style={{
                        height: '750px',
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    speed={600}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation]}
                    className="mySwiper h-full"
                >
                    <div
                        slot="container-start"
                        className="parallax-bg "
                        style={{
                            "background-image":
                                "url(https://wallpaperaccess.com/full/4447041.jpg)",
                        }}
                        data-swiper-parallax="-15%"
                    ></div>
                    <SwiperSlide>
                        <div className="text" data-swiper-parallax="-100">
                            <div className='lg:flex md:flex items-center justify-center'>
                                <div className="card  w-full p-5 mx-auto lg:mt-24">
                                    <iframe className='border  border-8 border-yellow-400 pt-6 rounded-lg rounded-tl-full  lg:h-96 md:h-72 h-60' src="https://embed.lottiefiles.com/animation/69048"></iframe>
                                </div>
                                <div className='w-full text-start px-3'>
                                    <p className='lg:text-3xl text-lg md:text-xl'>FOR BETTER RIDE</p>
                                    <p className='lg:text-7xl text-4xl md:text-5xl my-5'>FIND YOUR <span className='text-yellow-400'>DESIRE BIKE</span> </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text" data-swiper-parallax="-100">
                            <div className='lg:flex md:flex items-center justify-center'>
                                <div className="card  w-full p-5 mx-auto lg:mt-24">
                                    <iframe className='border  border-8 border-green-500 pt-6 rounded-lg rounded-tl-full  lg:h-96 md:h-72 h-60' src="https://embed.lottiefiles.com/animation/69048"></iframe>
                                </div>
                                <div className='w-full text-start px-3'>
                                    <p className='lg:text-3xl text-lg md:text-xl'>KEEP CALM</p>
                                    <p className='lg:text-7xl text-4xl md:text-5xl my-5'>HAVE A  <span className='text-green-500'>SAFE TRIP</span> </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text" data-swiper-parallax="-100">
                            <div className='lg:flex md:flex items-center justify-center'>
                                <div className="card  w-full p-5 mx-auto lg:mt-24">
                                    <iframe className='border  border-8 border-orange-500 pt-6 rounded-lg rounded-tl-full  lg:h-96 md:h-72 h-60' src="https://embed.lottiefiles.com/animation/32527"></iframe>
                                </div>
                                <div className='w-full text-start px-3'>
                                    <p className='lg:text-3xl text-lg md:text-xl'>GO SAFE, MOVE SAFE</p>
                                    <p className='lg:text-7xl text-4xl md:text-5xl my-5'>STAY SAFE <span className='text-orange-500'>LEAVE SFAE</span> THEN BACK SAFE</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;