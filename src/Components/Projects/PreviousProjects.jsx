import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import previousProjects from "../JSON/PreviousProjects.json"
import { Navigation } from 'swiper/modules';

const PreviousProjects = () => {
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
    

    useEffect(() => {
        // This ensures the component can be scrolled to when directly accessed via URL hash
        const hash = window.location.hash;
        if (hash === '#CompletedProjects') {
            const element = document.getElementById('CompletedProjects');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);


    const Previousprojectsdata = previousProjects;
    console.log("Previousprojectsdata",previousProjects);
    return (
        <>
            <div className="PreviousProjects-main-parent" id='CompletedProjects'>
                <div className='OnGoingProjects-main-parent'>
                    <div className='OnGoingProjects-sub-parent'>
                        <div className='OngoingProjects-title'>
                            <div className='Emptydiv'>
                            </div>
                            <h1>Previous Projects</h1>
                        </div>
                        <div className='OnGoingProjects-desc'>
                            <p>Global Edifice takes pride in a portfolio of completed projects that showcase our commitment to excellence, quality, and innovation. Each project reflects our dedication to creating exceptional living environments that blend luxury, functionality, and sustainability.</p>
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
                                {Previousprojectsdata?.length > 0 && Previousprojectsdata.map((item,index)=>(
                                    <SwiperSlide key={index}>

                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="OngoingProjects-MainContent-left">
                                                {console.log("itemitem",item)}
                                                <div className='OngoingProjects-image-div'>
                                                <h1>{index + 1 < 10 ? `0${index + 1}` : index + 1}</h1>
                                                    <div className='OngoingProjects-MainContent-image'>
                                                        <img src={item.img1} alt="" />
                                                    </div>
                                                    <div className='OngoingProjects-absolute-image'>
                                                        <img src={item.img2} alt="" />
                                                        {/* <Link to={`/property-details/${item.slug}`}><button>View Project</button></Link> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="OngoingProjects-MainContent-right">
                                                <h2>{item.title} </h2>
                                                <p>{item.location} </p>
                                            </div>
                                            <div className="specification">
                                                    <div className="row flex-row">
                                                        <div className="specs col-6 ps-4">
                                                            <img width={'30px'} height={'30px'} src={item.acreImg} alt="" />
                                                            <p className='text-decoration-underline'>Area</p>
                                                            <p className='specification-text'>{item.acre} {item.acretext}</p>
                                                        </div>
                                                        <div className="specs col-6 ps-4">
                                                            <img width={'30px'} height={'30px'} src={item.sqftImg} alt="" />
                                                            <p className='text-decoration-underline'>Open Space</p>
                                                            <p className='specification-text'>{item.sqft}</p>
                                                        </div>
                                                        <div className="specs col-6 ps-4">
                                                            <img width={'30px'} height={'30px'} src={item.projectTypeImg} alt="" />
                                                            <p className='text-decoration-underline'>Project Type</p>
                                                            <p className='specification-text'>{item.BHK}</p>
                                                        </div>
                                                        <div className="specs col-6 ps-4">
                                                            <img width={'30px'} height={'30px'} src={item.unitsImg} alt="" />
                                                            <p className='text-decoration-underline'>Units</p>
                                                            <p className='specification-text'>{item.units} Units</p>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                )) }
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
            </div>
        </>
    )
}

export default PreviousProjects