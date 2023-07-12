import React from "react";
import ImgTag from "./ImgTag";
import heroImg from "../assets/images/illustration-hero.svg";
import Button from "./Button";

const SubSection = ({ head, text, children,className }) => {
  return (
    <>
    
  
      <div className={`${className} flex flex-col justify-center`}>
        <h1 className="h1">{head}</h1>
        <p className="p">{text}</p>
        <div className="mt-6 flex gap-6 w-full">{children}</div>
      </div>
    </>
  );
};

export default SubSection;
