import { createContext, useState } from "react";

export const HeightContext = createContext();

export const HeightProvider = ({ children }) => {
  const [aboutHeight, setAboutHeight] = useState(0);
  const [content1Height, setContent1Height] = useState(0);
  const [content2Height, setContent2Height] = useState(0);
  const [content3Height, setContent3Height] = useState(0);
  const [content4Height, setContent4Height] = useState(0);
  const [content5Height, setContent5Height] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [tariflerHeight, setTariflerHeight] = useState(0);
  const [tariflerHeight2, setTariflerHeight2] = useState(0);
  const [contactHeight, setContactHeight] = useState(0);
  const [contactHeight2, setContactHeight2] = useState(0);
  const [title1Height, setTitle1Height] = useState(0);

  return (
    <HeightContext.Provider
      value={{
        aboutHeight,
        setAboutHeight,
        content1Height,
        setContent1Height,
        content2Height,
        setContent2Height,
        content3Height,
        setContent3Height,
        content4Height,
        setContent4Height,
        content5Height,
        setContent5Height,
        tariflerHeight,
        setTariflerHeight,
        tariflerHeight2,
        setTariflerHeight2,
        contactHeight,
        setContactHeight,
        contactHeight2,
        setContactHeight2,
        footerHeight,
        setFooterHeight,
        title1Height,
        setTitle1Height,
      }}
    >
        {children}
    </HeightContext.Provider>
  );
};
