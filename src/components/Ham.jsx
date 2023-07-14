import React, { useState } from "react";
import hamBurger from "../assets/images/icon-hamburger.svg";
import ImgTag from "./ImgTag";
import MobileNav from "./MobileNav";

const Ham = ({ isOpen, setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onNavOpen = () => {
    setIsOpen(true);
    setIsExpanded(true)
    document.body.classList.add('hide')
  };
  return (
    <>
      <div style={{
        display: isExpanded?'none' :'block'
      }}>
        <ImgTag
          src={hamBurger}
          className="w-6 cursor-pointer"
          onClick={onNavOpen}
          ariaExpanded={isExpanded}
        />
      </div>

      {isOpen && <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} setIsExpanded={setIsExpanded}  isExpanded={isExpanded} />}
    </>
  );
};

export default Ham;
