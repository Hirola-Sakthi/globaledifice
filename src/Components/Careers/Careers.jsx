import React, { useState, useRef } from "react";
import HomeNavbar from "../HomeNavbar";
import "../FaqComponents/faq.css";
import Footer from "../Footer";
import { Helmet } from "react-helmet-async";
import Testimonials from "../Testimonials";
import OurStrengths from "../OurStrengths";
import CareerForm from "./CareerForm";
import WhatsappAction from "../WhatsappAction";

const Careers = () => {
  const [isFormOpen, setFormOpen] = useState(false);

  const handleOpenForm = () => setFormOpen(true);
  const handleCloseForm = () => setFormOpen(false);

  const jobCardsRef = useRef(null);

  const scrollToJobs = () => {
    if (jobCardsRef.current) {
      jobCardsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {/* <Helmet>
        <title>Global Edifice - Career</title>
        <meta
          name="description"
          content="Gravity Homes Leading Villa, Villaments And Apartment Developers In Bangalore Offers Your 3 5 And 4 BHK Villas And Independent Homes With Premium Class Amenities"
          data-rh="true"
        />
      </Helmet> */}
      <div className="career-parent pb-0">
        <div className="Investfaq-subparent">
          <HomeNavbar />

          <div className="ProjectsBanner-main-parent bg-white">
            <div className="ProjectsBanner-sub-parent d-flex flex-column align-items-center justify-content-center">
              <div className="ProjectsBanner-bg">
                <div className="ProjectsBanner-content">
                  <h1 className="display-4 fw-medium text-center">
                    Join Our Team
                  </h1>
                </div>
              </div>
              <div
                className="d-flex flex-column align-items-center justify-content-center text-center p-4 p-md-5"
                style={{
                  backgroundImage: `url('/ProjectsBackground.svg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "fit-content",
                }}
              >
                <h1 className="fs-1 fs-md-2 fs-lg-1 fw-medium text-dark mb-4">
                  Build a Rewarding Career with Innovation, Growth, and
                  Opportunities to Excel!
                </h1>
                <h3 className="fs-5 fs-md-5 fs-lg-4 text-secondary mb-4">
                  Explore career opportunities at Gravity Homes and join us in
                  creating innovative, sustainable luxury living spaces that
                  make a global impact.
                </h3>
                <button
                  onClick={scrollToJobs}
                  className="btn view-all-job-button text-white px-4 py-2 rounded-pill fw-medium"
                >
                  View All Jobs
                </button>
              </div>
            </div>
          </div>
        </div>

        <div ref={jobCardsRef} className="career-opportunity-parent p-3">
          <p className="text-white text-center fs-2 fs-md-1 fw-medium p-4">
            Career Opportunities for You!
          </p>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-3 pb-4">
            {[
              {
                title: "Sales Manager",
                location: "Bangalore",
                description:
                  "Lead sales efforts, drive revenue, and manage client relationships while aligning with sustainability goals.",
                buttonLabel: "Apply Now",
              },
              {
                title: "Project Manager",
                location: "Bangalore",
                description:
                  "Oversee project execution, ensuring timely and budget-compliant delivery with a focus on eco-conscious practices.",
                buttonLabel: "Apply Now",
              },
              {
                title: "Construction Site Supervisor",
                location: "Bangalore",
                description:
                  "Manage site operations, coordinate with subcontractors, and ensure safety and environmental compliance.",
                buttonLabel: "Apply Now",
              },
              {
                title: "Marketing and Communications Manager",
                location: "Bangalore",
                description:
                  "Create and execute marketing strategies, manage PR, and maintain brand messaging that emphasizes sustainability and luxury.",
                buttonLabel: "Apply Now",
              },
            ].map((job, index) => (
              <div key={index} className="col">
                <div className="card h-100 shadow">
                  <div className="card-body d-flex flex-column">
                    <h2 className="card-title fs-4 fw-bold text-dark mb-2">
                      {job.title}
                    </h2>
                    <p className="card-subtitle text-muted mb-2 fs-6 fw-medium">
                      {job.location}
                    </p>
                    <p className="card-text text-secondary mb-3 flex-grow-1">
                      {job.description}
                    </p>
                    <button
                      className="btn apply-now-job-button text-white fw-semibold mt-auto w-100"
                      onClick={handleOpenForm}
                    >
                      {job.buttonLabel}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {isFormOpen && <CareerForm onClose={handleCloseForm} />}
        </div>
        <div className="bg-white py-5">
          <div className="container text-center px-3">
            <p className="text-dark fs-2 fs-md-1 fw-medium">
              Stay Connected with Us!
            </p>
            <p className="text-secondary fs-5">
              Follow us on social media to get the latest updates on job
              openings, company news, and career tips.
            </p>
          </div>
        </div>
      </div>
      <WhatsappAction/>
      <Footer />
    </>
  );
};
export default Careers;
