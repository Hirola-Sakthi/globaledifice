import React, { useEffect } from "react";
import ContactBanner from "./ContactBanner";
import "../Projects/Projects.css";
import HomeNavbar from "../HomeNavbar";
import Footer from "../Footer";
import "./contact.css";
import ContactForm from "./ContactForm";
import WhatsappAction from "../WhatsappAction";
import { Helmet } from "react-helmet-async";
const Contactus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Get in Touch with Global Edifice for Building a Better Future</title>
        <meta
          name="description"
          content="Contact Global Edifice, the best builders in Bangalore Get immediate follow up for all your real estate needs and discover premium properties perfect for you"
          data-rh="true"
        />
      </Helmet>
      <div
        className="Contactus-main-parent"
        style={{
          backgroundImage: `url('/contactbackground.png')`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <HomeNavbar />
        <ContactBanner />
        <ContactForm />
      </div>
      <WhatsappAction />
      <Footer />
    </>
  );
};

export default Contactus;
