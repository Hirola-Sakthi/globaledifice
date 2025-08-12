import React from 'react';
import { Pagination, A11y,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const TestimonialSwiper2 = () => {
    const blogsData = [{
        text:"From the moment we visited Orlean, we knew this was home. The attention to detail and thoughtful planning make it a standout choice for anyone looking for a premium lifestyle.",
        userImage:"/client.png",
        user:"Arun & Priya Narayan"
    },
    {
        text:"My very first real estate investment, my first home was at Global Edifice Green Apple Hikes. I believe that I have made the right choice as they had helped me understand about the location and it's excellence.",
        userImage:"/client.png",
        user:"Rajendra Swami"
    },
    {
        text:"Legacy truly lives up to its name! The sophisticated architecture, spacious layouts, and top-tier amenities make it a dream home for us.",
        userImage:"/client.png",
        user:"Haridas Nair"
    }

    ];

    return (
        <>
            <div className='TestimonialSwiper2-mainparent' style={{ height: "400px" }}>
                <div className='TestimonialSwiper2-subparent'>
                    <Swiper
                        modules={[Pagination, A11y,Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay = {{
                            duration:2500,
                            disableOnInteraction:false
                        }}
                        direction={'vertical'}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        <br /><br />
                        {blogsData.map((blog, index) => (
                            <SwiperSlide key={index}>
                                <div className='TestimonialSwiper2-card'>
                                    <div className="card">
                                        <div className='TestimonialAbsolute'>
                                            <img src="/testimonial.svg" alt="" />
                                        </div>
                                        <div className='TestimonialSwiper2-badge'>
                                            <img src="/testimonialbadge.png" alt="" />
                                        </div>
                                        <p>{blog.text} </p>
                                        <hr />
                                        <div className='Testimonial-card-footer'>
                                            <div className='d-flex gap-2 align-items-center'>
                                                <div className='testimonial-client-image'>
                                                    <img src={blog.userImage} alt="" />
                                                </div>
                                                <p className='m-0'>{blog.user} </p>
                                            </div>
                                            <div className='Testimonial-Ratings'>
                                                <i class="fa-solid fa-star" style={{ color: "#FFC700" }} ></i>
                                                <i class="fa-solid fa-star" style={{ color: "#FFC700" }}></i>
                                                <i class="fa-solid fa-star" style={{ color: "#FFC700" }}></i>
                                                <i class="fa-solid fa-star" style={{ color: "#FFC700" }}></i>
                                                <i class="fa-solid fa-star" style={{ color: "#FFC700" }}></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>

        </>
    );
};

export default TestimonialSwiper2;
