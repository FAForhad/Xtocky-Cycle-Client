import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, } from "swiper";
import './Advertised.css'
const Advertised = () => {
    return (
        <div className='border-none'>
            <div className=' mx-auto px-5 py-5 lg:px-40 lg:py-24'>
                <h1 className='text-start font-bold text-xl'>MEET  <br /> <span className='text-6xl text-orange-600'>OUR BEST SELLERS</span> </h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div
                        slot="container-start"
                        className="parallax-bg "
                        data-swiper-parallax="-15%"
                    ></div>
                    <SwiperSlide>
                        <a href="#" class="group relative flex h-96 w-96 mx-auto items-end ">
                            <img
                                alt="Bike"
                                src="https://images.unsplash.com/photo-1605008585816-03ab23ce80af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                class="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                class="relative w-full bg-red-500 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3"
                            >
                                <h3 class="text-lg uppercase">Custom Shop</h3>

                                <p class="mt-1 text-xs font-medium uppercase">Design your own</p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" class="group relative flex h-96 w-96 mx-auto items-end ">
                            <img
                                alt="Bike"
                                src="https://images.unsplash.com/photo-1605008585816-03ab23ce80af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                class="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                class="relative w-full bg-red-500 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3"
                            >
                                <h3 class="text-lg uppercase">Custom Shop</h3>

                                <p class="mt-1 text-xs font-medium uppercase">Design your own</p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" class="group relative flex h-96 w-96 mx-auto items-end">
                            <img
                                alt="Bike"
                                src="https://images.unsplash.com/photo-1605008585816-03ab23ce80af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                class="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                class="relative w-full bg-red-500 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3"
                            >
                                <h3 class="text-lg uppercase">Custom Shop</h3>

                                <p class="mt-1 text-xs font-medium uppercase">Design your own</p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" class="group relative flex h-96 w-96 mx-auto items-end ">
                            <img
                                alt="Bike"
                                src="https://images.unsplash.com/photo-1605008585816-03ab23ce80af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                class="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                class="relative w-full bg-red-500 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3"
                            >
                                <h3 class="text-lg uppercase">Custom Shop</h3>

                                <p class="mt-1 text-xs font-medium uppercase">Design your own</p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" class="group relative flex h-96 w-96 mx-auto items-end">
                            <img
                                alt="Bike"
                                src="https://images.unsplash.com/photo-1605008585816-03ab23ce80af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                class="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                class="relative w-full bg-red-500 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3"
                            >
                                <h3 class="text-lg uppercase">Custom Shop</h3>

                                <p class="mt-1 text-xs font-medium uppercase">Design your own</p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" class="group relative flex h-96 w-96 mx-auto items-end">
                            <img
                                alt="Bike"
                                src="https://images.unsplash.com/photo-1605008585816-03ab23ce80af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                class="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                class="relative w-full bg-red-500 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3"
                            >
                                <h3 class="text-lg uppercase">Custom Shop</h3>

                                <p class="mt-1 text-xs font-medium uppercase">Design your own</p>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    );
};

export default Advertised;