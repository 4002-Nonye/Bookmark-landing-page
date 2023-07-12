import React from "react";
import ImgTag from "./ImgTag";


const Card = ({ src, children, className,imgClass,style }) => {
  return (
    <div className={className} style={style}>
      <ImgTag src={src} className={imgClass}/>
     

      {children}
    </div>
  );
};

export default Card;
