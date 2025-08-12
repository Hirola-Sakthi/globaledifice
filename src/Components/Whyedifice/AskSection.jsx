import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import ContactFormModal from "../Contactus/ContactFormModal";
const AskSection = () => {
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
      <div className="AskSection-parent">
        <div
          className="AskSection-sub-parent"
          style={{ backgroundImage: `url('/city-sunset.jpg') ` }}
        >
          <div className="container">
            <div className="AskSection-content">
              <h2>Your Success Is Our Priority</h2>
              <p>
                Excellence in service isn't just our promise—it's our practice.
                Our dedicated customer care specialists stand ready to address
                your inquiries, concerns, and aspirations with the attention and
                expertise they deserve. We believe that exceptional real estate
                experiences extend far beyond the initial purchase, which is why
                our commitment to you remains unwavering throughout your entire
                journey with us. Your questions matter to us, and your
                satisfaction drives our mission. We don't just respond to
                inquiries; we anticipate your needs, exceed your expectations,
                and ensure that every interaction reinforces why you chose
                Global Edifice Infra as your trusted real estate partner.
              </p>
              <Link to="#" onClick={showModal}>
                <button>Ready to connect?</button>
              </Link>
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

export default AskSection;
