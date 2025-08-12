// import React from 'react'

// const ProjectsBanner = () => {
//     return (
//         <>
//             <div className='ProjectsBanner-main-parent'>
//                 <div className='ProjectsBanner-sub-parent'>
//                     <div className='ProjectsBanner-bg'>
//                         <div className='ProjectsBanner-content'>
//                             <h1>Our Projects</h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ProjectsBanner

import React from "react";

const ProjectsBanner = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="ProjectsBanner-main-parent">
        <div className="ProjectsBanner-sub-parent">
          <div className="ProjectsBanner-bg">
            <div className="ProjectsBanner-content">
              <h1>Living Spaces Curated</h1>
            </div>
          </div>
          <div className="projects-integrated-tabs">
            <button
              className={`integrated-tab-button ${
                activeTab === "ongoing" ? "active" : ""
              }`}
              onClick={() => setActiveTab("ongoing")}
            >
              Ongoing Projects
            </button>
            <button
              className={`integrated-tab-button ${
                activeTab === "upcoming" ? "active" : ""
              }`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Projects
            </button>
            <button
              className={`integrated-tab-button ${
                activeTab === "completed" ? "active" : ""
              }`}
              onClick={() => setActiveTab("completed")}
            >
              Completed Projects
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsBanner;
