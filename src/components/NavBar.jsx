import React, { useContext, useEffect, useState } from "react";
import { HeightContext } from "../context/HeighContext";

const NavBar = () => {
  const {
    aboutHeight,
    content1Height,
    content3Height,
    content4Height,
    title1Height,
    contactHeight,
  } = useContext(HeightContext);

  const [showMenu, setShowMenu] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleMenu = () => {
    setShowMenu(!showMenu);
    setMenuAnimation(!menuAnimation);

  };

  useEffect(() => {
    const handleShowNav = () => {
      if (window.pageYOffset > prevScrollPos) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setPrevScrollPos(window.pageYOffset);
    }
    window.addEventListener("scroll", handleShowNav);
    return () => {
      window.removeEventListener("scroll", handleShowNav);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const handleColorChange = () => {
      if (window.pageYOffset < aboutHeight && window.pageYOffset >= 0 ) {
        document.querySelector(".nav-logo").style.color = "#fff";
        document.querySelectorAll(".nav-item").forEach((item) => {
          item.style.color = "#fff";
        });
        document.querySelector(".nav-contact").style.color = "#042f1a";
        document.querySelector(".nav-contact").style.backgroundColor =
          "#ff73b5";
      }
      if (window.pageYOffset > aboutHeight) {
        document.querySelector(".nav-logo").style.color = "#042f1a";
        document.querySelectorAll(".nav-item").forEach((item) => {
          item.style.color = "#042f1a";
        });
        document.querySelector(".nav-contact").style.color = "#fff";
        document.querySelector(".nav-contact").style.backgroundColor =
          "#042f1a";
      }
      if (window.pageYOffset > content1Height) {
        document.querySelector(".nav-contact").style.color = "#042f1a";
        document.querySelector(".nav-contact").style.backgroundColor =
          "#ff73b5";
      }
      if (window.pageYOffset > content3Height) {
        document.querySelector(".nav-logo").style.color = "#fff";
        document.querySelectorAll(".nav-item").forEach((item) => {
          item.style.color = "#fff";
        });
        document.querySelector(".nav-contact").style.color = "#042f1a";
        document.querySelector(".nav-contact").style.backgroundColor =
          "#ff73b5";
      }
      if (window.pageYOffset > content4Height) {
        document.querySelector(".nav-logo").style.color = "#042f1a";
        document.querySelectorAll(".nav-item").forEach((item) => {
          item.style.color = "#042f1a";
        });
        document.querySelector(".nav-contact").style.color = "#042f1a";
        document.querySelector(".nav-contact").style.backgroundColor =
          "#ff73b5";
      }
      if (window.pageYOffset > title1Height) {
        document.querySelector(".nav-logo").style.color = "#fff";
        document.querySelectorAll(".nav-item").forEach((item) => {
          item.style.color = "#fff";
        });
        document.querySelector(".nav-contact").style.color = "#042f1a";
        document.querySelector(".nav-contact").style.backgroundColor =
          "#ff73b5";
      }
      if (window.pageYOffset > contactHeight) {
        document.querySelector(".nav-logo").style.color = "#042f1a";
        document.querySelectorAll(".nav-item").forEach((item) => {
          item.style.color = "#042f1a";
        });
        document.querySelector(".nav-contact").style.color = "#042f1a";
        document.querySelector(".nav-contact").style.backgroundColor =
          "#ff73b5";
      }
    };

    window.addEventListener("scroll", handleColorChange);

    return () => {
      window.removeEventListener("scroll", handleColorChange);
    };
  }, [
    aboutHeight,
    content1Height,
    content3Height,
    content4Height,
    title1Height,
    contactHeight,
  ]);

  return (
    <div className={`nav-container ${showNav ? "" : "hidden"}  ${showMenu ? "menu-active" : ""}`}>
      <ul className="nav-items">
        <li className="nav-item">Hakkımda</li>
        <li className="nav-item">programlar</li>
        <li className="nav-item nav-logo">
          Nuri <br />
          <span>bostan</span>
        </li>
        <li className="nav-item">tarifler</li>
        <li className="nav-item nav-contact">
          <div className="contact-group">
            <span>iletisim</span>
            <span>iletisim</span>
            <span>iletisim</span>
          </div>
        </li>
        <li className="menu-button" onClick={handleMenu}>
          <img src="https://resmim.net/cdn/2023/10/10/SqZVDL.png" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
