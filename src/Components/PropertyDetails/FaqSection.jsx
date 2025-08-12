import React, { useState } from "react";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const itemsToShow = [
    {
      question:
        "What is the starting price for Global Edifice Legacy and Orlean projects?",
      answer:
        "Global Edifice brings you premium residential projects with modern amenities and strategic locations. Our flagship projects Global Edifice Legacy start from INR 73 lakhs*, while our luxury project Orlean offers premium living spaces starting from INR 76 lakhs*.",
    },
    {
      question: "What is Global Edifice's history, mission and vision?",
      answer:
        "With over 10 years of excellence in the real estate market, Global Edifice has established itself as one of the top builders in Bangalore. Our mission is to transform dreams into reality for every homebuyer by developing gated communities and affordable flats that offer more than just living spaces. Our vision encompasses creating vibrant hubs that offer comfort, foster relationships, and stand as assets to be proud of, while making Bangalore's real estate market more dynamic for future generations.",
    },
    {
      question:
        "How is Global Edifice committed to sustainability and innovation?",
      answer:
        "At Global Edifice, we believe in creating sustainable communities that harmonize with the environment. Our projects incorporate rainwater harvesting systems, solar panels for common areas, energy-efficient lighting, and extensive green spaces. We use eco-friendly construction materials wherever possible and ensure our developments have a minimal carbon footprint. Our innovative designs balance modern aesthetics with environmental responsibility, creating spaces that are not just beautiful but also sustainable for generations to come.",
    },
    {
      question: "Where are Global Edifice projects located in Bangalore?",
      answer:
        "Global Edifice has strategically positioned projects across Bangalore's most promising locations. Our developments can be found in high-growth areas such as Electronic City, South Bangalore, Bommasandra, Thirumagondanahalli, and Sarjapura. Each location is chosen based on connectivity, infrastructure development potential, and quality of life factors. Contact us at (+91 80 4376 0152) or email (info@globaledifice.in) to learn more about our project locations.",
    },
    {
      question: "Can we book a site visit for your projects?",
      answer:
        "Absolutely! We encourage potential homebuyers to visit our projects before making their decision. Our team conducts guided site visits where you can experience the quality of construction, amenities, and neighborhood firsthand. You can schedule a site visit by calling our customer care at (+91 80 4376 0152) or by filling out the site visit request form on our website. Our representatives will arrange a visit at your convenience and answer all your questions about the property.",
    },
    {
      question:
        "What is the process for purchasing a home with Global Edifice?",
      answer:
        "At Global Edifice, we've simplified the home-buying journey into a seamless 5-step process. It begins with a personalized consultation to understand your requirements and budget preferences. Next, we help you select the perfect property from our portfolio that aligns with your needs. After arranging a comprehensive site visit, our team assists with all financial aspects including loan arrangements and payment plans. Finally, we handle all legal documentation and registration procedures, ensuring a hassle-free purchase experience. Our customer relationship team remains available even after purchase to assist with any queries or support you might need.",
    },
    {
      question: "What amenities do Global Edifice projects offer?",
      answer:
        "Global Edifice projects are designed with a comprehensive suite of amenities to enhance your lifestyle. Our residential complexes feature state-of-the-art clubhouses, swimming pools, fully-equipped gymnasiums, landscaped gardens, children's play areas, indoor games rooms, multipurpose halls, and dedicated senior citizen corners. Security is paramount with 24/7 surveillance, intercom facilities, and trained security personnel. Additionally, most of our projects offer smart home features, power backup, covered parking, and visitor parking spaces. We believe in creating self-sufficient communities where everything you need is within reach.",
    },
    {
      question: "Does Global Edifice offer any post-handover services?",
      answer:
        "Yes, our commitment to excellence extends beyond project completion. Global Edifice provides comprehensive post-handover services including a dedicated maintenance team, regular property inspections, and prompt resolution of any construction-related issues during the warranty period. We also assist with utility connections, interior design recommendations, and rental management services if required. Our customer service department remains accessible to address any concerns, ensuring your home ownership experience remains pleasant and worry-free for years to come.",
    },
  ];
  return (
    <>
      <div className="FaqSection-main-parent" id="faqsection">
        <div className="FaqSection-sub-parent">
          <div className="row">
            <div className="col-md-4">
              <div className="Faq-left">
                <h1>Frequently Asked Questions</h1>
              </div>
            </div>
            <div className="col-md-8">
              <div className="Faq-right">
                <div className="Investfaq-parent">
                  <div className="container">
                    <div className="row">
                      {itemsToShow.map((item, index) => (
                        <div key={index} className="col-md-12 p-0">
                          <div className="accordion-item">
                            <div
                              className="accordion-item-title"
                              onClick={() => handleToggle(index)}
                            >
                              <p>{item.question}</p>
                              <span className="icon">
                                {openIndex === index ? "-" : "+"}
                              </span>
                            </div>
                            {openIndex === index && (
                              <div className="accordion-item-desc">
                                {item.answer}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
