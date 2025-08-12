import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ContactFormModal from "./Contactus/ContactFormModal";
const HomeAboutus = () => {
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
  const [counters, setCounters] = useState({
    teamQuality: 0,
    yearsExperience: 0,
    unitsQuality: 0,
    happyClients: 0,
  });

  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const increments = {
      teamQuality: 6,
      yearsExperience: 10,
      unitsQuality: 1,
      happyClients: 500,
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

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVideoClick = () => {
    setIsVideoVisible(true);
    togglePlay();
  };

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (video) {
      video.controls = true; // Show native controls on hover
    }
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (video) {
      video.controls = false; // Hide native controls when not hovered
    }
  };

  return (
    <div className="HomeAboutus-parent">
      <div className="container">
        <div className="HomeAboutus-sub-parent">
          <div className="row justify-content-between">
            <div className="col-md-6">
              <div className="HomeAboutus-title">
                {/* <div className="HomeAboutus-title-sub">
                  <div className="HomeAboutus-image">
                    <img src="/gold-icon.png" alt="" />
                  </div>
                  <h2>About Global Edifice</h2>
                </div> */}
                <div className="HomeAboutus-title-text">
                  <p>
                    {" "}
                    At Global Edifice, We don't just build structures; We sculpt
                    futures. As a beacon of trust in Bangalore's real estate, we
                    lead with architectural innovation, crafting premium
                    mid-rise apartments where luxury isn't just seen, it's
                    lived. Every home is a testament to our commitment: A
                    harmonious blend of stunning design and practical living,
                    built to inspire and endure for generations.
                  </p>
                </div>
                <Link to="#" onClick={showModal}>
                  <button>Get Started</button>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="HomeAboutus-title-sub-right HomeAboutus-title-text">
                <h1>
                  {" "}
                  <span className="promise-text">
                    The Global Edifice Promise.
                  </span>{" "}
                  <br /> Building Tomorrow's Bangalore Today
                </h1>
                <p className="HomeAboutus-main-text">
                  Our journey began with a simple vision: to redefine what home
                  means in modern Bangalore. Today, we're proud to offer
                  meticulously designed flats that represent the perfect harmony
                  of comfort, style, and smart investment.
                </p>
                <div className="row">
                  <div className="col-3 card-shadow-inabout-section">
                    <div className="HomeAboutus-counter-sub">
                      <div className="d-flex gap-2 align-items-center justify-content-center">
                        <h1>{Math.ceil(counters.teamQuality)}</h1>
                        <span></span>
                      </div>
                      <p>Projects Completed</p>
                    </div>
                  </div>
                  <div className="col-3 card-shadow-inabout-section">
                    <div className="HomeAboutus-counter-sub">
                      <div className="d-flex gap-2 align-items-center justify-content-center">
                        <h1>{Math.ceil(counters.yearsExperience)}</h1>
                        <span></span>
                      </div>
                      <p>Years of Experience</p>
                    </div>
                  </div>
                  <div className="col-3 card-shadow-inabout-section">
                    <div className="HomeAboutus-counter-sub">
                      <div className="d-flex gap-2 align-items-center justify-content-center">
                        <h1>{Math.ceil(counters.unitsQuality)} M </h1>
                        <span></span>
                      </div>
                      <p>Sq.ft Delivered</p>
                    </div>
                  </div>
                  <div className="col-3 card-shadow-inabout-section">
                    <div className="HomeAboutus-counter-sub">
                      <div className="d-flex gap-2 align-items-center justify-content-center">
                        <h1>{Math.ceil(counters.happyClients)}+</h1>
                        <span></span>
                      </div>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="DreamHoiuseVideoSection">
            <div
              className="DreamHouseVideoSection-video"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ position: "relative" }}
            >
              {isVideoVisible ? (
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  style={{ borderRadius: "230px", width: "80%" }}
                  poster="/videobg.png"
                  class="video living_videoGalleryDiv__xiJkE"
                >
                  <source width="100%" height="100%" src="" type="video/mp4" />
                </video>
              ) : (
                <div
                  className="AvsoluteImage-video"
                  onClick={handleVideoClick}
                  style={{ cursor: "pointer" }}
                >
                  <img src="/project-listing-orlean.webp" alt="" />
                  <div className="play-pause-button">
                    <img src="/videoplayicon.png" alt="" />
                  </div>
                </div>
              )}
              {isPlaying && (
                <div
                  className="PauseIcon-parent"
                  onClick={togglePlay}
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <img src="/pause.png" alt="Pause" />
                </div>
              )}
              <h1>DREAM HOUSE</h1>
            </div>
          </div> */}
        </div>
      </div>
      <ContactFormModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default HomeAboutus;
