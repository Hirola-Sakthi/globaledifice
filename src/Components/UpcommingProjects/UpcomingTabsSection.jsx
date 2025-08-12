import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Modal } from 'antd';
import ContactFormModal from '../Contactus/ContactFormModal';

const UpcomingTabsSection = () => {
    const propertyData = useSelector(state => state?.property?.propertyData)
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
            <div className='TabsSection-main-parent' id='OverView'>
                <div className='TabsSection-sub-parent'>
                    <div className="row align-items-end">
                        <div className="col-md-8">
                            <div className='TabsSection-top'>
                                <div className='linediv'>
                                </div>
                                <p>Overview</p>
                            </div>
                            <div className='TabsSection-left'>
                                <h1>{propertyData?.title} -</h1>
                                <p>{propertyData?.description} </p>
                                <div className="row">
                                    {propertyData?.acre?.length && (
                                        <div className="col-3 col-md-3">
                                            <div className='TabsSection-left-sub'>
                                                <h4>{propertyData?.acre} </h4>
                                                <h5>{propertyData?.acretext}</h5>
                                            </div>
                                        </div>
                                    )}
                                    {propertyData?.sqft?.length && (
                                        <div className="col-3 col-md-3">
                                            <div className='TabsSection-left-sub'>
                                                <h4>{propertyData?.sqft} </h4>
                                                <h5>{propertyData?.sqfttext}</h5>
                                            </div>

                                        </div>
                                    )}
                                    {propertyData?.floor?.length && (
                                        <div className="col-3 col-md-3">

                                            <div className='TabsSection-left-sub'>
                                                <h4>{propertyData?.floor} </h4>
                                                <h5>{propertyData?.floortext}</h5>
                                            </div>

                                        </div>
                                    )}
                                    {propertyData?.tower?.length && (
                                        <div className="col-3 col-md-3">

                                            <div className='TabsSection-left-sub'>
                                                <h4>{propertyData?.tower} </h4>
                                                <h5>{propertyData?.towertext}</h5>
                                            </div>

                                        </div>
                                    )}
                                    {propertyData?.BHK?.length && (
                                        <div className="col-3 col-md-3">
                                            <div className='TabsSection-left-sub'>
                                                <h4>{propertyData?.BHK} </h4>
                                                <h5>{propertyData?.BHKtext}</h5>
                                            </div>

                                        </div>
                                    )}
                                    {propertyData?.units?.length && (
                                        <div className="col-3 col-md-3">
                                            <div className='TabsSection-left-sub'>
                                                <h4>{propertyData?.units} </h4>
                                                <h5>{propertyData?.unitstext}</h5>
                                            </div>

                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='TabsSection-right'>
                                <p>If you're hurry, quick call us</p>
                                <Link to="#" onClick={showModal}>
                                    <div className='TabsSection-right-sub1'>
                                        <p>Contact Us</p>
                                        <img src="/arrow-up-right.svg" alt="" />
                                    </div>
                                </Link>
                                <div className='TabsSection-right-sub2'>
                                    <h3>Location Details:</h3>
                                    <p>{propertyData?.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <ContactFormModal
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                setIsModalOpen={setIsModalOpen}
                handleCancel={handleCancel}
            />
        </>
    )
}

export default UpcomingTabsSection