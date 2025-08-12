import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';
import SwiperCore from 'swiper/core';
SwiperCore.use([Pagination, Autoplay, Mousewheel, Keyboard]);

const OngoingGalleyImages = () => {
    const propertyData = useSelector(state => state?.property?.propertyData)
    const galleyimages = propertyData?.images || []

    return (
        <>
            {galleyimages.length > 0 &&
                <div className='GalleyImages-parent' id='Gallery'>

                    <div>
                        <div className='AssetsComponent-sub-parent'>
                            <h1>Gallery - </h1>
                        </div>
                        <div className='Swiper-mobile'>
                            <Swiper
                                spaceBetween={50}
                                slidesPerView={3}
                                loop={true}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Pagination, Autoplay, Mousewheel, Keyboard]}

                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    480: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                }}
                            >
                                <br /><br />
                                {
                                    galleyimages.length > 0 && galleyimages.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className='galleryimages-swiper-image'>
                                                <img src={item.img} alt={`Slide ${index + 1}`} />
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>

                </div>
            }
        </>

    )
}

export default OngoingGalleyImages