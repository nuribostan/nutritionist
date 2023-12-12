import React, { useContext, useEffect, useState } from "react";
import Content from "../share/Content";
import { HeightContext } from "../context/HeighContext";

const Content1 = () => {

  const { setContent1Height } = useContext(HeightContext);

  const [flexDirection, setFlexDirection] = useState("row-reverse");

  useEffect(() => {
    if(window.innerWidth < 768){
      setFlexDirection("column");
    }else{
      setFlexDirection("row-reverse");
    }

    setContent1Height(document.querySelector(".content-1").getBoundingClientRect().top-100);
  }, [])


  const title = "saglıklı ve lezzetli yemekler";
  const text =
    "       Lorem ipsum dolor sit amet consectetur adipisicing elit. In, veniam fuga rerum quasi necessitatibus ducimus tempora enim modi quos quod?";

  return (
    <div className="content-1">
      <Content className="content1"
        bgColor={"#fff"}
        img={"https://eat-curious.com/wp-content/uploads/2022/12/home-5.svg"}
        flexDirection={flexDirection}
        title={title}
        text={text}
      />
    </div>
  );
};

export default Content1;
