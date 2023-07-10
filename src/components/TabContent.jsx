import React, { useState } from "react";
import SubSection from "./SubSection";
import Button from "./Button";
import ImgTag from "./ImgTag";

const TabContent = ({ slides, activeTab }) => {
  return (
    <div className="flex mt-20 items-center flex-col lg:flex-row  m-auto justify-center ">
      <div className="lg:w-[40rem]  h-[20rem]">
        <ImgTag
          src={slides.at(activeTab).img}
          className="lg:w-[30rem] max-h-[25rem] w-[80%] m-auto lg:m-0"
        />
      </div>

      <div className="lg:w-[30rem]  lg:h-[2rem] flex justify-center items-center w-[95%] ">
        {" "}
        <SubSection
          text={slides.at(activeTab).text}
          head={slides.at(activeTab).head}
        >
          <Button className="m-auto lg:m-0 w-[30%] lg:w-2/6 py-3  cursor-pointer transition text-white lg:px-5 lg:py-3 text-[16px] tracking-wide rounded-md bg-soft-blue hoverBlue border-2 border-soft-blue outline-none">
            More Info
          </Button>
        </SubSection>
      </div>
    </div>
  );
};

export default TabContent;
