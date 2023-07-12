import React from "react";
import Button from "./Button";
import Section from "./Section";
import SubHead from "./SubHead";
import SubSection from "./SubSection";
import Tabbed from "./Tabbed";
import heroImg from "../assets/images/illustration-hero.svg";
import ImgTag from "./ImgTag";
import Card from "./Card";
import chromeImg from "../assets/images/logo-chrome.svg";
import firefoxImg from "../assets/images/logo-firefox.svg";
import operaImg from "../assets/images/logo-opera.svg";
import Accordion from "./Accordion";

const MainTag = ({faqs}) => {
  return (
    <main className="mt-24">
      <Section secClassName="flex lg:flex-row-reverse flex-col items-center lg:m-auto relative justify-center gap-[20px]">
        <div className="bg-soft-blue md:w-[30rem] w-[15rem] h-[12rem] lg:h-[15rem]  md:h-[20rem] rounded-l-full top-[100px] lg:top-[100px] xl:top-[200px] absolute right-0 z-[-100]"></div>

        <ImgTag src={heroImg} className="md:w-[30rem] xl:w-[40rem]" />
        <SubSection
          className=" w-[85%] lg:w-2/6 mt-24 lg:mt-0 md:items-center"
          text="  A clean and simple interface to organize your favourite websites.
          Open a new browser tab and see your sites load instantly. Try it for
          free. "
          head=" A Simple Bookmark Manager"
          imgSrc={heroImg}
        >
          {" "}
          <Button className=" w-full lg:w-4/6 py-3  cursor-pointer transition text-white lg:px-5 lg:py-3 text-[16px] tracking-wide rounded-md bg-soft-blue hoverBlue border-2 border-soft-blue outline-none">
            Get it on Chrome
          </Button>
          <Button className="w-full lg:w-4/6 cursor-pointer transition shadow-xl text-black lg:px-5 lg:py-3 text-[16px] tracking-wide rounded-md bg-slate-100 border-2 border-slate-100 hoverDark">
            {" "}
            Get it on Firefox
          </Button>
        </SubSection>
      </Section>

      <Section secClassName="flex flex-col items-center mt-11 relative ">
        <div className="bg-soft-blue lg:w-[25rem] md:w-[20rem] w-[15rem] h-[12rem] lg:h-[18rem]  md:h-[10rem] rounded-r-full top-[590px] lg:top-[500px] absolute left-0 z-[-100]"></div>
        <SubHead
          className="center md:w-4/6 lg:w-3/6 "
          head="FEATURES"
          text="Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go."
        />

        <Tabbed />
      </Section>

      <Section secClassName="flex flex-col items-center mt-24 lg:mt-36  justify-center m-auto w-[95%] lg:">
        <SubHead
          className="center md:w-4/6 lg:w-3/6"
          head="Download the extension"
          text="We’ve got more browsers in the pipeline. Please do let us know if you’ve 
          got a favourite you’d like us to prioritize."
        />

        <div className="flex flex-col w-[75%] lg:w-[95%]  mb-11 md:grid md:grid-cols-2 md:gap-11 xl:gap-x-28 mt-24 md:place-content-center lg:flex lg:flex-row">
          <Card
            src={chromeImg}
            className="      bg-white shadow-grayish-blue shadow-md rounded-md flex flex-col items-center justify-center h-full py-7  mb-11 w-[95%] lg:w-[15rem] m-auto lg:m-0 "
            imgClass="w-20"
            style={{gridArea:'1 / 1 / span 1 / span 1'}}
          >
            <h3 className="text-very-dark-blue font-black pt-2 text-lg">
              {" "}
              Add to Chrome
            </h3>
            <p className="text-grayish-blue text-[15px] mb-11 ">
            Minimum version 62
            </p>
            <hr className="w-full border-t-[7px] border-dotted mb-6 " />
            <Button className="border-2 border-soft-blue outline-none bg-soft-blue p-2 px-4 rounded-md hoverBlue transition text-white font-[500] text-sm ">
              Add & Install Extension
            </Button>
          </Card>
          <Card
            src={firefoxImg}
            className="bg-white shadow-grayish-blue shadow-md rounded-md flex flex-col items-center justify-center h-full py-7 lg:mt-[100px] mb-11 w-[95%] lg:w-[15rem] lg:m-0 m-auto"
            imgClass="w-20"
            style={{gridArea:'1 / 2 /span 1 / span 1'}}
          >
            <h3 className="text-very-dark-blue font-black pt-2 text-lg">
              {" "}
              Add to Firefox
            </h3>
            <p className="text-grayish-blue text-[15px] mb-11 ">
            Minimum version 55
            </p>{" "}
            <hr className="w-full border-t-[7px] border-dotted mb-6 " />
            <Button className="border-2 border-soft-blue outline-none bg-soft-blue p-2 px-4 rounded-md hoverBlue transition text-white font-[500] text-sm">
              Add & Install Extension
            </Button>
          </Card>{" "}
          <Card
            src={operaImg}
            className="bg-white md:justify-self-center md:self-end shadow-grayish-blue shadow-md rounded-md flex flex-col items-center justify-center h-full py-7 lg:mt-[200px] mb-11 w-[95%] md:w-[50%] lg:w-[15rem] lg:m-0 m-auto"
            imgClass="w-20"
            style={{gridArea:'2 / 1 /span 1 / span 2'}}
          >
            <h3 className="text-very-dark-blue font-black pt-2 text-lg">
              {" "}
              Add to Opera
            </h3>
            <p className="text-grayish-blue text-[15px] mb-8 ">
            Minimum version 46
            </p>
            <hr className="w-full border-t-[7px] border-dotted mb-6 " />

            <Button className="border-2 border-soft-blue outline-none bg-soft-blue p-2 px-4 rounded-md hoverBlue transition text-white font-[500] text-sm">
              Add & Install Extension
            </Button>
          </Card>
        </div>
      </Section>

      <Section secClassName="flex flex-col items-center mt-24 lg:mt-36  justify-center m-auto w-[95%] ">
        <SubHead
        className='center md:w-4/6 lg:w-3/6'
          head="Frequently Asked Questions"
          text="Here are some of our FAQs. If you have any other questions you’d like 
          answered please feel free to email us."
        ></SubHead>
           <Accordion faqs={faqs}/>
           <Button className="border-2 border-soft-blue mt-16 outline-none bg-soft-blue p-2 px-6 py-2 rounded-md hoverBlue transition text-white font-[500] text-lg">
            More Info
           </Button>
      </Section>
   
    </main>
  );
};

export default MainTag;
