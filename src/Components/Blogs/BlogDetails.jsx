import React, { useEffect, useState } from "react";
import "./Blogdetails.css";
import HomeNavbar from "../HomeNavbar";
import Footer from "../Footer";
import Blogsdata from "../JSON/Blogsdata.json";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SlugPropertyDetails } from "../../reducers/propertyReducer";
import WhatsappAction from "../WhatsappAction";
import { Helmet } from "react-helmet-async";

const BlogDetails = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slugDetails = useParams().slug;

  const dispatch = useDispatch();

  const [PropertyDetails, setPropertyDetails] = useState(null);
  console.log("PropertyDetails", PropertyDetails);
  console.log("Blogsdatafghj", Blogsdata);

  const BlogsdataJSON = Blogsdata;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (slugDetails) {
      const data = BlogsdataJSON?.filter(
        (item) => item.slug === slugDetails
      )[0];
      console.log("data", data);
      setPropertyDetails(data);
      dispatch(SlugPropertyDetails(data));
    }
  }, [slugDetails]);

  const propertyData = useSelector((state) => state?.property?.propertyData);
  console.log("propertyData", PropertyDetails);

  return (
    <>
      <Helmet>
        <title>{PropertyDetails?.metaTitle}</title>
        <meta
          name="description"
          content={PropertyDetails?.metaDescription}
          data-rh="true"
        />
      </Helmet>
      <div className="BlogDetails-main-parent ">
        <HomeNavbar />
        <div className="BlogDEtailsInner-parent position-relative">
          <div className="Blogdetails-main-head ">
            <div className="Blogdetails-img-main">
              <img src={PropertyDetails?.mainimage} alt="" />
            </div>
            <div className="BlogDetails-Finibus-Bonorum-line-main">
              <div className="BlogDetails-Finibus-Bonorum-line-head-sub">
                <h2>{PropertyDetails?.title}</h2>
                <p>Written by Global Edifice</p>
                <hr />
              </div>
              <div className="BlogDetails-Finibus-Bonorum-sub-lines">
                <div
                  className="BlogDetails-Finibus-Bonorum-sub-lines"
                  dangerouslySetInnerHTML={{
                    __html: PropertyDetails?.htmlContent,
                  }}
                />
              </div>
            </div>

            <div className="BlogDetails-scrollTop" onClick={scrollTop}>
              <img src="/scrolltop.svg" alt="" />
            </div>
          </div>
        </div>
        <WhatsappAction />
        <Footer />
      </div>
    </>
  );
};

export default BlogDetails;
