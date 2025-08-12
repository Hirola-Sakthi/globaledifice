import React, { useState, useEffect, useRef } from "react";

const MilestoneTimeline = () => {
  // Sample milestone data
  const milestoneData = {
    
    2025: [{ title: "Sarjapura (Circle Of Dreams)", location: "Los Angeles", landArea: '3.5 Acres', Units: '257' }],
    2024: [
      { title: "Orlean", location: "Los Angeles", landArea: '1.5 Acres', Units: '91' },
      { title: "Legacy", location: "Los Angeles", landArea: '1 Acre', Units: '56' }
    ],
    2023: [{ title: "Cresent", location: "Los Angeles", landArea: '1 Acre', Units: '64' }],
    2021: [{ title: "Celesta", location: "Los Angeles", landArea: '3.5 Acres', Units: '336' }],
    2019: [{ title: "Green Apple Hikes", location: "Boston", landArea: '1/2 Acres', Units: '80' }],
    2015: [{ title: "Green Apple Villas", location: "Kodathi Village", landArea: '6.5 Acres', Units: '83' },],
  };

  const years = Object.keys(milestoneData).sort((a, b) => b - a);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Auto slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % years.length;
          setSelectedYear(years[nextIndex]);
          return nextIndex;
        });
      }, 1500);
    };

    if (!isHovered) {
      startAutoSlide();
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, years.length]);

  const handleYearClick = (year, index) => {
    setSelectedYear(year);
    setCurrentIndex(index);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setSelectedYear(years[index]);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % years.length;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    const nextIndex = currentIndex === 0 ? years.length - 1 : currentIndex - 1;
    goToSlide(nextIndex);
  };

  // Calculate visible years (show 6 at a time)
  const visibleYears = 6;
  const getTranslateX = () => {
    const totalYears = years.length;
    if (totalYears <= visibleYears) return 0;

    // Always center the current year
    const centerPosition = Math.floor(visibleYears / 2);
    const translatePercent =
      (currentIndex - centerPosition) * (100 / visibleYears);

    // Clamp the translation to prevent showing empty spaces
    const maxTranslate = ((totalYears - visibleYears) * 100) / visibleYears;
    const minTranslate = 0;

    return Math.max(minTranslate, Math.min(maxTranslate, translatePercent));
  };

  const translateX = getTranslateX();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "50px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "300",
          color: "#002150",
          marginBottom: "40px",
          letterSpacing: "2px",
          textAlign: "center",
        }}
      >
        OUR MILESTONES
      </h1>

      {/* Year Navigation */}
      <div
        style={{
          position: "relative",
          marginBottom: "60px",
          overflow: "hidden",
          borderBottom: "1px solid #e0e0e0",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Years Display */}
        <div
          style={{
            display: "flex",
            transform: `translateX(-${translateX}%)`,
            transition: "transform 0.5s ease-in-out",
            paddingBottom: "15px",
            margin: years.length > visibleYears ? "0 50px" : "0",
          }}
        >
          {years.map((year, index) => (
            <div
              key={year}
              onClick={() => handleYearClick(year, index)}
              style={{
                minWidth: `${100 / visibleYears}%`,
                padding: "10px 25px",
                cursor: "pointer",
                fontSize: "1.2rem",
                fontWeight: selectedYear === year ? "600" : "400",
                color: selectedYear === year ? "#002150" : "#666",
                borderBottom:
                  selectedYear === year ? "3px solid #002150" : "none",
                transition: "all 0.3s ease",
                textAlign: "center",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                if (selectedYear !== year) {
                  e.target.style.color = "#002150";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedYear !== year) {
                  e.target.style.color = "#666";
                }
              }}
            >
              {year}
            </div>
          ))}
        </div>
      </div>

      {/* Milestone Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
          gap: "30px",
          padding: "20px 0",
          minHeight: "200px", // Prevent layout shift
        }}
      >
        {milestoneData[selectedYear]?.map((milestone, index) => (
          <div
            key={`${selectedYear}-${index}`}
            style={{
              backgroundColor: "#fff",
              border: "1px solid #e9ecef",
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              borderRadius: "8px",
              padding: "40px 30px",
              textAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              opacity: 0,
              animation: `fadeIn 0.6s ease-in-out ${index * 0.1}s forwards`,
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-5px)";
              e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "600",
                color: "#002150",
                marginBottom: "15px",
                letterSpacing: "1px",
              }}
            >
              {milestone.title}
            </h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#666",
                fontSize: "1rem",
                paddingBottom: "10px"
              }}
            >
             Land Area - {milestone.landArea}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#666",
                fontSize: "1rem",
              }}
            >
             Units - {milestone.Units}
            </div>
          </div>
        ))}
      </div>

      {/* No data message */}
      {(!milestoneData[selectedYear] ||
        milestoneData[selectedYear].length === 0) && (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            color: "#666",
            fontSize: "1.1rem",
          }}
        >
          No milestones available for {selectedYear}
        </div>
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default MilestoneTimeline;
