import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard,Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import { useSelector } from 'react-redux';
SwiperCore.use([Pagination, Autoplay, Mousewheel, Keyboard]);

const UpcomingGalleyImages = () => {
    const propertyData = useSelector(state => state?.property?.propertyData)
    const galleyimages = propertyData?.images || []
    const swiperRef = useRef(null);

    const handleClickImage = (index) => {
      if (swiperRef.current && swiperRef.current.swiper) {
        const swiperInstance = swiperRef.current.swiper;
        swiperInstance.slideToLoop(index, 0); // Slide to the clicked image
        swiperInstance.autoplay.stop(); // Stop autoplay temporarily
        setTimeout(() => {
          swiperInstance.autoplay.start(); // Restart autoplay after a short delay
        }, 500);
      }
    };
    return (
        <div className='GalleyImages-parent' id='Gallery'>
                    <div>
                        <div className='AssetsComponent-sub-parent'>
                            <h1>Gallery - </h1>
                        </div>
                        <div className="swiper-container">
                            <Swiper
                               ref={swiperRef}
                               centeredSlides={true}
                               loop={true}
                               slidesPerView={3}
                               speed={500}
                               spaceBetween={0}
                               autoplay={{
                                 delay: 2500,
                                 disableOnInteraction: false,
                               }}
                               pagination={{ clickable: true }}
                               modules={[Pagination, Autoplay, Mousewheel, Keyboard]}
                               breakpoints={{
                                 0: {
                                   slidesPerView: 1,
                                 },
                                 640: {
                                   slidesPerView: 1,
                                 },
                                 768: {
                                   slidesPerView: 2,
                                 },
                                 992: {
                                   slidesPerView: 2,
                                 },
                                 1080: {
                                   slidesPerView: 3,
                                 },
                                 1280: {
                                   slidesPerView: 3,
                                 },
                               }}
                                    >
                                <br /><br />
                                    {
                                        galleyimages.length > 0 && galleyimages.map((item, index) => (
                                            <SwiperSlide key={index}  onClick={() => handleClickImage(index)}>
                                    <div className='galleryimages-swiper-image'>
                                        <img src={item.img} alt={`Slide ${index + 1}`} />
                                    </div>
                                </SwiperSlide>
                                ))
                            }
                                {/* <SwiperSlide>
                                    <div className='galleryimages-swiper-image'>
                                        <img src="/ProjectImages.png" alt="Slide 2" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='galleryimages-swiper-image'>
                                        <img src="/galleryswiper.png" alt="Slide 2" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='galleryimages-swiper-image'>
                                        <img src="/grvityaranya.webp" alt="Slide 3" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='galleryimages-swiper-image'>
                                        <img src="/lakeestate.webp" alt="Slide 4" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='galleryimages-swiper-image'>
                                        <img src="/skyforest.webp" alt="Slide 5" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='galleryimages-swiper-image'>
                                        <img src="/ProjectImages.png" alt="Slide 6" />
                                    </div>
                                </SwiperSlide> */}
                            </Swiper>
                            {/* <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div> */}
                        </div>
                    </div>

        </div>
    )
}

export default UpcomingGalleyImages