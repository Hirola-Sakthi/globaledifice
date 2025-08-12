import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';

const UpcomingAssetsComponent = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const [documentType, setDocumentType] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [modalMessage, setModalMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.email.trim()) errors.email = 'Email is required';
        if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
        if (!formData.subject.trim()) errors.subject = 'Subject is required';
        if (!formData.phone.trim()) errors.phone = 'Phone number is required';
        if (!/^\d{10}$/.test(formData.phone)) errors.phone = 'Phone number is invalid';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setModalMessage('Your message has been sent successfully!');
        } else {
            setModalMessage('Please enter valid details');
        }
        setErrors(formErrors);
        // Ensure correct modal state update here
        setIsModalOpen1(false);
        setIsModalOpen2(false);
        setIsModalOpen3(false);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);

    const showModal = (modal) => {
        if (modal === 'modal1') setIsModalOpen1(true);
        if (modal === 'modal2') setIsModalOpen2(true);
        if (modal === 'modal3') setIsModalOpen3(true);
        setDocumentType( modal);
    };

    const handleOk = () => {
        setIsModalOpen1(false);
        setIsModalOpen2(false);
        setIsModalOpen3(false);
    };

    const handleCancel = () => {
        setIsModalOpen1(false);
        setIsModalOpen2(false);
        setIsModalOpen3(false);
    };

    const renderModal = (modalId, title) => (
        <Modal
            footer={null}
            title={title}
            open={modalId === 'modal1' ? isModalOpen1 : modalId === 'modal2' ? isModalOpen2 : isModalOpen3}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <form  action="" method='post'>
                <div className='ContactForm-sub-right'>
                    <div className="row">
                        <div className="col-md-6">
                            <input
                                type="text"
                                name="name"
                                placeholder='Name'
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            {errors.name && <p className="error text-danger">{errors.name}</p>}
                        </div>
                        <div className="col-md-6">
                            <input
                                type="email"
                                name="email"
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            {errors.email && <p className="error text-danger">{errors.email}</p>}
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                name="subject"
                                placeholder='Subject'
                                value={formData.subject}
                                onChange={handleInputChange}
                                required
                            />
                            {errors.subject && <p className="error text-danger">{errors.subject}</p>}
                        </div>
                        <div className="col-md-6">
                            <input
                                type="tel"
                                name="phonenumber"
                                placeholder='Phone'
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                            {errors.phone && <p className="error text-danger">{errors.phone}</p>}
                        </div>
                        <div className="col-md-12">
                            <textarea
                                name="message"
                                placeholder='Hello I am interested in...'
                                value={formData.message}
                                onChange={handleInputChange}
                            />
                        </div>
                        <input type="hidden" id="currentUrlInput" name="currentUrl" />
                        <input type="hidden" name="documentType" value={documentType} />  {/* Add this line */}
                        <div className='Sendnowbutton'>
                            <button type="submit" name='submit'>Send Now ➜</button>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>
    );

    useEffect(() => {
        const currentUrl = window.location.href;
        const urlInput = document.getElementById('currentUrlInput');
        if (urlInput) {
            urlInput.value = currentUrl;
        }
    }, [isModalOpen1, isModalOpen2, isModalOpen3]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('download') && urlParams.get('download') === 'true') {
            const documentType = urlParams.get('type');
            let filePath = '';
            if (documentType === 'modal1') filePath = '/broucher/testing.pdf';
            if (documentType === 'modal2') filePath = '/master-plan/testing.pdf';
            if (documentType === 'modal3') filePath = '/floor/testing.pdf';

            if (filePath) {
                const link = document.createElement('a');
                link.href = filePath;
                link.download = filePath.split('/').pop();
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }, []);

    return (
        <>
            <div className='AssetsComponent-main-parent' id='Asset'>
                <div className='AssetsComponent-sub-parent'>
                    <h1>Assets - </h1>
                    <ul className="Assets-tabs-parent" id='Pricings'>
                        <li
                            className={` ${activeTab === 'tab1' ? 'active' : ''}`}
                            onClick={() => handleTabClick('tab1')}
                            style={{ cursor: 'pointer' }}
                        >
                            Broucher
                        </li>
                        <li
                            className={` ${activeTab === 'tab2' ? 'active' : ''}`}
                            onClick={() => handleTabClick('tab2')}
                            style={{ cursor: 'pointer' }}
                        >
                            Master Plan
                        </li>
                        <li
                            className={` ${activeTab === 'tab3' ? 'active' : ''}`}
                            onClick={() => handleTabClick('tab3')}
                            style={{ cursor: 'pointer' }}
                        >
                            Floor Plan
                        </li>
                    </ul>
                    <div className="tab-content Assets-tabs-content-parent">
                        {activeTab === 'tab1' &&
                            <div className='Assetstab1-parent'>
                                {renderModal('modal1', 'Fill and Submit the form to Download Brochure')}
                                <Link to="#" onClick={() => showModal('modal1')}>
                                    <div className="TabsSection-right-sub1-pdf">
                                        <img src="/broucher.png" loading='lazy' alt="" />
                                    </div>
                                </Link>
                            </div>
                        }
                        {activeTab === 'tab2' &&
                            <div className='Assetstab1-parent'>
                                {renderModal('modal2', 'Fill and Submit the form to Download Master Plan')}
                                <Link to="#" onClick={() => showModal('modal2')}>
                                    <div className="TabsSection-right-sub1-pdf">
                                    <img src="/master-plan.png" loading='lazy' alt="" />
                                    </div>
                                </Link>
                            </div>
                        }
                        {activeTab === 'tab3' &&
                            <div className='Assetstab1-parent'>
                                {renderModal('modal3', 'Fill and Submit the form to Download Floor Plan')}
                                <Link to="#" onClick={() => showModal('modal3')}>
                                    <div className="TabsSection-right-sub1-pdf">
                                        <img src="/floor.png" loading='lazy' alt="" />
                                    </div>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpcomingAssetsComponent;
