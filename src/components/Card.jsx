import React from "react";
import ImgTag from "./ImgTag";


const Card = ({ src, children, className,imgClass }) => {
  return (
    <div className={className}>
      <ImgTag src={src} className={imgClass}/>
     

      {children}
    </div>
  );
};

export default Card;
