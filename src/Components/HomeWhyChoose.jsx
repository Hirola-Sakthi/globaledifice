import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactFormModal from "./Contactus/ContactFormModal";

const HomeWhyChoose = () => {
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
      <div className="homewhychoose-parent">
        <div className="container">
          <div className="homewhychoose-subparent">
            <div className="row justify-content-between">
              <div className="col-md-6 col-lg-5">
                <div className="HomeWhychoose-title">
                  <div className="HomeWhychoose-title-sub">
                    <div className="HomeAboutus-image">
                      <img src="/gold-icon.png" alt="" />
                    </div>
                    <h2>Why Choose Us</h2>
                  </div>
                  <div className="HomeAboutus-title-text">
                    <h1 className="homewhychoose-heading-text">
                      We don't just Build, We Redefine
                    </h1>
                    <p>
                      As one of the top builders in Bangalore, Global Edifice is
                      transforming the city's landscape with premium mid-rise
                      apartments in Bangalore that blend architectural
                      brilliance with modern luxury. From new apartments for
                      sale in Bangalore to meticulously designed 3 BHK flats in
                      Bangalore, our projects reflect precision, quality, and a
                      deep passion for excellence. At Global Edifice, Every
                      Brick Has a Tale to Tell—a tale of innovation, elegance,
                      and trust.
                    </p>
                  </div>
                  <Link to="#" onClick={showModal}>
                    <button className="whychoose-calltoaction">
                      Schedule A Site Visit
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-md-6">
                <div className="whychoose-points-parent">
                  <div className="whychoose-points-subparent row flex-row justify-content-center align-items-center">
                    <div className="left-points col-md-6">
                      <div className="row left-row">
                        <div className="point-card first-cards row">
                          <div className="point-icon">
                            <img
                              width={"50"}
                              height={"50"}
                              src="/rupee.png"
                              alt=""
                            />
                          </div>
                          <div className="point-heading">
                            <h4>Competitive Pricing</h4>
                            <p>
                              Premium properties at optimal value, ensuring your
                              investment delivers lasting returns
                            </p>
                          </div>
                        </div>
                        <div className="point-card second-cards row">
                          <div className="point-icon">
                            <img
                              width={"50"}
                              height={"50"}
                              src="/arc.png"
                              alt=""
                            />
                          </div>
                          <div className="point-heading">
                            <h4>Architectural Excellence</h4>
                            <p>
                              Award-winning designs that blend aesthetics with
                              functionality for modern urban living
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right-points col-md-6">
                      <div className="row right-row">
                        <div className="point-card first-cards row">
                          <div className="point-icon">
                            <img
                              width={"50"}
                              height={"50"}
                              src="/map-navigation.png"
                              alt=""
                            />
                          </div>
                          <div className="point-heading">
                            <h4>Prime Locations</h4>
                            <p>
                              Strategic properties in Bangalore's most
                              sought-after neighborhoods with excellent
                              connectivity
                            </p>
                          </div>
                        </div>
                        <div className="point-card second-cards row">
                          <div className="point-icon">
                            <img
                              width={"50"}
                              height={"50"}
                              src="/achievement.png"
                              alt=""
                            />
                          </div>
                          <div className="point-heading">
                            <h4>Quality Assurance</h4>
                            <p>
                              Rigorous standards and premium materials ensuring
                              durability and minimal maintenance
                            </p>
                          </div>
                        </div>
                      </div>
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

export default HomeWhyChoose;
