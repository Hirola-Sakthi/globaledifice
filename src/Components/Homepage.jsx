import React, { useEffect } from "react";
import HomeNavbar from "./HomeNavbar";
import "./Home.css";
import HomeBanner from "./HomeBanner";
import HomeAboutus from "./HomeAboutus";
import HomeProjects from "./HomeProjects";
import Blogs from "./Blogs";
import OurStrengths from "./OurStrengths";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import HomeWhyChoose from "./HomeWhyChoose";
import WhyUs from "./Projects/WhyUs";
import HomeNewBanner from "./HomeNewBanner";
import HomePageIntro from "./HomePageIntro";
import WhatsappAction from "./WhatsappAction";
import HomeAboutUsNew from "./HomeAboutUsNew";
import BuildingText from "./BuildingText";
import { Helmet } from "react-helmet-async";
const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          Global Edifice - Builders in Bangalore | Real Estate Company
        </title>
        <meta
          name="description"
          content="Discover leading builders in Bangalore with Global Edifice! With 10 years of expertise, we offer premium projects in prime locations Explore our projects today!"
          data-rh="true"
        />
      </Helmet>
      <div className="Homepage-main-parent">
        <HomeNewBanner />
        <HomeAboutUsNew />
        <HomePageIntro />
        <WhyUs />
        <HomeProjects />
        <BuildingText />
        <Blogs />
        <Testimonials />
        <WhatsappAction />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
