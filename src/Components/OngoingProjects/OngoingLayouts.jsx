import React, { useState } from "react";
import { Modal, Tabs } from "antd";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const { TabPane } = Tabs;

const OngoingLayouts = () => {
  const propertyData = useSelector((state) => state?.property?.propertyData);
  console.log("propertyData", propertyData);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [isMainImage, setIsMainImage] = useState(false);
  const [activeTab, setActiveTab] = useState("1bhk");

  const handleImageClick = (imageSrc, isMain) => {
    setCurrentImage(imageSrc);
    setIsMainImage(isMain);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentImage("");
    setIsMainImage(false);
  };

  const layoutImages = propertyData?.mainImg || [];

  // Filter images for 1BHK and 2BHK
  // Assuming you have a way to identify which images belong to which category
  // You might need to adjust this based on your actual data structure
  const oneBHKImages = propertyData?.oneBhkImages || [];
  const twoBHKImages = propertyData?.twoBhkImages || [];

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const tabStyle = {
    color: "#002150",
    fontWeight: "500"
  };

  return (
    <>
      {layoutImages.length > 0 && (
        <>
          <div className="Layouts-main-parent" id="Layouts">
            <div className="AssetsComponent-sub-parent">
              <h1>Layouts - </h1>
              <div className="Layouts-sub-parent">
                <h2>Master plan</h2>
                <div className="LayoutMain-image">
                  <img
                    src={layoutImages[0].img}
                    alt="Master Plan"
                    onClick={() => handleImageClick(layoutImages[0]?.img, true)}
                  />
                </div>
              </div>
              {layoutImages[1].img === "" ? (
                <></>
              ) : (
                <div className="Layouts-sub-parent">
                  <h2>Floor plan</h2>
                  <div className="LayoutMain-image">
                    <img
                      src={layoutImages[1].img}
                      alt="Master Plan"
                      onClick={() =>
                        handleImageClick(layoutImages[1]?.img, true)
                      }
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="FloorPlans-main-parent">
              <h2>View the Detailed Layout of Your Space</h2>
              <Tabs
                defaultActiveKey={activeTab}
                onChange={handleTabChange}
                className="floor-plan-tabs justify-content-center"
                tabPosition="top"
                centered
              >
                <TabPane tab={<span style={tabStyle}>1BHK Floor Plans</span>} key="1bhk">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    pagination={{ clickable: true }}
                    loop={oneBHKImages.length > 1}
                    autoplay={{
                      duration: 4500,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                    }}
                    className="floor-plan-swiper"
                  >
                    {oneBHKImages.length > 0 ? (
                      oneBHKImages.map((image, index) => (
                        <SwiperSlide key={index}>
                          <div className="FloorPlans-image">
                            <img
                              src={image?.img}
                              alt={`1BHK Floor Plan ${index + 1}`}
                              onClick={() =>
                                handleImageClick(image?.img, false)
                              }
                            />
                          </div>
                        </SwiperSlide>
                      ))
                    ) : (
                      <SwiperSlide>
                        <div className="FloorPlans-empty">
                          <p>No 1BHK floor plans available</p>
                        </div>
                      </SwiperSlide>
                    )}
                  </Swiper>
                </TabPane>
                <TabPane tab={<span style={tabStyle}>2BHK Floor Plans</span>} key="2bhk">
                  <Swiper
                    spaceBetween={10}
                    slidesPerView={2}
                    pagination={{ clickable: true }}
                    loop={twoBHKImages.length > 1}
                    autoplay={{
                      duration: 4500,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      480: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                    }}
                    className="floor-plan-swiper"
                  >
                    {twoBHKImages.length > 0 ? (
                      twoBHKImages.map((image, index) => (
                        <SwiperSlide key={index}>
                          <div className="FloorPlans-image">
                            <img
                              src={image?.img}
                              alt={`2BHK Floor Plan ${index + 1}`}
                              onClick={() =>
                                handleImageClick(image?.img, false)
                              }
                            />
                          </div>
                        </SwiperSlide>
                      ))
                    ) : (
                      <SwiperSlide>
                        <div className="FloorPlans-empty">
                          <p>No 2BHK floor plans available</p>
                        </div>
                      </SwiperSlide>
                    )}
                  </Swiper>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </>
      )}
      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
        width={isMainImage ? "80%" : "80%"}
        bodyStyle={{ textAlign: "center" }}
      >
        <div className="layout-modal-dispaly0n-modal">
          <img className="Modal-inner-image" src={currentImage} alt="Current" />
        </div>
      </Modal>
    </>
  );
};

export default OngoingLayouts;
