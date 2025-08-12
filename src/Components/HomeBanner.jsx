import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HomeNavbar from './HomeNavbar'
import { Modal } from 'antd';
import ContactFormModal from './Contactus/ContactFormModal';
const HomeBanner = () => {
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
            <div className='HomeBanner-parent'>
                <HomeNavbar />
                <div className="container-fluid">
                    <div className='HomeBanner-sub-parent'>
                        <div className="HomeBanner-title">
                            <h1>Global Edifice, <br></br> We Don't Just Build, We Redefine.</h1>
                        </div>
                        <div className='Bannerbackground-image' style={{ backgroundImage: `url('/Line pattern.png')` }}>

                        </div>
                        <div className="row justify-content-between">
                            <div className="col-md-5">
                                <div className='HomeBanner-title-text'>
                                    <p>Our international brand specializes in property appraisal, sales, purchases, and investments. Trust us to deliver exceptional service and help you find your perfect home with life in it.</p>
                                    <Link to="#" onClick={showModal}>
                                        <div className='BannerbuttonImage-parent' >
                                            <div className='BannerbuttonImage'>
                                                <img src="/bannerhome.svg" alt="" />
                                            </div>
                                            <span>Schedule Site Visit</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='HomeBanner-image-main'>
                                    <div className='bannerabsoluteicon' role="button" onClick={showModal}>
                                        <img src="/bannerarrow.png" alt="" />
                                    </div>
                                    <img src="/project-images/orlean-images/orlean-main2.jpg" alt="" />
                                    {/* <div className='HomeBanner-image-main-sub'>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='HomeBanner-linepattern'>
                <img src="/Line pattern.png" alt="" />
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

export default HomeBanner