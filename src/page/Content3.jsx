import React, { useContext, useEffect, useState } from "react";
import Content from "../share/Content";
import { HeightContext } from "../context/HeighContext";

const Content3 = () => {

  const { setContent3Height } = useContext(HeightContext);

  const [flexDirection, setFlexDirection] = useState("row-reverse");

  useEffect(() => {
    if(window.innerWidth < 768){
      setFlexDirection("column");
    }else{
      setFlexDirection("row-reverse");
    }

    setContent3Height(document.querySelector(".content-3").getBoundingClientRect().top-100);
  }, [])
  

  const title = "herkes için lezzetli yemekler";
  const text =
    "       Lorem ipsum dolor sit amet consectetur adipisicing elit. In, veniam fuga rerum quasi necessitatibus ducimus tempora enim modi quos quod?";

  return (
    <div className="content-3">
      <Content
        title={title}
        text={text}
        bgColor={"#042f1a"}
        img={"https://eat-curious.com/wp-content/uploads/2022/12/home-4.svg"}
        flexDirection={flexDirection}
        color={"white"}
      />
    </div>
  );
};

export default Content3;
