import React, { useRef, useState } from "react";
import "./swiper.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Modal } from "antd";
import ContactFormModal from "./Contactus/ContactFormModal";
const HomeProjects = () => {
  const categoryContainerRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

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

  const carouselImages = [
    {
      image: "/project-images/orlean-images/gallery2.6.webp",
      project: "Global Edifice Orlean",
      link: "/ongoing-project-details/legacy-in-chandapura-bangalore",
    },
    {
      image: "/project-images/legacy-images/legacy1.webp",
      project: "Global Edifice Legacy",
      link: "/ongoing-project-details/orlean-in-chandapura-bangalore",
    },
    {
      image:
        "/project-images/completed-project-images/celesta-compPorjects-img2.jpg",
      project: "Global Edifice Celesta",
      link: "",
    },
    {
      image:
        "/project-images/completed-project-images/cresent-compPorjects-img.webp",
      project: "Global Edifice Crecent",
      link: "",
    },
    {
      image:
        "/project-images/completed-project-images/green-appleHikes-compPorjects-img.webp",
      project: "Global Green Apple Hikes",
      link: "",
    },
    {
      image:
        "/project-images/completed-project-images/greenAppleVillas1-compPorjects-img.webp",
      project: "Green Apple Villas Phase 1",
      link: "",
    },
    {
      image:
        "/project-images/completed-project-images/greenAppleVillas2-compPorjects-img.webp",
      project: "Green Apple Villas Phase 2",
      link: "",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div
        className="HomeProjects-parent"
        style={{
          background: "#002150",
          height: "fit-content",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid">
          <div className="HomeAboutus-sub-parent">
            <div>
              <div className="SwiperSlide-projects-parent">
                <div className="d-flex justify-content-center align-items-center pb-5 circlesvg-image">
                  <div className="HomeAboutus-title-sub align-items-start">
                    {/* <div className="HomeAboutus-image">
                      <img src="/gold-icon.png" alt="" />
                    </div> */}
                    <h2 className="text-white text-align-center mt-3">The Projects </h2>
                  </div>
                </div>
              </div>
              <div className="SwiperSection">
                <Swiper
                  onSwiper={setSwiperInstance}
                  modules={[Navigation]}
                  loop={true}
                  className="mySwiper"
                >
                  {carouselImages.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="Projects-swiper-image">
                        <Link to={item.link}>
                          <img src={item.image} alt="" />
                        </Link>
                      </div>
                      <div className="edificeSwiper-title">
                        <h2>{item.project} </h2>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="Testimonial-PaginationButtons d-flex justify-content-center align-items-center gap-5 mt-4 w-100">
                  <div onClick={handleLeftArrow}>
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>
                  <div onClick={handleRightArrow}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                  <Link to="/projects" className="Exploreall-button">
                    <button>Explore All Projects...</button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="OurQuality-mainparent">
        <div
          className="OurQuality-mainparent-sub"
          style={{
            background: "#002150",
            height: "fit-content",
            backgroundSize: "cover",
          }}
        >
          <div className="container-fluid">
            <div className="HomeAboutus-sub-parent">
              <div className="OurQuality-parent">
                <div className="row justify-content-between position-relative">
                  <div className="col-md-5">
                    <div className="OurQuality-left">
                      <div className="d-flex justify-content-between circlesvg-image">
                        <div className="HomeAboutus-title-sub pb-3">
                          {/* <div className="HomeAboutus-image">
                            <img src="/gold-icon.png" alt="" />
                          </div> */}
                          <h2 className="text-white">Our Quality</h2>
                        </div>
                      </div>
                      <h1 className="text-white">
                        Thoughtfully Engineered, Exceptionally Lived.
                      </h1>
                      <p>
                       Global Edifice defines luxury through intelligent design and superior execution Every apartment, from our elegant mid-rise residences to our commanding high-rise developments, is born from a process of thoughtful engineering, where meticulous planning meets innovative construction techniques. We obsess over every detail, ensuring superior craftsmanship and a seamless blend of aesthetics and functionality. The result is an environment crafted not just for living, but for being exceptionally lived – a space where comfort, convenience, and enduring quality converge to inspire your everyday and truly elevate your lifestyle in Bengaluru.
                      </p>
                      <Link to="#" onClick={showModal}>
                        <button>Get Started</button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="OurQuality-right d-flex">
                      <div className="OurQuality-right-image">
                        <img
                          src="/project-images/orlean-images/extra-gallery-orlean-1.webp"
                          alt=""
                        />
                        {/* <div
                          className="OurQualituArrow"
                          role="button"
                          onClick={showModal}
                        >
                          <img src="/bannerarrow.png" alt="" />
                        </div> */}
                      </div>
                      {/* <div className="blur-image">
                        <img src="/blurimage.png" alt="" />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactFormModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default HomeProjects;
