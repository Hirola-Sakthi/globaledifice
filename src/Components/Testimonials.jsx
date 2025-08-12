import React, { useRef, useState, useEffect } from 'react';
import TestimonialSwiper2 from './TestimonialSwiper2';
import { A11y, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Testimonials = () => {
    const categoryContainerRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        if (categoryContainerRef.current && categoryContainerRef.current.children.length > 0) {
            setCardWidth(categoryContainerRef.current.children[0].offsetWidth);
        }
    }, []);

    const handleLeftArrow = () => {
        if (swiperInstance) {
            swiperInstance.slidePrev();
        }
    };

    const handleRightArrow = () => {
        if (swiperInstance) {
            swiperInstance.slideNext();
        }
    };

    const blogsData = [
        {
            text: "We wanted a home that reflects elegance and comfort, and Legacy offers just that. The seamless blend of modern design and convenience makes every day special.",
            by: "Surendra Pal"
        },
        {
            text: "Investing in Orlean was the best decision we made. The project offers great value, and the construction quality assures us of a long-lasting home.",
            by: "Lakshmi Rajan"
        }
    ];

    return (
        <>
            <div className='Testimonials-main-parent'>
                <div className="container">
                    <div className='Testimonials-sub-parent'>
                        <div className='HomeAboutus-title-sub circlesvg-image'>
                            {/* <div className='HomeAboutus-image'>
                                <img src="/gold-icon.png" alt="" />
                            </div> */}
                            <h2>Testimonials</h2>
                        </div>
                        <div className="Testimonials-content">
                            <div className="row">
                                <div className="col-md-5 col-lg-6">
                                    <div className='Testimonials-Main-content-parent'>
                                        <div className='Testimonials-content-title'>
                                            <h2>Look What Our Customers Say!</h2>
                                        </div>
                                        <div className='Testimonials-main-content'>
                                            <Swiper
                                                modules={[A11y, Navigation,Autoplay]}
                                                spaceBetween={20}
                                                slidesPerView={1}
                                                loop={true}
                                                autoplay={{
                                                    delay: 2500,
                                                    disableOnInteraction: false,
                                                  }}
                                                navigation={false}
                                                onSwiper={(swiper) => setSwiperInstance(swiper)}
                                            >
                                                {
                                                    blogsData.map((blog, index) => (
                                                        <SwiperSlide key={index}>
                                                            <p>{blog.text}</p>
                                                        </SwiperSlide>
                                                    ))
                                                }
                                            </Swiper>
                                            <div className='Testimonial-PaginationButtons d-flex justify-content-center align-items-center gap-5 mt-4'>
                                                <div
                                                    onClick={handleLeftArrow}
                                                    className={activeIndex === 0 ? 'disabled' : ''}
                                                >
                                                    <i className="fa-solid fa-arrow-left"></i>
                                                </div>
                                                <div
                                                    onClick={handleRightArrow}
                                                    className={activeIndex === blogsData.length - 1 ? 'disabled' : ''}
                                                >
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-7 col-lg-5">
                                    <TestimonialSwiper2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
