import { Modal, Spin } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { LoadingOutlined } from "@ant-design/icons";

const ContactFormModal = ({
  isModalOpen,
  setIsModalOpen,
  handleOk,
  handleCancel,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  console.log("formData", formData);

  const [errors, setErrors] = useState({});
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
            handleCancel();
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
    <Modal
      footer={null}
      title="Let's Talk to Our Experts"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
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
    </Modal>
  );
};

export default ContactFormModal;
