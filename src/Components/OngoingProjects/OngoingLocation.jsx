import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ContactFormModal from "../Contactus/ContactFormModal";

const OngoingLocation = () => {
  const propertyData = useSelector((state) => state?.property?.propertyData);
  console.log("propertyData--", propertyData);
  const location = propertyData?.map || [];
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
      <div className="Location-main-parent" id="Location">
        <div className="AssetsComponent-sub-parent">
          <h1>Location - </h1>
          <div className="Assetstab1-parent">
            <Link to="#" onClick={showModal}>
              <div class="TabsSection-right-sub1">
                <p>Need a Location Tour ?</p>
                <img src="/arrow-up-right.svg" alt="" />
              </div>
            </Link>
          </div>
          <ContactFormModal
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            setIsModalOpen={setIsModalOpen}
            handleCancel={handleCancel}
          />
        </div>

        <div className="Location-sub-parent">
          <div className="Location-map-parent">
            <iframe
              src={location}
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {propertyData?.amenities?.length > 0 && (
            <>
              <h2>Ease of Access & Prime Landmarks</h2>
              <div className="Location-below-section">
                <div className="row">
                  <div className="col-md-3">
                    <h3 className="ps-4 pb-2">{propertyData?.landmarkHeading1}</h3>
                    {propertyData?.Landmarks1?.map((item, index) => (
                      <div className="Location-below-section-sub">
                        <ul>
                          <li>{item.land} </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="col-md-3">
                    <h3 className="ps-4 pb-2">{propertyData?.landmarkHeading2}</h3>
                    {propertyData?.Landmarks2?.map((item, index) => (
                      <div className="Location-below-section-sub">
                        <ul>
                          <li>{item.land} </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="col-md-3">
                    <h3 className="ps-4 pb-2">{propertyData?.landmarkHeading3}</h3>
                    {propertyData?.Landmarks3?.map((item, index) => (
                      <div className="Location-below-section-sub">
                        <ul>
                          <li>{item.land} </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="col-md-3">
                    <h3 className="ps-4 pb-2">{propertyData?.landmarkHeading4}</h3>
                    {propertyData?.Landmarks4?.map((item, index) => (
                      <div className="Location-below-section-sub">
                        <ul>
                          <li>{item.land} </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default OngoingLocation;
