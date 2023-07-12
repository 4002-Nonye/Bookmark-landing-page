import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ faqs }) => {
  return (
    <div className="mt-24 w-[80%] m-auto">
        <div className="xl:w-[50%] lg:w-[80%] md:w-[70%] m-auto">
        {faqs.map((faq, i) => (
        <AccordionItem faq={faq} key={i} />
      ))}

        </div>
    
    </div>
  );
};

export default Accordion;
