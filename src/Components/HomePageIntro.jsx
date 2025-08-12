import React from "react";

const HomePageIntro = () => {
  return (
    <div className="homepageintro-parent">
      <div className="homepageintro-subparent">
        <div className="container">
          <div className="title">
            <h2 className="title-text">OUR CORE VALUES</h2>
            <p>
              With a strong legacy built over the years, Global Edifice is known
              for its unwavering commitment to quality and customer
              satisfaction. Rooted in trust and driven by innovation, the brand
              has established a solid presence across key regions. Global
              Edifice continues to shape the future of real estate by creating
              spaces that inspire lasting happiness.
            </p>
          </div>
          <div className="description">
            <p></p>
          </div>
          <div className="row main-text-row">
            <div className="col-md-3">
              <div className="row main-flex">
                <div className="maintext-card">
                  <h3>
                    Prime <br /> Location
                  </h3>
                  <p>" Exactly Where You Want to Be "</p>
                </div>
                <div className="image-card">
                  <img src="/prime-location.jpg" alt="" />
                </div>
                <div className="text-card">
                  <p>
                    We choose locations that matter—where lifestyle,
                    convenience, and connectivity come together seamlessly.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row main-flex">
                <div className="maintext-card">
                  <h3>
                    Smart <br /> Design
                  </h3>
                  <p>" Innovation Begins with Imagination "</p>
                </div>

                <div className="text-card">
                  <p>
                    Our designs are driven by creativity and functionality,
                    ensuring every space is thoughtfully planned and
                    future-ready. We value your time and deliver projects that
                    create lasting memories.
                  </p>
                </div>
                <div className="image-card">
                  <img src="/smart-design.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row main-flex">
                <div className="maintext-card">
                  <h3>
                    High <br /> Quality
                  </h3>
                  <p>" Excellence Built with Precision "</p>
                </div>
                <div className="image-card">
                  <img src="/high-quality.png" alt="" />
                </div>
                <div className="text-card">
                  <p>
                    Every project is a reflection of our commitment to superior
                    quality. With meticulous attention to detail and an
                    uncompromising approach, we turn visions into
                    enduring landmarks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="row main-flex">
                <div className="maintext-card">
                  <h3>
                    On time <br /> Delivery
                  </h3>
                  <p>" Every Minute & Moment Counts "</p>
                </div>
                <div className="text-card">
                  <p>
                    We respect timelines because we know they shape memories.
                    With a sharp eye for detail and a steadfast commitment to
                    quality, we ensure every project is delivered as promised—on
                    time and flawless.
                  </p>
                </div>
                <div className="image-card">
                  <img src="/on-time-delivery.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageIntro;
