import React from "react";

const Link = ({className='',linkText,href='#'}) => {
  return (
    <>
      <a className={className} href={href}>{linkText}</a>
      
    </>
  );
};

export default Link;
