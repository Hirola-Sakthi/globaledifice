import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeNavbar from "./HomeNavbar";
import { Modal } from "antd";
import ContactFormModal from "./Contactus/ContactFormModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import SwiperCore from "swiper/core";
import "swiper/css/effect-fade";

SwiperCore.use([Autoplay, Mousewheel, Keyboard]);

const HomeNewBanner = () => {
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
      <div className="HomeBanner-parent">
        <HomeNavbar />
        <div
          className="homebanner-video-section"
          style={{ marginBottom: "-6px" }}
        >
          <video
            className="banner-video"
            loop={true}
            autoPlay={true}
            muted={true}
            playsInline={true}
            webkit-playsinline="true"
            preload="auto"
            src="/media/Website Banner Video.mp4"
          ></video>
          {/* <div className="HomeBanner-absolutetitle">
            <h1 className="text-center">Global Edifice <br /> We Don't Just Build, We Redefine.</h1>
            <h2 className="mobile-title">
              Global Edifice <br /> We Don't Just Build, <br /> We Redefine.
            </h2>
          </div> */}
        </div>
      </div>
      <a href="#HomeAboutUs" className="go-down-btn"  id="HomeAboutUs">
        <img className="scroll-button" src="/scroll-bar-white.png" alt="" />
      </a>
      <ContactFormModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default HomeNewBanner;
