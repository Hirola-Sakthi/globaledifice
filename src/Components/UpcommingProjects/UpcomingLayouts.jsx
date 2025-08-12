import React, { useState } from 'react';
import { Modal } from 'antd';
import { useSelector } from 'react-redux';


const UpcomingLayouts = () => {
    const propertyData = useSelector(state => state?.property?.propertyData)
    console.log("propertyData", propertyData);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [isMainImage, setIsMainImage] = useState(false);

    const handleImageClick = (imageSrc, isMain) => {
        setCurrentImage(imageSrc);
        setIsMainImage(isMain);
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setCurrentImage('');
        setIsMainImage(false);
    };

    const layoutImages = propertyData?.mainImg || [];
    return (
        <>
            {layoutImages.length > 0 && (
                <>
                    <div className='Layouts-main-parent'  id='Layouts'>
                        <div className='AssetsComponent-sub-parent'>
                            <h1>Layouts - </h1>
                            <div className='Layouts-sub-parent'>
                                <h2>Master plan</h2>
                                <div className='LayoutMain-image'>
                                    <img
                                        src={layoutImages[0].img}
                                        alt="Master Plan"
                                        onClick={() => handleImageClick(layoutImages[0]?.img, true)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="FloorPlans-main-parent">
                            <h2>Floor Plans</h2>
                            <div className="row">
                                {layoutImages[1]?.img && (
                                    <div className="col-sm-4 col-md-4">
                                        <div className='FloorPlans-image'>
                                            <img
                                                src={layoutImages[1]?.img}
                                                alt="Floor Plan 1"
                                                onClick={() => handleImageClick(layoutImages[1]?.img, false)}
                                            />
                                        </div>
                                    </div>
                                )}
                                {layoutImages[2]?.img && (
                                <div className="col-sm-4 col-md-4">
                                    <div className='FloorPlans-image'>
                                        <img
                                            src={layoutImages[2]?.img}
                                            alt="Floor Plan 2"
                                            onClick={() => handleImageClick(layoutImages[2]?.img, false)}
                                        />
                                    </div>
                                </div>
                                )}
                                {layoutImages[3]?.img && (
                                <div className="col-sm-4 col-md-4">
                                    <div className='FloorPlans-image'>
                                        <img
                                            src={layoutImages[3]?.img}
                                            alt="Floor Plan 3"
                                            onClick={() => handleImageClick(layoutImages[3]?.img, false)}
                                        />
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
            <Modal
                visible={isModalVisible}
                footer={null}
                onCancel={handleCancel}
                width={isMainImage ? '65%' : '70%'}
                bodyStyle={{ textAlign: 'center' }}
            >
                <div className="layout-modal-dispaly0n-modal">
                    <img className='Modal-inner-image' src={currentImage} alt="Current" />
                </div>
            </Modal>
        </>
    );
};

export default UpcomingLayouts;