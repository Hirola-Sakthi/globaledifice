import React, { useState } from 'react';
import { Modal } from 'antd';

const ValidationModal = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [modalMessage, setModalMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Modal title="Validation Result" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <p>{modalMessage}</p>
            </Modal>
            <form onSubmit={handleSubmit}>
                <div className='ContactForm-sub-right'>
                    <div className="row">
                        <div className="col-md-6">
                            <input
                                type="text"
                                name="name"
                                placeholder='Name'
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            {errors.name && <p className="error text-danger">{errors.name}</p>}
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                name="email"
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleInputChange}
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
                            />
                            {errors.subject && <p className="error text-danger">{errors.subject}</p>}
                        </div>
                        <div className="col-md-6">
                            <input
                                type="text"
                                name="phone"
                                placeholder='Phone'
                                value={formData.phone}
                                onChange={handleInputChange}
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
                        <div className='Sendnowbutton'>
                            <button type="submit">Send Now ➜ </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ValidationModal;
