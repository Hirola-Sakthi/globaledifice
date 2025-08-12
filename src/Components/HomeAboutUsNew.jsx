import React, { useEffect, useState } from "react";

const HomeAboutUsNew = () => {
  const [counters, setCounters] = useState({
    teamQuality: 0,
    yearsExperience: 0,
    unitsQuality: 0,
    happyClients: 0,
  });

  useEffect(() => {
    const increments = {
      teamQuality: 6,
      yearsExperience: 10,
      unitsQuality: 1,
      happyClients: 650,
    };
    const duration = 5000; // Duration of the counter animation in milliseconds
    const interval = 10; // Interval of the counter update in milliseconds

    // Object to store interval IDs
    const intervalIds = {};

    // Function to start counter animations
    const startCountersAnimation = () => {
      Object.keys(increments).forEach((key) => {
        const increment = increments[key] / (duration / interval);
        intervalIds[key] = setInterval(() => {
          setCounters((prevCounters) => {
            if (prevCounters[key] < increments[key]) {
              return { ...prevCounters, [key]: prevCounters[key] + increment };
            } else {
              clearInterval(intervalIds[key]);
              return { ...prevCounters, [key]: increments[key] };
            }
          });
        }, interval);
      });
    };

    // Trigger animation when component mounts
    startCountersAnimation();

    // Clean up intervals on component unmount
    return () => {
      Object.keys(intervalIds).forEach((key) => {
        clearInterval(intervalIds[key]);
      });
    };
  }, []);

  return (
    <div className="home-about-us-new-parent">
      <div className="home-about-us-new-subparent">
        <div className="container">
          <div className="home-about-us-new-title">
            <h2 className="promise-text">The Global Edifice Promise</h2>
            <h2>Building Tomorrow's Bangalore Today</h2>
          </div>
          <div className="home-about-us-new-description">
            <p>
              At Global Edifice, We don't just build structures; We sculpt
              futures. As a beacon of trust in Bangalore's real estate, we lead
              with architectural innovation, crafting premium mid-rise
              apartments where luxury isn't just seen, it's lived. Every home is
              a testament to our commitment: A harmonious blend of stunning
              design and practical living, built to inspire and endure for
              generations.
            </p>
          </div>
          <div className="about-us-statistics-parent">
            <div className="col-md-5"></div>
            <div className="col-md-6 cards-width-full">
              <div className="row statistics-row">
                <div className="col-md-6 cards-fit-width">
                  <div className="compare-statistics">
                    <div className="number">
                      <h2>{Math.ceil(counters.teamQuality)}</h2>
                    </div>
                    <div className="number-suffix">
                      <h2>Projects</h2>
                    </div>
                    <div className="number-description">
                      {/* <h4></h4> */}
                      <p>Completed</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 cards-fit-width">
                  <div className="compare-statistics">
                    <div className="number">
                      <h2>{Math.ceil(counters.yearsExperience)}</h2>
                    </div>
                    <div className="number-suffix">
                      <h2>Years</h2>
                    </div>
                    <div className="number-description">
                      {/* <h4></h4> */}
                      <p>of Experience</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="statistics-divider"></div> */}
              <div className="row statistics-row">
                <div className="col-md-6 cards-fit-width">
                  <div className="compare-statistics">
                    <div className="number">
                      <h2>{Math.ceil(counters.unitsQuality)} Million </h2>
                    </div>
                    <div className="number-suffix">
                      <h2>Sq.ft</h2>
                    </div>
                    <div className="number-description">
                      {/* <h4></h4> */}
                      <p>Delivered</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 cards-fit-width">
                  <div className="compare-statistics">
                    <div className="number">
                      <h2>{Math.ceil(counters.happyClients)}+</h2>
                    </div>
                    <div className="number-suffix">
                      <h2>Happy</h2>
                    </div>
                    <div className="number-description">
                      {/* <h4></h4> */}
                      <p>Homes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUsNew;
