import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';
import ContactFormModal from '../Contactus/ContactFormModal';
const UpcomingLocation = () => {
    const propertyData = useSelector(state => state?.property?.propertyData)
    console.log("propertyData--", propertyData)
    const location = propertyData?.map || []

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
            <div className='Location-main-parent' id='Location'>
                <div className='AssetsComponent-sub-parent'>
                    <h1>Location -  </h1>
                    <div className='Assetstab1-parent'>
                        <Link to="#" onClick={showModal}>
                            <div class="TabsSection-right-sub1"><p>Need a Location Tour ?</p><img src="/arrow-up-right.svg" alt="" /></div>
                        </Link>
                    </div>
                </div>
                <div className='Location-sub-parent'>
                    <div className='Location-map-parent'>
                        <iframe src={location} width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    {
                        propertyData?.amenities?.length > 0 && (
                            <>
                                <h2>Ease of Access & Prime Landmarks</h2>
                                <div className='Location-below-section'>
                                    <div className="row">
                                        {propertyData?.Landmarks?.map((item, index) => (
                                            <div className="col-md-4">
                                                <div className='Location-below-section-sub'>
                                                    <ul>
                                                        <li>{item.land} </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                </div>
            </div>
            <ContactFormModal
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                setIsModalOpen={setIsModalOpen}
                handleCancel={handleCancel}
            />
        </>
    )
}

export default UpcomingLocation;