const ImageText = () => {
    return (
        <div className="AboutUs-main-parent building">
            <div lassName="AboutUs-sub-parent">
                <div className="AboutUs-mainSection">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="AboutUs-mainSection-image">
                                <img src="/bulidingImg.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="AboutSection-right">
                                <div className="AboutSection-right-sub1">
                                    <h2>Building a Greener Tomorrow: Our Commitment to Sustainable Living</h2>
                                    <span>
                                       At Global Edifice, we understand that true success is built on a foundation of responsibility – to both our planet and its people. Our commitment to the environment is unwavering. We champion sustainable practices by seamlessly integrating innovative green technologies into every design. This means deploying efficient water conservation systems, harnessing renewable energy solutions, meticulously managing waste, and cultivating lush, bio-diverse landscapes. Through these efforts, our developments harmonize with the environment, thus delivering homes of unparalleled comfort while drastically reducing their ecological impact.
                                    </span>
                                </div>
                                <div className="AboutSection-right-sub2">
                                    <div className="AboutSection-right-sub2-inner">
                                        <div className="d-flex gap-3">
                                            <img
                                                className="CheckCircle-image"
                                                src="/check-circle.svg"
                                                alt=""
                                            />
                                            <div>
                                                <p>Smart Resource Management</p>
                                                
                                            </div>
                                        </div>
                                        <div className="d-flex gap-3">
                                            <img
                                                className="CheckCircle-image"
                                                src="/check-circle.svg"
                                                alt=""
                                            />
                                            <div>
                                                <p>Eco-Friendly Landscaping</p>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex gap-3">
                                            <img
                                                className="CheckCircle-image"
                                                src="/check-circle.svg"
                                                alt=""
                                            />
                                            <div>
                                                <p>Sustainable Design Philosophy</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImageText