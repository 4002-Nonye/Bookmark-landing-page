import React from "react";
import TabContent from "./TabContent";

const Tab = ({ text, className, setActiveTab, activeTab, num }) => {
  return (
    <>
      {" "}
      <p
        className={`${className} ${
          activeTab === num ? "active transition" : ""
        }`}
        onClick={() => {
          setActiveTab(num);
        }}
      >
        {text}
      </p>
    </>
  );
};

export default Tab;
