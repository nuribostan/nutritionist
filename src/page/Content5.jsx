import React from "react";
import Content from "../share/Content";

const Content5 = () => {
  const title = "Tamamen dogal ürünler";
  const text =
    "       Lorem ipsum dolor sit amet consectetur adipisicing elit. In, veniam fuga rerum quasi necessitatibus ducimus tempora enim modi quos quod?";

  return (
    <div className="content-5">
      <Content 
        bgColor={"#042f1a"}
        img={
          "https://eat-curious.com/wp-content/uploads/2023/07/home-54-1024x576.jpg"
        }
        title={title}
        text={text}
        flexDirection={"row-reverse"}
        color={"white"}
      />
    </div>
  );
};

export default Content5;
