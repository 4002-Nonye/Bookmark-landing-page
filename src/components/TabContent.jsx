import React, { useState } from "react";
import SubSection from "./SubSection";
import Button from "./Button";
import ImgTag from "./ImgTag";

const TabContent = ({ slides, activeTab }) => {
  return (
    <div className="flex mt-20 items-center  flex-col md:flex-row  m-auto justify-center md:gap-[32px] md:w-[95%]">
      <div className="lg:w-[40rem]  h-[20rem]">
        <ImgTag
          src={slides.at(activeTab).img}
          className="md:w-[30rem] max-h-[25rem] w-[80%] m-auto md:m-0"
        />
      </div>

      <div className="md:w-[30rem]  md:h-[2rem] flex justify-center md:justify-end items-center md: w-[95%] ">
        {" "}
        <SubSection
          text={slides.at(activeTab).text}
          head={slides.at(activeTab).head}
          className='items-center md:items-start'
        >
          <Button className="m-auto  md:m-0 w-[30%] md:w-3/6 py-3  cursor-pointer transition text-white md:px-5 md:py-3 text-[16px] tracking-wide rounded-md bg-soft-blue hoverBlue border-2 border-soft-blue outline-none">
            More Info
          </Button>
        </SubSection>
      </div>
    </div>
  );
};

export default TabContent;
