import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactFormModal from '../Contactus/ContactFormModal';
const WhyedificeBanner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div className='WhyedificeBanner-parent'>
                <div className='banner-background-image'>
                    <img src="/aboutusbanner.svg" alt="" />
                </div>
                <div className='WhyedificeBanner-sub-parent'>
                    <div className="row banner-mainrow">
                        {/* <div className='BannerAbsoluteSection'>
                            <p>Known For</p>
                            <div className='BannerAbsoluteSection-sub'>
                                <span>Quality & Experience</span>
                                <hr />
                                <span>Integrity & Innovation</span>
                            </div>
                        </div> */}
                        <div className="col-md-5">
                            <div className="WhyedificeBanner-left">
                                <h1>10 years of leadership in <br /> real estate</h1>
                                <div className='banner-icon-parent'>
                                    <div className='banner-icon'>
                                        <Link to="#" role='button' onClick={showModal}>
                                            <img src="/Button CTA.png" alt="" />
                                        </Link>

                                    </div>
                                    <p>Welcome to Global Edifice, where we turn your property dreams into reality.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className='Banner-mainimage'>
                                <img src="/about-us-banner-new.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <ContactFormModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                handleOk={handleOk}
                handleCancel={handleCancel}
            />
        </>
    )
}

export default WhyedificeBanner