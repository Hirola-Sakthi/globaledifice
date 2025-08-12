import React from "react";
import "./whatsapp.css"

const WhatsappAction = () => {
  return (
    <>
      <a href="tel:+918043760152">
        <button class="btn-floating phone">
          <img
            src="/icons8-outgoing-call-100.png"
            width="30"
            height="30"
            alt="Phone"
          />
          <span>Call us</span>
        </button>
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=#&text=Hi%20I%20am%20looking%20for%20best%20constructors."
        target="_blank"
      >
        <button class="btn-floating whatsapp">
          <img
            src="/icons8-whatsapp-50.png"
            width="30"
            height="30"
            alt="WhatsApp"
          />
          <span>Chat</span>
        </button>
      </a>
    </>
  );
};

export default WhatsappAction;
