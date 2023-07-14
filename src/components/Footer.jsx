import React, { useState } from "react";

import ImgTag from "./ImgTag";
import logo from "../assets/images/logo.svg";
import Link from "./Link";
import Form from "./Form";

const Footer = () => {
  const [showErr, setShowErr] = useState(false);
  return (
    <footer>
      <div className="mt-24 bg-soft-blue flex justify-center w-full flex-col items-center py-11">
        <div className="text-white flex flex-col justify-center">
          <div className="flex flex-col justify-center  items-center">
            <div className="text-center ">
              {" "}
              <p className="tracking-[0.3em] uppercase text-[14px]">
                35,000+ already joined
              </p>
              <p className="md:text-3xl text-[24px] mt-5 md:mt-9 mb-4  md:w-[24rem] font-semibold md:font-bold">
                Stay up-to-date with what we're doing
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 w-10/12 md:w-full items-center">
              <Form
                placeHolder="Enter your email address"
                showErr={showErr}
                setShowErr={setShowErr}
                className={`text-black md:w-96 sm:w-72 p-3  ${
                  showErr &&
                  "border-2 border-soft-red rounded-none rounded-t-md"
                } rounded-md outline-none`}
               
              />
             
            </div>
          </div>
        </div>
      </div>
      <div className="bg-very-dark-blue text-grayish-blue flex  justify-center w-full flex-col lg:flex-row items-center pt-11 pb-8">
        <div className="flex  justify-between w-[90%]  flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row items-center">
            {" "}
            <ImgTag src={logo} />
            <Link
             
              className="text-grayish-blue lg:my-0 my-8 text-xl mr-0 lg:ml-14 hoverRed transition tracking-wide "
            >Features</Link>
            <Link
             
              className="text-grayish-blue mb-8 lg:mb-0   text-xl mr-0 lg:ml-12 hoverRed transition tracking-wide "
            >Pricing</Link>
            <Link
             
              className="text-grayish-blue mb-8 lg:mb-0 text-xl mr-0 lg:ml-12 hoverRed transition tracking-wide "
            >Contact</Link>
          </div>

          <div className="flex w-[30%]  md:w-[15%] justify-between lg:w-[6%] cursor-pointer btm-foot ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                className="transition"
                fill="#FFF"
                fillRule="evenodd"
                d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                className="transition"
                fill="#FFF"
                fillRule="evenodd"
                d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"
              />
            </svg>
          </div>
        </div>
        
      </div>
      <div className=" bg-very-dark-blue ">
      <p className="attribution text-white tracking-wider text-center lg:text-right lg:pr-11" >
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="mr-0">Frontend Mentor</a>. Coded by <a href="https://github.com/4002-Nonye" className="mr-0">Nonye</a>.
    </p>
      </div>
      
      
     
    </footer>
  );
};

export default Footer;
