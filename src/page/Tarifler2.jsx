import React, { useEffect, useState } from "react";
import TariflerData from "../data/TariflerData";

const Tarifler2 = () => {
  const [data, setData] = useState(TariflerData);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walkX = (x - startX) * 3;
    e.currentTarget.scrollLeft = scrollLeft - walkX;
  };

  return (
    <div className="tarifler2-container">
      <div
        className="tarifler2-wrapper"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="tarifler2-slide">
          {data.map((item, index) => (
            <div className="tarifler2-card" key={index}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tarifler2;
