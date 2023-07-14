import React from "react";
import ImgTag from "./ImgTag";
import iconClose from "../assets/images/icon-close.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import Link from "./Link";
import Button from "./Button";

const MobileNav = ({ setIsOpen, setIsExpanded }) => {
  return (
    <div className="fixed z-20 inset-0 w-full m-auto bg-transparent-blue ">
      <div className="flex flex-col">
        <div className="flex justify-end items-center h-[5.8rem] px-7 md:px-14">
          <ImgTag
            src={iconClose}
            onClick={() => {
              setIsExpanded(false);
              setIsOpen(false);
              document.body.classList.remove('hide')
            }}
            className="w-5 cursor-pointer"
          />{" "}
        </div>
      
        <div className=" mt-11 ">
          <ul className="block text-center">
            <li className="border-t border-grayish-blue m-auto w-[70%] p-5" >
              {" "}
              <Link className=" hoverRed transition tracking-wide mr-0  text-white text-lg">
                FEATURES
              </Link>
            </li>
            <li className="border-t border-grayish-blue m-auto w-[70%] p-5">
              <Link className=" hoverRed transition tracking-wide mr-0   text-white text-lg">
                PRICING
              </Link>
            </li>
            <li className="border-t border-b border-grayish-blue m-auto w-[70%] p-5">
              <Link className=" hoverRed transition tracking-wide  mr-0   text-white text-lg">
                CONTACT
              </Link>
            </li>
          </ul>
          <Button className="border-2 border-white rounded-md w-[70%] tracking-wider text-lg m-auto text-white py-2 mt-6 justify-center flex items-center">
            LOGIN
          </Button>

          <div className="flex justify-center gap-9 mt-24">
            <ImgTag src={facebook}/>
            <ImgTag src={twitter}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
