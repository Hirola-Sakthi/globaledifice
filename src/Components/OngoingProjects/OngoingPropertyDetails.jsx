import React, { useEffect, useState } from "react";
import "../PropertyDetails/property.css";
import HomeNavbar from "../HomeNavbar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import OngoingProjects from "../../Components/JSON/OngoingProjects.json";
import { useDispatch } from "react-redux";
import { SlugPropertyDetails } from "../../reducers/propertyReducer";
import OngoingPropertyBanner from "./OngoingPropertyBanner";
import OngoingMarqueeSlider from "./OngoingMarqueeSlider";
import OngoingTabsSection from "./OngoingTabsSection";
import OngoingHighlights from "./OngoingHighlights";
import OngoingLayouts from "./OngoingLayouts";
import OngoingGalleyImages from "./OngoingGalleyImages";
import OngoingAmenities from "./OngoingAmenities";
import OngoingLocation from "./OngoingLocation";
import FaqSection from "../PropertyDetails/FaqSection";
import OngoingAssetsComponent from "./OngoingAssetsComponent";
import WhatsappAction from "../WhatsappAction";
import { Helmet } from "react-helmet-async";
const OngoingPropertyDetails = () => {
  const slugDetails = useParams().slug;
  console.log("slugDetails", slugDetails);
  const dispatch = useDispatch();

  const [PropertyDetails, setPropertyDetails] = useState(null);

  console.log("slugDetailsfghj", PropertyDetails);

  const OngoingProjectsData = OngoingProjects;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (slugDetails) {
      const data = OngoingProjectsData?.filter(
        (item) => item.slug === slugDetails
      )[0];
      setPropertyDetails(data);
      dispatch(SlugPropertyDetails(data));
    }
  }, [slugDetails]);

  return (
    <>
      <Helmet>
        <title>
          {PropertyDetails?.metaTitle}
        </title>
        <meta
          name="description"
          content={PropertyDetails?.metaDescription}
          data-rh="true"
        />
      </Helmet>
      <div className="PropertyDetails-main-parent">
        <HomeNavbar />
        <OngoingPropertyBanner />
        <OngoingMarqueeSlider />
        <OngoingTabsSection />
        <OngoingAssetsComponent slugDetails={slugDetails} />
        <OngoingLayouts />
        <OngoingGalleyImages />
        <OngoingAmenities />
        <OngoingLocation />
        <FaqSection />
        <WhatsappAction />
        <Footer />
      </div>
    </>
  );
};

export default OngoingPropertyDetails;
