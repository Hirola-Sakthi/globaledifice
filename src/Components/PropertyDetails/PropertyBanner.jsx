import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Modal } from 'antd';
import ContactFormModal from '../Contactus/ContactFormModal';
const PropertyBanner = () => {
  const propertyData = useSelector(state => state?.property?.propertyData)
  console.log("first,", propertyData)
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
      <div className='PropertyBanner-main-parent'>
        <div className='PropertyBanner-sub-parent'>
          <div className='Banner-main-image'>
            <img src={propertyData?.img1} alt="" />
            <div className='Banner-badge-absolute' role='button' onClick={showModal}>
              <img src="/bannerBadgemain.svg" alt="" />
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

export default PropertyBanner