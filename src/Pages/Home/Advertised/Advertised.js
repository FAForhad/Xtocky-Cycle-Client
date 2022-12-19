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
                        <a href="#" className="group relative flex h-96 w-96 mx-auto items-end">
                            <img
                                alt="Bike"
                                src="https://static.designboom.com/wp-content/uploads/2022/07/stromer-st7-bike-designboom-700-400x320-22b08q85r792.jpg"
                                className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                className="relative w-full bg-red-500 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3"
                            >
                                <h3 className="text-lg uppercase">Custom Shop</h3>

                                <p className="mt-1 text-xs font-medium uppercase">Sell your own Product</p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className="group relative flex h-96 w-96 mx-auto items-end">
                            <img
                                alt="Bike"
                                src="https://images.unsplash.com/photo-1570865116909-d358c47f1806?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y3ljbGV8ZW58MHx8MHx8&w=1000&q=80"
                                className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                className="relative w-full bg-red-500 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3"
                            >
                                <h3 className="text-lg uppercase">Custom Shop</h3>

                                <p className="mt-1 text-xs font-medium uppercase">Sell your own Product</p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className="group relative flex h-96 w-96 mx-auto items-end">
                            <img
                                alt="Bike"
                                src="https://static.dezeen.com/uploads/2022/07/benjamin-hubert-layer-pendler-ebike-concept-design_dezeen_2364_sq-411x411.jpg"
                                className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                className="relative w-full bg-red-500 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3"
                            >
                                <h3 className="text-lg uppercase">Custom Shop</h3>

                                <p className="mt-1 text-xs font-medium uppercase">Sell your own Product</p>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className="group relative flex h-96 w-96 mx-auto items-end ">
                            <img
                                alt="Bike"
                                src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmljeWNsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                                className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                className="relative w-full bg-red-500 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3"
                            >
                                <h3 className="text-lg uppercase">Custom Shop</h3>

                                <p className="mt-1 text-xs font-medium uppercase">Sell your own Product</p>
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide>
                        <a href="#" className="group relative flex h-96 w-96 mx-auto items-end ">
                            <img
                                alt="Bike"
                                src="https://i.guim.co.uk/img/media/ca216418ac3b9e8506aeffc16a557cc7798d4679/0_561_3750_2249/master/3750.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4b9dfb06c141a84970a6863e27a97117"
                                className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                className="relative w-full bg-red-500 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3"
                            >
                                <h3 className="text-lg uppercase">Custom Shop</h3>

                                <p className="mt-1 text-xs font-medium uppercase">Sell your own Product</p>
                            </div>
                        </a>
                    </SwiperSlide>

                    <SwiperSlide>
                        <a href="#" className="group relative flex h-96 w-96 mx-auto items-end ">
                            <img
                                alt="Bike"
                                src="https://images.unsplash.com/photo-1605008585816-03ab23ce80af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
                            />

                            <div
                                className="relative w-full bg-red-500 p-6 text-center tracking-widest text-white transition-colors group-hover:bg-black sm:w-2/3"
                            >
                                <h3 className="text-lg uppercase">Custom Shop</h3>

                                <p className="mt-1 text-xs font-medium uppercase">Sell your own Product</p>
                            </div>
                        </a>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div >
    );
};

export default Advertised;