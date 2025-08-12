import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './pages.css'
import HomeNavbar from "../HomeNavbar";
import Footer from "../Footer";
import WhatsappAction from "../WhatsappAction";
const TermsandConditions = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
  return (
    <>
    <div className="TermsandConditions-main-parent AdditionalPages">
        <HomeNavbar/>
    <div className="Termsofuse-main-head">
      <div className="Termsofuse-img-main">
        <div className="Blogshead-line">
          <h5>Terms of Use</h5>
        </div>
      </div>
      <div className="Termsofuse-Finibus-Bonorum-line-main">
        <div className="Termsofuse-Finibus-Bonorum-line-head-sub">
          <h2>
            WELCOME TO GLOBAL EDIFICE - PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING THIS SITE.
          </h2>
        </div>
        <div className="Termsofuse-Finibus-Bonorum-sub-lines">
          <div className="blogste">
            {" "}
            <h2>About Us</h2>
            <p>
              <Link to="/">www.globaledifice.com</Link> is a site operated by Global Edifice and its group companies (that is, its affiliates,
              subsidiaries, ultimate holding company and its subsidiaries)
              ("we", "our", "us", or “Global Edifice”).
            </p>
          </div>
          <div className="blogste">
            <h3>Terms of Use</h3>
            <p>
              These terms of use (together with the documents referred to in
              them) set out the terms on which you may make use of our website{" "}
              <span>
                <Link to="/">www.globaledifice.com </Link>
              </span>{" "}
              and any other websites operated by us ("our sites"), whether as a
              guest or a registered user. Use of our sites includes accessing,
              browsing or registering to use our sites.
            </p>
          </div>
          <div className="blogste">
            <h3>Changes to Terms of Use</h3>
            <p>
              By proceeding to view our sites or any part of it, you acknowledge
              that you have read, understood and accepted these terms which
              shall constitute the entire binding agreement between you and
              Global Edifice. These terms may be varied by Global Edifice from
              time to time and the revised terms will be deemed to apply at the
              relevant time in respect of your registration and/or use of our
              sites.
            </p>
            <p className="mt-4">
              Please read these terms carefully before you start using our
              sites, as these will apply to your use of all “our sites”. If you
              do not agree to these terms, you must not use our sites.
            </p>
            <p className="mt-4">
              Please check this page from time to time to take notice of any
              changes we made that are binding on you.
            </p>
          </div>
          <div className="blogste">
            <h3>Accuracy of Information</h3>
            <p>
              We may update our sites from time to time, and may change the
              content at any time. Although we make reasonable efforts to update
              the information on our sites, please note that any of the content
              may be out of date at any given time, and we are under no
              obligation to update it.
            </p>
            <p className="mt-4">
              We do not guarantee that our sites, or their content, will be free
              from errors or omissions. Global Edifice excludes all liability for
              any errors or omissions in the content to the fullest extent
              permitted by law.{" "}
            </p>
            <p className="mt-4">
              The information contained on our sites is provided for general
              guidance and for illustrative purposes only. It is not intended to
              amount to advice on which you should rely. Reasonable care has
              been taken in providing this information, Global Edifice and its
              related companies and their representatives, consultants and
              agents and, where applicable, the sellers or lessors of a property
              whose agents we may be, accept no responsibility for, and, to the
              fullest extent permitted by law, exclude any liability for, any
              loss or damage whatsoever arising out of or related to the
              accuracy or completeness of any information contained on our sites
              or for any action taken in reliance on such information by any
              person whether purchaser, potential purchaser, estate agent,
              advertiser, introducer or otherwise. We do not make any
              representation or give any warranty, guarantee, condition,
              undertaking or term either expressed or implied as to the
              condition, quality, state of readiness or fitness for purpose of
              any property or any other information on our sites. No person
              employed or engaged by or on behalf of us has any authority to
              make or give any representation or warranty whatever in relation
              to any property. our sites do not constitute, nor constitute part
              of, an offer, contract, warranty or guarantee.{" "}
            </p>
            <p className="mt-4">
              You should take appropriate steps to verify any information
              contained on our sites, by inspecting the property and any other
              relevant documentation, and where applicable seek proper legal,
              tax and, if appropriate, independent financial advice, from a
              qualified professional adviser before taking, or refraining from,
              any action on the basis of the content on our sites. Nothing on
              our sites shall be regarded or taken as legal or financial advice.
            </p>
            <p className="mb-2 ">
              Notwithstanding the generality of the above, please note that:
            </p>
            <p className="mb-2 ">
              (i) all descriptions, dimensions, references to condition and
              necessary permission for use and occupation, and other details are
              given in good faith and are believed to be correct, but no person,
              whether purchaser, potential purchaser, estate agent, advertiser,
              introducer or otherwise, should rely on them as statements or
              representations of fact, but must satisfy themselves by inspection
              or otherwise as to the correctness of each of them.
            </p>
            <p className="mb-2 ">
              (ii) commentary, descriptions, figures, calculations, example
              financial projections (including, where applicable, examples of
              possible rental income and yields), plans, images and
              representations are illustrative only.
            </p>
            <p className="mb-2 ">
              (iii) images and plans may include artist impressions and
              computer-generated images which are not to scale.
            </p>
            <p className="mb-2">
              (iv) changes to the property may be made during the further
              planning or development stages of any development or otherwise,
              and dimensions, fittings, finishes, ongoing costs and
              specifications and representations and any other aspect are
              subject to change without notice.
            </p>
            <p className="mb-2">
              (v) measurements provided are taken at the widest points of rooms,
              except on angled walls where the measurement is generally taken at
              the centre of the room.
            </p>
            <p className="mb-2">
              (vi) apartment numbers are for sales purposes only and postal
              addresses may differ and
            </p>
            <p className="mb-2">
              (vii) all journey times stated are approximate.
            </p>
          </div>
          <div className="blogste">
            <h3>Accessing our Websites</h3>
            <p>
              Our sites are made available free of charge. If you are provided
              with a user identification code, password or otherwise as part of
              our security procedures, you must treat such information as
              confidential. You must not disclose it to any third party.
            </p>
            <p className="mt-4">
              We have the right to disable any user identification code or
              password, whether chosen by you or allocated by us, at any time,
              if in our reasonable opinion you have failed to comply with any of
              the provisions of these terms.
            </p>
            <p className="mt-4">
              We do not guarantee that our sites, or any content on them, will
              always be available or be uninterrupted. Access to our sites is
              permitted on a temporary basis. We may suspend, withdraw,
              discontinue or change all or any part of our site without notice.
              We will not be liable to you if for any reason any of our sites
              are unavailable at any time or for any period. You are responsible
              for making all arrangements necessary for you to have access to
              our sites.
            </p>
            <p className="mt-4">
              You are also responsible for ensuring that all persons who access
              our sites through your internet connection are aware of these
              terms and other applicable terms and conditions and that they
              comply with them.
            </p>
          </div>
          <div className="blogste">
            <h3>Intellectual Property Rights</h3>
            <p>
              We are the owner or the licensee of all intellectual property
              rights in our sites, and in the material published on them. You
              acknowledge and accept that all of the copyright, database rights
              and any other intellectual property rights which subsist in the
              design, layout, processes, functions, data and content of our
              sites are the property of Global Edifice or our licensors,
              information providers or contributors and we reserve all our
              rights in the same. No part of our sites, their content or any of
              their underlying software and databases may be copied or
              reproduced, shared with third parties, reverse engineered, reverse
              assembled, or used to create any derivative work (whether in
              physical or electronic form) without our prior written consent.
            </p>
            <p className="mt-4">
              You may print off one copy and may download extracts of any pages
              from our sites for your personal use and you may draw the
              attention of others within your organisation to content posted on
              our sites.
              <br />
              You must not modify the paper or digital copies of any materials
              you have printed off or downloaded in any way, and you must not
              use any illustrations, photographs, video or audio sequences or
              any graphics separately from any accompanying text.{" "}
            </p>
            <p className="mt-4">
              Our status (and that of any identified contributors) as the
              authors of content on our sites must always be acknowledged. You
              are not permitted to publish the contents of our sites including
              but not limited to publication on any other website or computer
              environment. You must not use any part of the content on our sites
              for commercial purposes without obtaining a licence to do so from
              us or our licensors.{" "}
            </p>
            <p className="mt-4">
              If you print off, copy or download any part of our sites in breach
              of these terms, your right to use our sites will cease immediately
              and you must, at our option, return or destroy any copies of the
              materials you have made.
            </p>
          </div>
          <div className="blogste">
            <h3>Limitation of Liability</h3>
            <p>
              To the extent permitted by law, we exclude all conditions,
              warranties, representations or other terms which may apply to our
              sites or any content on them, whether express or implied.
            </p>
            <p className="mt-4">
              We will not be liable to any user for any loss or damage, whether
              in contract, tort (including negligence), breach of statutory
              duty, or otherwise, even if foreseeable, arising under or in
              connection with: use of, or inability to use, our sites; or use of
              or reliance on any content displayed on our sites.
            </p>
            <p className="mt-4">
              If you are a business user, please note that in particular, we
              will not be liable for: loss of profits, sales, business, or
              revenue; business interruption; loss of anticipated savings; loss
              of business opportunity, goodwill or reputation; or any indirect
              or consequential loss or damage.
            </p>
            <p className="mt-4">
              If you are a consumer user, please note that we only provide our
              sites for domestic and private use. You agree not to use our sites
              for any commercial or business purposes, and we have no liability
              to you for any loss of profit, loss of business, business
              interruption, or loss of business opportunity.{" "}
            </p>
            <p className="mt-4">
              We will not be liable for any loss or damage caused by a virus,
              distributed denial-of-service attack, or other technologically
              harmful material that may infect your computer equipment, computer
              programs, data or other proprietary material due to your use of
              our sites or to your downloading of any content on it, or on any
              website linked to it.
            </p>
          </div>
          <div className="blogste">
            <h3>Viruses</h3>
            <p>
              We do not guarantee that our sites will be secure or free from
              bugs or viruses.
            </p>
            <p className="mt-4">
              You are responsible for configuring your information technology,
              computer programmes and platform in order to access our sites. You
              should use your own virus protection software.
            </p>
            <p className="mt-4">
              You must not misuse our sites by knowingly introducing viruses,
              trojans, worms, logic bombs or other material which is malicious
              or technologically harmful. You must not attempt to gain
              unauthorised access to our sites, the server on which our sites
              are stored or any server, computer or database connected to our
              sites. You must not attack our sites via a denial-of-service
              attack or a distributed denial-of service attack. By breaching
              this provision, you would commit a criminal offence under the
              Information Technology Act, 2000. We will report any such breach
              to the relevant law enforcement authorities and we will cooperate
              with those authorities by disclosing your identity to them. In the
              event of such a breach, your right to use our sites will cease
              immediately.
            </p>
          </div>
          <div className="blogste">
            <h3>Links</h3>
            <p>
              Where our sites contain links to other sites and resources
              provided by third parties, these links are provided for your
              information only.
            </p>
            <p className="mt-4">
              We have no control over the contents of those sites or resources.
              We assume no responsibility for the content of websites linked on
              our sites. Such links should not be interpreted as endorsement by
              us of those linked websites. We will not be liable for any loss or
              damage that may arise from your use of them.
            </p>
            <p>
              You may link to our home page, provided you do so in a way that is
              fair and legal and does not damage our reputation or take
              advantage of it.
            </p>
            <p>
              You must not establish a link in such a way as to suggest any form
              of association, approval or endorsement on our part where none
              exists. You must not establish a link to our site in any website
              that is not owned by you.
            </p>
            <p className="mt-4">
              Our site must not be framed on any other site, nor may you create
              a link to any part of our site other than the home page.
              <br /> We reserve the right to withdraw linking permission without
              notice. If you wish to make any use of content on our sites other
              than that set out above, please contact{" "}
              <span>
                <a href="mailto:info@globaledifice.com">info@globaledifice.com</a>
              </span>
            </p>
          </div>
          <div className="blogste">
            <h3>Other Applicable Terms</h3>
            <p>
              Our Privacy Policy which sets out the terms on which we process
              any personal data we collect from you or that you provide to us.
            </p>
            <p className="mt-4">
              Our Disclaimer which sets out the terms on which we reserve the
              right to make any changes in any way, at any time and for any
              reason, without prior notice, to the contents and information on
              this site, including materials, equipment, specifications, prices
              and/or availability.{" "}
            </p>
            <p className="mt-4">
              Our RERA Disclaimer on which we encourage our valuable customers
              to check the legitimacy of the real estate properties in Bangalore
              by going through the RERA (Real Estate Regulatory Authority)
              approvals and clearances certificates.
            </p>
            <p className="mt-4">
              By using our sites, you consent to such processing and you warrant
              that all data provided by you is accurate.
            </p>
          </div>
          <div className="blogste">
            <h3>Applicable Law</h3>
            <p>
              If you are a consumer, please note that these terms, its subject
              matter and its formation, are governed by Indian law. You and we
              both agree that the Courts of Karnataka, India will have non
              exclusive jurisdiction.
            </p>
          </div>
          <div className="blogster">
            <h3 className="mt-4">Contact Us</h3>
            <p>
              If you have any queries regarding our Terms of Use, the practices
              of this site, or your dealings with this site, please email your
              queries at{" "}
              <span>
              <a href="mailto:info@globaledifice.com">info@globaledifice.com</a>
              </span>
            </p>
            <p className="mt-4">Thank you for visiting our websites.</p>
          </div>
        </div>
      </div>
    </div>
    <WhatsappAction/>
    <Footer/>
    </div>
    </>

  );
};

export default TermsandConditions;
