import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { message, Modal } from "antd";
import toast from "react-hot-toast";

const OngoingAssetsComponent = ({ slugDetails }) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [documentType, setDocumentType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  const showModal = (modal) => {
    if (modal === "modal1") setIsModalOpen1(true);
    if (modal === "modal2") setIsModalOpen2(true);
    if (modal === "modal3") setIsModalOpen3(true);
    setDocumentType(modal);
  };

  const handleOk = () => {
    setIsModalOpen1(false);
    setIsModalOpen2(false);
    setIsModalOpen3(false);
  };

  const handleCancel = () => {
    setIsModalOpen1(false);
    setIsModalOpen2(false);
    setIsModalOpen3(false);
  };

  const renderModal = (modalId, title) => (
    <Modal
      footer={null}
      title={title}
      open={
        modalId === "modal1"
          ? isModalOpen1
          : modalId === "modal2"
          ? isModalOpen2
          : isModalOpen3
      }
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
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {errors.name && (
                <p className="error text-danger">{errors.name}</p>
              )}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {errors.email && (
                <p className="error text-danger">{errors.email}</p>
              )}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
              {errors.subject && (
                <p className="error text-danger">{errors.subject}</p>
              )}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="phonenumber"
                placeholder="Phone"
                value={formData.phonenumber}
                onChange={handleInputChange}
                required
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
                required
              />
            </div>
            <div className="Sendnowbutton">
              <button type="submit" name="submit">
                Send Now ➜
              </button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );

  useEffect(() => {
    const currentUrl = window.location.href;
    const urlInput = document.getElementById("currentUrlInput");
    if (urlInput) {
      urlInput.value = currentUrl;
    }
  }, [isModalOpen1, isModalOpen2, isModalOpen3]);

  return (
    <>
      <div className="AssetsComponent-main-parent" id="Asset">
        <div className="AssetsComponent-sub-parent">
          <h1>Assets - </h1>
          <ul className="Assets-tabs-parent" id="Pricings">
            <li
              className={` ${activeTab === "tab1" ? "active" : ""}`}
              onClick={() => handleTabClick("tab1")}
              style={{ cursor: "pointer" }}
            >
              Broucher
            </li>
            <li
              className={` ${activeTab === "tab2" ? "active" : ""}`}
              onClick={() => handleTabClick("tab2")}
              style={{ cursor: "pointer" }}
            >
              Master Plan
            </li>
            <li
              className={` ${activeTab === "tab3" ? "active" : ""}`}
              onClick={() => handleTabClick("tab3")}
              style={{ cursor: "pointer" }}
            >
              Floor Plan
            </li>
          </ul>
          <div className="tab-content Assets-tabs-content-parent">
            {activeTab === "tab1" && (
              <div className="Assetstab1-parent">
                {renderModal(
                  "modal1",
                  "Fill and Submit the form to Download Brochure"
                )}
                <Link to="#" onClick={() => showModal("modal1")}>
                  <div className="TabsSection-right-sub1-pdf">
                    <img src="/broucher.jpg" loading="lazy" alt="" />
                  </div>
                </Link>
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="Assetstab1-parent">
                {renderModal(
                  "modal2",
                  "Fill and Submit the form to Download Master Plan"
                )}
                <Link to="#" onClick={() => showModal("modal2")}>
                  <div className="TabsSection-right-sub1-pdf">
                    <img src="/master-plan.png" loading="lazy" alt="" />
                  </div>
                </Link>
              </div>
            )}
            {activeTab === "tab3" && (
              <div className="Assetstab1-parent">
                {renderModal(
                  "modal3",
                  "Fill and Submit the form to Download Floor Plan"
                )}
                <Link to="#" onClick={() => showModal("modal3")}>
                  <div className="TabsSection-right-sub1-pdf">
                    <img src="/floor.png" loading="lazy" alt="" />
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OngoingAssetsComponent;
