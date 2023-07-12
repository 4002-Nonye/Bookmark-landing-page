import React, { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";
import tabImg1 from '../assets/images/illustration-features-tab-1.svg'
import tabImg2 from '../assets/images/illustration-features-tab-2.svg'
import tabImg3 from '../assets/images/illustration-features-tab-3.svg'

const slides = [
  {
    head: " Bookmark in one click",
    text: " Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    img:tabImg1
  },
  {
    head: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    img:tabImg2
  },
  {
    head: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    img:tabImg3
  },
];

const Tabbed = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className="border-b border-opacity-40 mt-24  border-grayish-blue flex flex-col lg:flex-row justify-between m-auto lg:w-[65%] w-[85%] text-center">
        {" "}
        <Tab
          num={0}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          text="Simple Bookmarking"
          className="tab"
        />
        <Tab
          num={1}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          text="Speedy Searching"
          className="tab"
        />
        <Tab
          num={2}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          text="Easy Sharing"
          className="tab"
        />
      </div>

      <TabContent slides={slides}  activeTab={activeTab}/>
    </>
  );
};

export default Tabbed;
