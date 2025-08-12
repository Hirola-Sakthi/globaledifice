import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import "./App.css";
import "./fonts.css";
import Whyedifice from "./Components/Whyedifice/Whyedifice";
import Projects from "./Components/Projects/Projects";
import Contactus from "./Components/Contactus/Contactus";
import BlogDetails from "./Components/Blogs/BlogDetails";
import PropertyDetails from "./Components/PropertyDetails/PropertyDetails";
import Blogs from "./Components/Blogs/Blogs";
import FAQ from "./Components/FaqComponents/FAQ";
import OngoingPropertyDetails from "./Components/OngoingProjects/OngoingPropertyDetails";
import UpcomingPropertyDetails from "./Components/UpcommingProjects/UpcomingPropertyDetails";
import ReraDiclaimer from "./Components/AdditionalPages/ReraDisclaimer";
import Disclaimer from "./Components/AdditionalPages/Disclaimer";
import TermsandConditions from "./Components/AdditionalPages/TermsandConditions";
import Privacypolicy from "./Components/AdditionalPages/PrivacyPolicy";
import Careers from "./Components/Careers/Careers";
import ScrollToSection from "./Components/ScrollToSection";
import Circleofdreams from "./Components/Circleofdreams";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const helmetContext = {};
  return (
    <>
      <HelmetProvider context={helmetContext}>
        <BrowserRouter>
          <ScrollToSection />
          <Toaster />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about-us" element={<Whyedifice />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact-us" element={<Contactus />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route
              path="/property-details/:slug"
              element={<PropertyDetails />}
            />
            <Route
              path="/ongoing-project-details/:slug"
              element={<OngoingPropertyDetails />}
            />
            <Route
              path="/upcoming-project-details/:slug"
              element={<UpcomingPropertyDetails />}
            />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/rera-disclaimer" element={<ReraDiclaimer />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route
              path="/termsandconditions"
              element={<TermsandConditions />}
            />
            <Route path="/privacy-policy" element={<Privacypolicy />} />
            <Route path="/careers" element={<Careers />} />
            <Route
              path="/ongoing-project-details/codename-circle-of-dreams"
              element={<Circleofdreams />}
            />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </>
  );
}

export default App;
