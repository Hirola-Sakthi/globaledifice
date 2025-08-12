import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component should be included in your app's main file (like App.js)
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a stored section to scroll to
    const scrollToSection = sessionStorage.getItem('scrollToSection');
    
    if (scrollToSection) {
      // Small delay to ensure the DOM is fully loaded
      setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Clear the stored section after scrolling
        sessionStorage.removeItem('scrollToSection');
      }, 500);
    }
  }, [location.pathname]);

  // This component doesn't render anything
  return null;
};

export default ScrollToSection;