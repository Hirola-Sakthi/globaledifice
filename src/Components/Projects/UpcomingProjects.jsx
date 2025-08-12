import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import UpcommingProjects from "../JSON/UpcommingProjects.json";

import { Navigation } from "swiper/modules";
const UpcomingProjects = () => {
  const location = useLocation();
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);

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
    if (location.hash === "#UpcomingProjects") {
      setTimeout(() => {
        if (sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const UpcommingProjectsdata1 = UpcommingProjects;
  console.log("UpcommingProjects", UpcommingProjectsdata1);
  return (
    <>
      <div
        className="UpcomingProjects-main-parent"
        id="UpcomingProjects"
        ref={sectionRef}
      >
        <div className="OnGoingProjects-main-parent">
          <div className="OnGoingProjects-sub-parent">
            <div className="OngoingProjects-title">
              <div className="Emptydiv"></div>
              <h1>Up Coming Projects</h1>
            </div>
            <div className="OnGoingProjects-desc">
              <p>
                Global Edifice is excited to introduce several upcoming projects
                that exemplify our dedication to luxury, innovation, and
                sustainability. Each project is designed to offer unparalleled
                living experiences while contributing positively to the
                environment and community.
              </p>
            </div>
            <div className="OngoingProjects-MainContent">
              <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
              >
                {/* Slide 1 */}
                {UpcommingProjectsdata1.length > 0 &&
                  UpcommingProjectsdata1.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="row">
                        <div className="col-md-7">
                          <div className="OngoingProjects-MainContent-left">
                            <div className="OngoingProjects-image-div">
                              <h1>
                                {index + 1 < 10 ? `0${index + 1}` : index + 1}
                              </h1>
                              <div className="OngoingProjects-MainContent-image">
                                <img src={item.img1} alt="" />
                              </div>
                              {/* <div className='OngoingProjects-absolute-image'>
                                                        <img src={item.img2} alt="" />
                                                        <Link to={`/upcoming-project-details/${item.slug}`}><button>View Project</button></Link>
                                                    </div> */}
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="OngoingProjects-MainContent-right">
                            <h3>{item.location} </h3>
                            {/* <p>{item.location} </p> */}
                          </div>
                          <div className="specification">
                            <div className="row flex-row">
                              <div className="specs col-6 ps-5">
                                <img
                                  width={"30px"}
                                  height={"30px"}
                                  src={item.acreImg}
                                  alt=""
                                />
                                <p className="text-decoration-underline">
                                  Area
                                </p>
                                <p className="specification-text">
                                  {item.acre} {item.acretext}
                                </p>
                              </div>
                              <div className="specs col-6 ps-5">
                                <img
                                  width={"30px"}
                                  height={"30px"}
                                  src={item.sqftImg}
                                  alt=""
                                />
                                <p className="text-decoration-underline">
                                  SQFT
                                </p>
                                <p className="specification-text">
                                  {item.sqft}
                                </p>
                              </div>
                              <div className="specs col-6 ps-5">
                                <img
                                  width={"30px"}
                                  height={"30px"}
                                  src={item.projectTypeImg}
                                  alt=""
                                />
                                <p className="text-decoration-underline">
                                  Project Type
                                </p>
                                <p className="specification-text">{item.BHK}</p>
                              </div>
                              <div className="specs col-6 ps-5">
                                <img
                                  width={"30px"}
                                  height={"30px"}
                                  src={item.unitsImg}
                                  alt=""
                                />
                                <p className="text-decoration-underline">
                                  Phase
                                </p>
                                <p className="specification-text">
                                  {item.phase}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
              <div className="Previous-Next-buttons">
                <div
                  className="Previous-Next-buttons-sub sub-div-2"
                  onClick={handleNext}
                >
                  <div className="emptyline"></div>
                  <p>Next</p>
                </div>
                <div className="Previous-Next-buttons-sub" onClick={handlePrev}>
                  <p>Prev</p>
                  <div className="emptyline"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingProjects;
