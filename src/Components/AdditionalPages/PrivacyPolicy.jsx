
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import './pages.css'
import HomeNavbar from '../HomeNavbar';
import Footer from '../Footer';
import WhatsappAction from '../WhatsappAction';
const Privacypolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className='Privacypolicy-main-parent AdditionalPages'>
                <HomeNavbar />
                <div className='Termsofuse-main-head'>
                    <div className="Termsofuse-img-main">
                        <div className="Blogshead-line"><h5>Privacy Policy</h5></div>
                    </div>
                    <div className="Termsofuse-Finibus-Bonorum-line-main">
                        <div className="Termsofuse-Finibus-Bonorum-line-head-sub">
                            <h2>
                                 WELCOME TO Global Edifice - PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING THIS SITE 
                            </h2>
                        </div>
                        <div className="Termsofuse-Finibus-Bonorum-sub-lines">
                            <div className="blogste"> <h2>Privacy Policy</h2>
                                <p>Global Edifice and its group companies (that is, our subsidiaries, our ultimate holding company and its subsidiaries) ("we", "our", "us", or “Global Edifice”) are committed to protecting and respecting your privacy. This privacy policy (together with our terms of use and any other documents referred to on it) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting <span><Link to="/">www.globaledifice.com</Link></span>, or any other of our websites to which this privacy policy applies ("Sites") or otherwise providing us with information you are accepting and consenting to the practices described in this policy.</p>
                            </div>
                            <div className="blogste">
                                <h3>Personal Identification Information</h3>
                                <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number. Users may, however, visit our Site anonymously. Users can always refuse to supply personal identification information, except that it may prevent them from engaging in certain Site related activities.</p>
                            </div>
                            <div className="blogste">
                                <h3>Non-Personal Identification Information</h3>
                                <p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means the type of connection to our Sites, such as the operating system and the Internet service providers utilised and other similar information.</p>
                            </div>
                            <div className="blogste">
                                <h3>Web Browser Cookies</h3>
                                <p>Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies or to alert the Users when cookies are being sent. If they do so, note that some parts of the Site may not function properly. This is a standard operating procedure that is used across the internet.</p>
                            </div>
                            <div className="blogste">
                                <h3>How We Use Collected Information</h3>
                                <p>Global Edifice may collect and use User's personal information for the following purposes:</p>
                                <p>To improve customer service:</p>
                                <p>Information provided by Users helps us respond to the customer service requests and support needs, more efficiently.</p>
                                <p>To personalise User experience:</p>
                                <p>We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</p>
                                <p>To improve our Site::</p>
                                <p>We may use feedback provided by the User/s to improve our products and services.</p>
                                <p>To run a promotion, contest, survey or other Site feature.</p>
                                <p>To send the User/s information they agreed to receive about topics of interest to them.</p>
                                <p>To send periodic emails.</p>
                            </div>
                            <div className="blogste">
                                <h3>How we protect User's information</h3>
                                <p>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorised access, alteration, disclosure or destruction of User's personal information and data stored on our Site. As with data security, there are limits to its effectiveness and we indemnify ourselves in the event of an attack that is difficult to defend against. We also will do our best to retrieve any data that is lost as per available resources.</p>

                            </div>
                            <div className="blogste">
                                <h3>Sharing personal information of Users</h3>
                                <p>We do not sell, trade, or rent User's personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding User's with our subsidiaries, our business partners, trusted affiliates and advertisers for the purposes outlined above.</p>
                            </div>
                            <div className="blogste">
                                <h3>Changes to this Privacy Policy</h3>
                                <p>Global Edifice shall update this privacy policy at its sole discretion. Users are advised to check this page for any changes in the privacy policy and to stay informed about how the personal information of the Users is protected by us. The Users hereby acknowledge and agree that it is their responsibility to review this privacy policy periodically and become aware of modifications.</p>
                            </div>
                            <div className="blogste">
                                <h3>Your Acceptance of these Terms</h3>
                                <p>By using this Site, the Users signify their acceptance of this policy as may be modified from time to time. Users are advised not to access this site if they do not agree to our privacy policy. The above mentioned privacy policy shall be applicable to the information and data collected by our call centres as well.</p>

                            </div>
                            <div className="blogste">
                                <h3>Contact Us</h3>
                                <p>If you have any queries regarding our Terms of Use, the practices of this site, or your dealings with this site, please email your queries at info@globaledifice.com</p>
                                <p>Thank you for visiting our websites.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <WhatsappAction/>
                <Footer />
            </div>
        </>

    )
}

export default Privacypolicy