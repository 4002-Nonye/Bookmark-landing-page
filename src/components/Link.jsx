import React from "react";

const Link = ({className='',linkText}) => {
  return (
    <>
      <a className={className}>{linkText}</a>
      
    </>
  );
};

export default Link;
