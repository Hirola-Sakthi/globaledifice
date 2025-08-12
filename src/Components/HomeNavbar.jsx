import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ContactFormModal from "./Contactus/ContactFormModal";

const HomeNavbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [openPC, setOpenPC] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const propertyData = useSelector((state) => state?.property?.propertyData);

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

  console.log("propertyData", propertyData);
  const dropdownRefPC = useRef(null);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpenPC = () => {
    setOpenPC(!openPC);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutsidePC = (event) => {
    if (
      dropdownRefPC.current &&
      !dropdownRefPC.current.contains(event.target)
    ) {
      setOpenPC(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsidePC);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsidePC);
    };
  }, []);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/careers" ||
      location.pathname === "/contact-us" ||
      location.pathname === "/projects" ||
      location.pathname === "/termsandconditions" ||
      location.pathname === "/privacy-policy" ||
      location.pathname === "/rera-disclaimer"
    ) {
      setIsHomePage(true);
    }
  });

  // const isHomePage =
  //   location.pathname === "/" ||
  //   location.pathname === "/careers";

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".HomeNavbar-sub-parent");
      const whyEdificenavbar = document.querySelector(
        ".WhyEdifice-main-page .Edifice-logo img"
      );
      const faqnavbar = document.querySelector(
        ".Investfaq-subparent .Edifice-logo img"
      );
      const careerNavbar = document.querySelector(
        ".career-parent .Edifice-logo img"
      );
      const propertyDetaailsnavbar = document.querySelector(
        ".PropertyDetails-main-parent .Edifice-logo img"
      );
      const BlogDetaailsnavbar = document.querySelector(
        ".BlogDetails-main-parent .Edifice-logo img"
      );

      if (window.scrollY > 10) {
        navbar.style.backgroundColor = "#002150";
        if (whyEdificenavbar) {
          whyEdificenavbar.style.filter = " brightness(1)";
          setIsHomePage(true);
        }
        if (faqnavbar) {
          faqnavbar.style.filter = " brightness(1)";
          setIsHomePage(true);
        }
        if (careerNavbar) {
          careerNavbar.style.filter = " brightness(1)";
        }
        if (propertyDetaailsnavbar) {
          propertyDetaailsnavbar.style.filter = " brightness(1)";
          setIsHomePage(true);
        }
        if (BlogDetaailsnavbar) {
          BlogDetaailsnavbar.style.filter = " brightness(1)";
          setIsHomePage(true);
        }
      } else {
        navbar.style.backgroundColor = "transparent";
        if (whyEdificenavbar) {
          whyEdificenavbar.style.filter = " brightness(0)";
          setIsHomePage(false);
        }
        if (careerNavbar) {
          careerNavbar.style.filter = " brightness(1)";
        }
        if (faqnavbar) {
          faqnavbar.style.filter = " brightness(0)";
          setIsHomePage(false);
        }
        if (propertyDetaailsnavbar) {
          propertyDetaailsnavbar.style.filter = " brightness(0)";
          setIsHomePage(false);
        }
        if (BlogDetaailsnavbar) {
          BlogDetaailsnavbar.style.filter = " brightness(0)";
          setIsHomePage(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //   const handleScroll = useCallback(
  //   throttle(() => {
  //     setIsScrolled(window.scrollY > 10);
  //   }, 16), // ~60fps
  //   []
  // );

  return (
    <>
      <style>
        {`
                .HomeNavbar-mainparent li.nav-item.active {
                    border: 1px solid #000;
                    border-radius: 20px;
                    padding: 0px 15px;
                }
                @media (max-width: 991px) {
                    .HomeNavbar-mainparent .navbar-collapse {
                        display: none !important;
                    }
                    .offcanvas {
                        display: block !important;
                    }
                }
                @media (min-width: 992px) {
                    .offcanvas {
                        display: none !important;
                    }
                }
                `}
      </style>
      <div className="HomeNavbar-mainparent">
        <div className="HomeNavbar-sub-parent">
          <div className="container-xxl">
            <nav className="navbar navbar-expand-lg">
              <div className="Edifice-logo">
                <Link to="/">
                  <img src="/LogoWhiteNew.png" alt="" />
                </Link>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="row p-0 m-0 w-100 justify-content-end align-items-center">
                  <div className="col-md-8">
                    <ul className="navbar-nav mr-auto">
                      <li
                        className={`nav-item ${
                          location.pathname === "/" ? "active" : ""
                        }`}
                      >
                        <Link className="nav-link" to="/">
                          Home
                        </Link>
                      </li>
                      <li
                        className={`nav-item ${
                          location.pathname === "/about-us" ? "active" : ""
                        }`}
                      >
                        <Link className="nav-link" to="/about-us">
                          About Us
                        </Link>
                      </li>
                      <li
                        className={`nav-item ${
                          location.pathname === "/projects" ? "active" : ""
                        }`}
                      >
                        <Link className="nav-link" to="/projects">
                          Projects
                        </Link>
                      </li>
                      <li
                        className={`nav-item ${
                          location.pathname === "/blogs" ||
                          location.pathname === "/faqs" ||
                          location.pathname === "/careers"
                            ? "active"
                            : ""
                        }`}
                        ref={dropdownRefPC}
                      >
                        <Link
                          onClick={handleOpenPC}
                          className="nav-link dropdown-toggle"
                          id="navbarDropdown"
                          role="button"
                          aria-haspopup="true"
                          aria-expanded={open ? "true" : "false"}
                        >
                          Resource
                        </Link>
                        {openPC && (
                          <div
                            className="dropdown-menu show"
                            aria-labelledby="navbarDropdown"
                          >
                            <div
                              className="dropdown-item"
                              onClick={() => navigate("/blogs")}
                            >
                              Blogs
                            </div>
                            <div
                              className="dropdown-item"
                              onClick={() => navigate("/faqs")}
                            >
                              Faq's
                            </div>
                            <div
                              className="dropdown-item"
                              onClick={() => navigate("/careers")}
                            >
                              Careers
                            </div>
                          </div>
                        )}
                      </li>
                      <li
                        className={`nav-item ${
                          location.pathname === "/contact-us" ? "active" : ""
                        }`}
                      >
                        <Link className="nav-link" to="/contact-us">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <div className="form-inline my-2 my-lg-0">
                      {isHomePage ? (
                        <Link to="#" onClick={showModal}>
                          <button className="btn my-2 my-sm-0" type="submit">
                            <img
                              width={25}
                              height={25}
                              src="/icons8-schedule-100-white.png"
                              alt=""
                            />
                            <span className="ps-2">Enquire Now</span>
                          </button>
                        </Link>
                      ) : (
                        <a href="#">
                          <div className="contact-number-button">
                            <button
                              className="btn my-2 my-sm-0 d-flex gap-2 align-items-center"
                              type="submit"
                              onClick={showModal}
                            >
                              <img
                                width={25}
                                height={25}
                                src="/icons8-schedule-100.png"
                                alt=""
                              />
                              <span>Enquire Now</span>
                            </button>
                          </div>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    <div className="Edifice-logo">
                      <Link to="/">
                        <img src="/LogoBlueNew.png" alt="" />
                      </Link>
                    </div>
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav mr-auto">
                    <li
                      className={`nav-item ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                    >
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li
                      className={`nav-item ${
                        location.pathname === "/about-us" ? "active" : ""
                      }`}
                    >
                      <Link className="nav-link" to="/about-us">
                        About Us
                      </Link>
                    </li>
                    <li
                      className={`nav-item ${
                        location.pathname === "/projects" ? "active" : ""
                      }`}
                    >
                      <Link className="nav-link" to="/projects">
                        Projects
                      </Link>
                    </li>
                    <li
                      className={`nav-item ${activeItem === 3 ? "active" : ""}`}
                      ref={dropdownRef}
                    >
                      <a
                        onClick={handleOpen}
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : "false"}
                      >
                        Resource
                      </a>
                      {open && (
                        <div
                          className="dropdown-menu show"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="/blogs">
                            Blogs
                          </a>
                          <a className="dropdown-item" href="/faqs">
                            Faq's
                          </a>
                          <a className="dropdown-item" href="/careers">
                            Careers
                          </a>
                        </div>
                      )}
                    </li>
                    <li
                      className={`nav-item ${
                        location.pathname === "/contact-us" ? "active" : ""
                      }`}
                    >
                      <Link className="nav-link" to="/contact-us">
                        Contact
                      </Link>
                    </li>
                    <li
                      className={`nav-item  ${
                        location.pathname === "/contact-us" ? "active" : ""
                      }`}
                    >
                      <Link className="nav-link" to="/rera-disclaimer">
                        Rera Disclaimer
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 navbar-header-button">
                  <div className="form-inline my-2 my-lg-0">
                    {isHomePage ? (
                      <Link to="#" onClick={showModal}>
                        <button className="btn my-2 my-sm-0" type="submit">
                          <img
                            width={25}
                            height={25}
                            src="/icons8-schedule-100-white.png"
                            alt=""
                          />
                          <span className="ps-2">Enquire Now</span>
                        </button>
                      </Link>
                    ) : (
                      <a href="#">
                        <div className="contact-number-button">
                          <button
                            className="btn my-2 my-sm-0 d-flex gap-2 align-items-center"
                            type="submit"
                            onClick={showModal}
                          >
                            <img
                              width={25}
                              height={25}
                              src="/icons8-schedule-100.png"
                              alt=""
                            />
                            <span>Schedule Site Visit</span>
                          </button>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </nav>
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

export default HomeNavbar;
