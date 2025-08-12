import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";

const Faqconatct = () => {
    return (
        <div className='Faqconatct-parent'>
            <div className="Faqconatct-subparent container">
                <div className="Faqconatct-heading">
                    <h2>Contact<span> Us</span></h2>
                    <p>We’d love to know more about the spaces that make you feel at home.</p>
                </div>
                <div className='faqcontact-form'>
                    <h6>Your home Built to Converse</h6>
                    <div className='faqcontact-form-fields'>
                        <div className='faqcontact-faq'>
                            <input type="text" placeholder='Name *' />
                        </div>
                        <div className='faqcontact-faq'>
                            <input type="text" placeholder='Phone Number *' />
                        </div>
                        <div className='faqcontact-faq'>
                            <input type="text" placeholder='Email *' />
                        </div>
                        <div className='faqcontact-faq'>
                            <input type="text" placeholder='Message' />
                        </div>
                    </div>
                </div>
                <div className='contact-us-investedifice'>
                    <Link to="#">
                        <div className='contact-us-invest'>
                            <h6>Enquire Now</h6>
                            <FaArrowRightLong />
                        </div>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Faqconatct