import { Modal } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ContactFormModal from '../Contactus/ContactFormModal'

const UpcomingPropertyBanner = () => {
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
      <div className='PropertyBanner-main-parent'>
        <div className='PropertyBanner-sub-parent'>
          <div className='Banner-main-image'>
            <img src={propertyData?.img1} alt="" />
            <div className='Banner-badge-absolute'>
              <Link to="#" onClick={showModal}>
                <img src="/bannerBadgemain.svg" alt="" />
              </Link>
            </div>
          
            <ContactFormModal
                        isModalOpen={isModalOpen}
                        handleOk={handleOk}
                        setIsModalOpen={setIsModalOpen}
                        handleCancel={handleCancel}
                    />
          </div>
        </div>
      </div>
  
    </>
  )
}

export default UpcomingPropertyBanner