import React, { useEffect, useState } from "react";
import Content from "../share/Content";

const Content2 = () => {

  const [flexDirection, setFlexDirection] = useState("row");

  useEffect(() => {
    if(window.innerWidth < 768){
      setFlexDirection("column");
    }else{
      setFlexDirection("row");
    }
  }, [])

  const title = "gucunu pozitiflikten al";
  const text =
    "       Lorem ipsum dolor sit amet consectetur adipisicing elit. In, veniam fuga rerum quasi necessitatibus ducimus tempora enim modi quos quod?";

  return (
    <div className="content-2">
      <Content
        bgColor={"#d4ed6d"}
        title={title}
        text={text}
        img={"https://eat-curious.com/wp-content/uploads/2022/12/home-7.svg"}
        flexDirection={"flexDirection"}
      />
    </div>
  );
};

export default Content2;
