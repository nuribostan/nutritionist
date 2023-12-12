import React, { useContext, useEffect } from "react";
import { HeightContext } from "../context/HeighContext";

const Contact = () => {

  const { setContactHeight } = useContext(HeightContext);

  useEffect(() => {
    setContactHeight(document.querySelector(".contact-container").getBoundingClientRect().top-100);
  }, [])

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>konusalım?</h1>
        <div className="nav-contact contact-button">
          <div className="contact-group">
            <span>iletisim</span>
            <span>iletisim</span>
            <span>iletisim</span>
          </div>
        </div>
        <img
          src="https://eat-curious.com/wp-content/uploads/2022/12/home-6.svg"
          alt=""
        />
      </div>

    </div>
  );
};

export default Contact;
