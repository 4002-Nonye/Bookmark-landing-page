import React, { useState } from "react";



const AccordionItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="border-b-grayish-blue border-b py-[1rem]"
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <div className="flex justify-between w-full mb-3 cursor-pointer text-very-dark-blue ">
        <span className="text-very-dark-blue text-[16px] md:text-lg font-[600] hoverRed transition">
          {faq.question}
        </span>
        {isOpen ? (
            <svg
            xmlns="http://www.w3.org/2000/svg"
         className="w-7"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke={isOpen?'hsl(0, 94%, 66%)':'currentColor'}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="M112 328l144-144 144 144"
            />
          </svg>
       
        ) : (
            <svg
            xmlns="http://www.w3.org/2000/svg"
         className="w-7"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke={isOpen?'hsl(0, 94%, 66%)':'currentColor'}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="M112 184l144 144 144-144"
            />
          </svg>
        )}
      </div>

      {isOpen && <p className="text-[15px] md:text-[16px] text-grayish-blue block py-3">{faq.answer}</p>}
    </div>
  );
};

export default AccordionItem;
