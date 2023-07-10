import React from "react";

const SubHead = ({head,text,className}) => {
  return (
    <>
    <div className={className}>
      <h1 className="lg:text-2xl text-[20px] font-extrabold">{head}</h1>
      <p className="text-center mt-4 text-grayish-blue lg:text-lg ">
      {text}
      </p>
      </div>
    </>
  );
};

export default SubHead;
