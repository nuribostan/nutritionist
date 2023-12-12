import React, { useContext, useEffect } from "react";
import { HeightContext } from "../context/HeighContext";

const Content4 = () => {


  const { setContent4Height } = useContext(HeightContext);

  useEffect(() => {
    setContent4Height(document.querySelector(".content4-container").getBoundingClientRect().top-100);
  }, [])
  return (
    <div className="content4-container">
      <div className="content4">
        <div className="content4-title">
          <h1>özellikler ve <br /><span>faydalar</span></h1>
        </div>

        <div className="content4-group">
          <div className="content4-item">
            <img
              src="https://eat-curious.com/wp-content/uploads/2022/12/home-9.png"
              alt=""
            />
            <div className="content4-item-g">
              <h2>Sebze tabanli</h2>
              <p>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="content4-item">
            <img
              src="https://eat-curious.com/wp-content/uploads/2022/12/home-11.png"
              alt=""
            />
            <div className="content4-item-g">
              <h2>Doğal besinler</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, rerum.</p>
            </div>
          </div>
          <div className="content4-item">
            <img
              src="https://eat-curious.com/wp-content/uploads/2022/12/home-12.png"
              alt=""
            />

            <div className="content4-item-g">
              <h2>Eğlenceli besinler</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="content4-item">
            <img
              src="https://eat-curious.com/wp-content/uploads/2022/12/home-10.png"
              alt=""
            />
            <div className="content4-item-g">
              <h2>Lezzetli besinler</h2>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content4;
