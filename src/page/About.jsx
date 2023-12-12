import React, { useEffect, useContext } from "react";
import { HeightContext } from "../context/HeighContext";

const About = () => {

  const { setAboutHeight } = useContext(HeightContext);

  useEffect(() => {
    setAboutHeight(document.querySelector(".about-container").getBoundingClientRect().top-100);
  }, [])

  return (
    <div className="about-container">
      <div className="about-wave"></div>
      <div className="about-content">
      <span className="mini-img"></span>
        <div className="about-title">
          <h1>
            Ben kimim...ismim, <br />
            <span>vizyonum</span>
          </h1>
        </div>
        <div className="about-text">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            laudantium maiores, sapiente accusamus repellendus non unde.
          </p>
        </div>
      </div>

      <div className="about-image">
        <img
          src="https://eat-curious.com/wp-content/uploads/2022/12/home-3.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
