import React, { useState } from 'react'
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import ContactFormModal from './Contactus/ContactFormModal';
const OurStrengths = () => {
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
            <div className='OurStrengths-parent'>
                <div className="container-xxl">
                    <div className='OurStrengths-sub-parent'>
                        <div className='HomeBanner-image-main'>
                            <div className='bannerabsoluteicon' role='button' onClick={showModal}>
                                <img src="/greenarrow.png" alt="" />
                            </div>
                            <img className='strength-image' src="/project-images/legacy-images/legacygalleryimg2.3.webp" alt="" />
                            <div className='HomeBanner-image-main-sub'>
                            </div>
                        </div>
                        <div className='OurStrengths-Title'>
                            <h1>Let's combine our strengths</h1>
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

export default OurStrengths