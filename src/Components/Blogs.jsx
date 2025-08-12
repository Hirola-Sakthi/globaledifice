import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const blogsData = [
        {
            title: "Why to Invest in Bommasandra, Explore Global Edifice Green Apple Hikes",
            description: "Bommasandra represents a rapidly expanding town in South Bangalore, which now stands as one of the top real estate investment hubs.",
            image: "/blog-images/Why-to-Invest-bommasandra-explore-blog-details.avif",
            date: "13",
            day: "Tue"
        },
        {
            title: "South Bangalore: The Emerging Real Estate Hotspot with Exceptional Growth Potential",
            description: "The area of South Bangalore serves as an emblem that showcases heritage plus green spaces along with a balanced way of life.",
            image: "/blog-images/south-bangalore-upcoming-infrastructural-blog.avif",
            date: "13",
            day: "Tue"
        },
        {
            title: "Electronic City: Bangalore's Tech Hub Transformed into a Premier Residential Destination",
            description: "Electronic City is where everything started, the very first step into transforming Bangalore into India's Silicon valley.",
            image: "/blog-images/electronicCity-blogDetails-img.avif",
            date: "13",
            day: "Tue"
        },
    ];

    return (
        <div className='Blogs-main-parent'>
            <div className="container-xxl">
                <div className='Blogs-sub-parent'>
                    <div className='Blogs-sub-parent-title text-center'>
                        <p>WHAT’S TRENDING</p>
                        <h1>Latest Blogs & Posts</h1>
                    </div>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            }
                        }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                    >
                        {blogsData.map((blog, index) => (
                            <SwiperSlide key={index}>
                                <div className='Blog1'>
                                    <div className='Blog1-sub'>
                                        <div className='Blog1-image'>
                                            <img src={blog.image} alt="" />
                                            <div className='Blogs-image-badge'>
                                                <h4>{blog.date} </h4>
                                                <p>{blog.day}</p>
                                            </div>
                                        </div>
                                        <h2>{blog.title.length > 30 ? blog.title.slice(0,30) + "..." : blog.title}</h2>
                                        <p>{blog.description}</p>
                                        <Link to="/blogs">
                                            <div className='Arrow-Image'>
                                                <img src="/Arrow 1.png" alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
