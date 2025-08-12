import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const RecentProjects = () => {
    const swiperRef = useRef(null);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    const sliderImages = [
        {
            image: "/project-images/orlean-images/orlean-main2.jpg",
            title: "Global Edifice Orlean",
            location: "Chandapura, Bangalore",
            link: "/ongoing-project-details/orlean-in-chandapura-bangalore"
        },
        {
            image: "/project-images/legacy-images/legacy1.webp",
            title: "Global Edifice Legacy",
            location: "Chandapura, Bangalore",
            link: "/ongoing-project-details/legacy-in-chandapura-bangalore"
        }
    ]
    return (
        <div className='RecentProjects-parent'>
            <div className='RecentProjects-sub-parent position-relative'>
                <div className='RecentProjects-title d-flex gap-3 align-items-center'>
                    <h2>Ongoing Projects</h2>
                    <div className="EmptyLine" style={{ width: "200px" }}></div>
                </div>
                <Swiper
                    ref={swiperRef}
                    pagination={{
                        type: 'fraction',
                    }}
                    loop={true}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        sliderImages.length > 0 && sliderImages.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='RecentProjects-image'>
                                    <Link to={item.link}>
                                        <img src={item.image} alt="" />
                                    </Link>

                                    <div className='SwiperAbsoluteText'>
                                        <h2>{item.title} </h2>
                                        <div className='location-parent'>
                                            <img src="/map-pin.svg" alt="" />
                                            <span>{item.location} </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className='Swiper-pagination-buttons-parent'>
                    <div className="swiper-button-prev" onClick={goPrev}>
                        <img src="/Left Arrow.png" alt="Previous" />
                    </div>
                    <div className="swiper-button-next" onClick={goNext}>
                        <img src="/Right Arrow.png" alt="Next" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentProjects;
