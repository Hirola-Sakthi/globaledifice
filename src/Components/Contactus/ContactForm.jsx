import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!/^\d{10}$/.test(formData.phone))
      errors.phone = "Phone number is invalid";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await fetch(
          "https://www.globaledifice.com/forms/edifice_enquiries.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        const data = await response.json();

        if (response.ok) {
          if (data.status === "success") {
            toast.success("Form Submitted Successfully!");
            // window.location.href =
            //   "https://www.globaledifice.com/forms/thankyou.html";
          } else {
            console.error("Error:", data.message);
            toast.error("Submission Failed, Please Try again After sometimes");
            setModalMessage(
              data.message || "An error occurred. Please try again."
            );
          }
        } else {
          console.error("Error:", data.message);
          setModalMessage(
            data.message || "An error occurred. Please try again."
          );
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setModalMessage("An error occurred. Please try again later.");
      }
    } else {
      setErrors(formErrors);
      setModalMessage("Please correct the errors in the form.");
      toast.error("please fill required fields");
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className="ContactForm-main-parent">
        <div className="container">
          <div className="ContactForm-sub-parent">
            <div className="row">
              <div className="col-md-4">
                <div className="ContactForm-sub-left">
                  <div className="ContactForm-icon-parent">
                    <div className="ContactForm-icon">
                      <img src="/mailicon.svg" alt="" />
                    </div>
                    <p>
                      <a href="mailto:sales@globaledifice.in">
                        sales@globaledifice.in
                      </a>
                    </p>
                  </div>
                  <div className="ContactForm-icon-parent">
                    <div className="ContactForm-icon">
                      <img src="/phoneicon.svg" alt="" />
                    </div>
                    <p>
                      <a href="tel:+91 80 4376 0152">+91 80 4376 0152</a>
                    </p>
                  </div>
                  <div className="ContactForm-icon-parent">
                    <div className="ContactForm-icon">
                      <img src="/globeicon.svg" alt="" />
                    </div>
                    <p>
                      <a href="www.yourdomain.com">
                        966, 3rd Floor, 27th Main, 8th Cross Rd, 1st Sector, HSR
                        Layout, Bangalore, Karnataka 560102
                      </a>
                    </p>
                  </div>
                  <div className="contactform-SocialLinks">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/Globaledifce/"
                    >
                      <img src="/facebook.svg" alt="" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/@Globaledifice/"
                    >
                      <img src="/youtube.png" alt="" />
                    </a>
                    <a target="_blank" href="https://twitter.com/globaledifice">
                      <img src="/twitter1.png" alt="" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/global-edifice-top-construction-company-in-bangalore/"
                    >
                      <img src="/linkedin-contact.svg" alt="" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/globaledifice/"
                    >
                      <img src="/instagram.svg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <form onSubmit={handleSubmit}>
                  <div className="ContactForm-sub-right">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="name"
                          placeholder="Name *"
                          value={formData.name}
                          onChange={handleInputChange}
                        />
                        {errors.name && (
                          <p className="error text-danger">{errors.name}</p>
                        )}
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="email"
                          placeholder="Email *"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        {errors.email && (
                          <p className="error text-danger">{errors.email}</p>
                        )}
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="subject"
                          placeholder="City"
                          value={formData.subject}
                          onChange={handleInputChange}
                        />
                        {errors.subject && (
                          <p className="error text-danger">{errors.subject}</p>
                        )}
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone *"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                        {errors.phone && (
                          <p className="error text-danger">{errors.phone}</p>
                        )}
                      </div>
                      <div className="col-md-12">
                        <textarea
                          name="message"
                          placeholder="Hello I am interested in..."
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="Sendnowbutton">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className={isLoading ? "loading" : ""}
                        >
                          {isLoading ? (
                            <Spin indicator={<LoadingOutlined spin />} />
                          ) : (
                            "Send Now ➜"
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="Edifice-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.2056405667498!2d77.65060356957248!3d12.919123199211985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c3f6f1a6f9%3A0x6c97cf46d590241b!2sGlobal%20Edifice%20Infra!5e0!3m2!1sen!2sin!4v1747037517369!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
