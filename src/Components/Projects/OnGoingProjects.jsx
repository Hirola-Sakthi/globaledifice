import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import OngoingProjects from "../JSON/OngoingProjects.json"
import { Navigation } from 'swiper/modules';

const OnGoingProjects = () => {
    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const OngoingProjectsdata = OngoingProjects;
    console.log("Previousprojectsdatafghj",OngoingProjectsdata);
    return (
        <>
            <div className='OnGoingProjects-main-parent' id='OngoingProjects'>
                <div className='OnGoingProjects-sub-parent'>
                    <div className='OngoingProjects-title'>
                        <div className='Emptydiv'></div>
                        <h1>On Going Projects</h1>
                    </div>
                    <div className='OnGoingProjects-desc'>
                        <p>At Global Edifice, we are dedicated to creating sustainable and luxurious living spaces. Our ongoing projects reflect our commitment to excellence and innovation in the real estate industry, showcasing our passion for crafting environments where comfort meets cutting-edge design.</p>
                    </div>
                    <div className='OngoingProjects-MainContent'>
                        <Swiper
                            ref={swiperRef}
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                        >
                            {/* Slide 1 */}
                            {
                                OngoingProjectsdata.length > 0 && OngoingProjectsdata.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <div className="OngoingProjects-MainContent-left">
                                                    <div className='OngoingProjects-image-div'>
                                                    <h1>{index + 1 < 10 ? `0${index + 1}` : index + 1}</h1>
                                                        <div className='OngoingProjects-MainContent-image'>
                                                            <img src={item.img1} alt="" />
                                                        </div>
                                                        <div className='OngoingProjects-absolute-image'>
                                                            <img src={item.img2} alt="" />
                                                            <Link to={`/ongoing-project-details/${item.slug}`}><button>View Project</button></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="OngoingProjects-MainContent-right">
                                                    <h2>{item.title} </h2>
                                                    <p>{item.location} </p>
                                                    <p className='fw-bolder fs-3'>{item.price}* </p>
                                                </div>
                                                <div className="specification">
                                                    <div className="row flex-row">
                                                        <div className="specs col-6 ps-5">
                                                            <img width={'30px'} height={'30px'} src={item.acreImg} alt="" />
                                                            <p className='text-decoration-underline'>Development Size</p>
                                                            <p className='specification-text'>{item.acre} {item.acretext}</p>
                                                        </div>
                                                        <div className="specs col-6 ps-5">
                                                            <img width={'30px'} height={'30px'} src={item.sqftImg} alt="" />
                                                            <p className='text-decoration-underline'>Flat Size</p>
                                                            <p className='specification-text'>{item.sqft} SQFT</p>
                                                        </div>
                                                        <div className="specs col-6 ps-5">
                                                            <img width={'30px'} height={'30px'} src={item.projectTypeImg} alt="" />
                                                            <p className='text-decoration-underline'>Project Type</p>
                                                            <p className='specification-text'>{item.BHK}</p>
                                                        </div>
                                                        <div className="specs col-6 ps-5">
                                                            <img width={'30px'} height={'30px'} src={item.unitsImg} alt="" />
                                                            <p className='text-decoration-underline'>Project Status</p>
                                                            <p className='specification-text'>{item.units}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                        <div className='Previous-Next-buttons'>
                            <div className='Previous-Next-buttons-sub sub-div-2' onClick={handleNext}>
                                <div className='emptyline'></div>
                                <p>Next</p>
                            </div>
                            <div className='Previous-Next-buttons-sub' onClick={handlePrev}>
                                <p>Prev</p>
                                <div className='emptyline'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OnGoingProjects;
