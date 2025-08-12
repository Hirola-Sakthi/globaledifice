import React, { useEffect } from "react";
import WhyedificeLeadership from "./WhyedificeLeadership";
import "./whyedifice.css";
import AskSection from "./AskSection";
import WhyedificeBanner from "./WhyedificeBanner";
import AboutUs from "./AboutUs";
import Footer from "../Footer";
import HomeNavbar from "../HomeNavbar";
import RecentProjects from "./RecentProjects";
import WhatsappAction from "../WhatsappAction";
import MilestoneTimeline from "./MilestoneTimeline";
import { Helmet } from "react-helmet-async";
const Whyedifice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          About - Global Edifice | Leading Builders in Bangalore
        </title>
        <meta
          name="description"
          content="Global Edifice is a leading builders in Bangalore Learn about our company, services, and commitment to building excellence in premium villas and apartments"
          data-rh="true"
        />
      </Helmet>
      <div className="WhyEdifice-main-page">
        <HomeNavbar />
        <WhyedificeBanner />
        <AboutUs />
        {/* <RecentProjects /> */}
        {/* <WhyedificeLeadership /> */}
        <MilestoneTimeline />
        <AskSection />
        <WhatsappAction />
        <Footer />
      </div>
    </>
  );
};

export default Whyedifice;
