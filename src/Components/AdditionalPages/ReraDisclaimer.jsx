
import React, { useEffect } from "react";
import './pages.css'
import HomeNavbar from "../HomeNavbar";
import Footer from "../Footer";
import WhatsappAction from "../WhatsappAction";
const ReraDiclaimer = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    return (
        <>
            <div className="ReraDiclaimer-main-parent AdditionalPages">
                <HomeNavbar />
                <div className="Termsofuse-main-head">
                    <div className="Termsofuse-img-main">
                        <div className="Blogshead-line"><h5>Rera Diclaimer</h5></div>
                    </div>
                    <div className="Termsofuse-Finibus-Bonorum-line-main">
                        <div className="Termsofuse-Finibus-Bonorum-sub-lines">
                            <p className="Termsofuse-first-block-line">We always encourage our valuable customers to check the legitimacy of the real estate properties in Bangalore by going through the RERA (Real Estate Regulatory Authority) approvals and clearances certificates.</p>
                            <p className="mt-5">To carry forward the same practice of staying honest with all our customers, here we present our RERA Disclaimer.</p>
                            <p className="mt-5">This Website and all brochures are a guide only and do not constitute an offer or contract. Changes may be made during the development of a real estate project and standard fittings and specifications are subject to change without notice.</p>
                            <p className="mt-5">Standard fittings and finishes are subject to availability and vendor discretion. Fittings, finishes and fixtures shown in the images contained in this brochure are not standard and will not be provided as part of a dwelling unit. The information contained herein is believed to be correct but is not guaranteed.</p>
                            <p className="mt-5">By using or accessing the Website you agree with the Disclaimer without any qualification or limitation. Global Edifice reserves the right to terminate, revoke, modify, alter, add and delete any one or more of the terms and conditions of the website. Global Edifice shall be under no obligation to notify the visitor of the amendment to the terms and conditions and the visitor shall be bound by such amended terms and conditions.</p>
                            <p className="mt-5">The visuals and information contained herein marked as “artistic impression” are artistic impressions being indicative in nature and are for general information purposes only. The visuals contained marked as “generic image” and other visuals /image /photographs are general images and do not have any correlation with the project.</p>
                            <p className="mt-5">The imagery used on the Website may not represent actuals or may be indicative of style only. Photographs of interiors, surrounding views and location may not represent actuals or may have been digitally enhanced or altered. These photographs may not represent actuals or may be indicative only. Computer generated images, walkthroughs and render images are the artist’s impression and are an indicative of the actual designs.</p>
                            <p className="mt-5">No information given on this Website creates a warranty or expands the scope of any warranty that cannot be disclaimed under the applicable laws. The information on this website is presented as general information and no representation or warranty is expressly or impliedly given as to its accuracy. Any interested party should verify all the information including designs, plans, specifications, facilities, features, payment schedules, terms of sales etc. independently with Global Edifice prior to concluding any decision for buying in any of the project.</p>
                            <p className="mt-5">While enough care is taken by Global Edifice to ensure that information in the Website is up to date, accurate and correct, the readers/ users are requested to make an independent enquiry with Global Edifice before relying upon the same. Nothing on the website should be misconstrued as advertising, marketing, booking, selling or an offer for sale or invitation to purchase a unit in any project by Global Edifice. Global Edifice is not responsible for the consequences of any action taken by the viewer relying on such material/ information on this website without independently verifying with Global Edifice.</p>
                        </div>
                    </div>
                </div>
                <WhatsappAction/>
                <Footer />
            </div>
        </>

    );
};

export default ReraDiclaimer;
