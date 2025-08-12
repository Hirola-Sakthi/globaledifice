import React from 'react';
import Marquee from 'react-fast-marquee';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MarqueeSlider = () => {
    const propertyData = useSelector(state => state?.property?.propertyData)

    return (
        <>
            <div className='MarqueeSlider-main-parent'>
                <div className='MarqueeSlider-parent'>
                    <Marquee gradient={false} speed={50}>
                        <div className='d-flex  align-items-center'>
                            <p>{propertyData?.title}</p>
                            <p>{propertyData?.title}</p>
                            <p>{propertyData?.title}</p>
                            <p>{propertyData?.title}</p>
                            <p>{propertyData?.title}</p>
                            <p>{propertyData?.title}</p>
                            <p>{propertyData?.title}</p>
                            <p>{propertyData?.title}</p>
                            <p>{propertyData?.title}</p>
                            <p>{propertyData?.title}</p>
                            <p>{propertyData?.title}</p>

                        </div>
                    </Marquee>
                </div>
                <div className='MarqueeSlider-below-parent'>
                    <div className='MarqueeSlider-below-parent-sub'>

                        <div className='MarqueeSlider-below-sub'>
                            <a href="#OverView">
                                <p>OverView</p>
                            </a>
                        </div>
                        {propertyData?.signatureHightlights && propertyData?.signatureHightlights?.length > 0 && (
                            <div className='MarqueeSlider-below-sub'>
                                <a href="#Highlights">
                                    <p>Highlights</p>
                                </a>
                            </div>
                        )}
                        <div className='MarqueeSlider-below-sub'>
                            <a href="#Asset">
                                <p>Asset</p>
                            </a>
                        </div>

                        {propertyData?.mainImg && propertyData?.mainImg?.length > 0 && (
                            <div className='MarqueeSlider-below-sub'>
                                <a href="#Layouts">
                                    <p>Layouts</p>
                                </a>
                            </div>
                        )}
                        {propertyData?.amenities && propertyData?.amenities?.length > 0 && (
                            <div className='MarqueeSlider-below-sub'>
                                <a href="#Amenities">
                                    <p>Amenities</p>
                                </a>
                            </div>
                        )}
                        {propertyData?.images && propertyData?.images?.length > 0 && (
                            <div className='MarqueeSlider-below-sub'>
                                <a href="#Gallery">
                                    <p>Gallery</p>
                                </a>
                            </div>
                        )}
                        {/* {propertyData?.signatureHightlights && propertyData?.signatureHightlights?.length > 0 && ( */}
                        <div className='MarqueeSlider-below-sub'>
                            <a href="#Location">
                                <p>Location</p>
                            </a>
                        </div>
                        {/* )} */}
                        <div className='MarqueeSlider-below-sub'>
                            <a href="#faqsection">
                                <p>FAQ’s</p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default MarqueeSlider;
