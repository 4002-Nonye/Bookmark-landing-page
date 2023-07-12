import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Button from "./Button";

const Form = ({ placeHolder, setShowErr, showErr, className }) => {
  const [mail, setMail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) ||
      !mail
    ) {
      setShowErr(true);
      return false
    } else {
      setShowErr(false);
      setMail('')
    }
  };

  return (
    <form onSubmit= {handleSubmit} className="w-[full] md:flex gap-6 " action="#">
        <div>
        <input
        placeholder={placeHolder}
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        className={className}
      />
      {showErr && <ErrorMessage message="Whoops! make sure it's an email" />}
        </div>
      
   
        <Button className="flex h-full justify-center text-center w-full md:w-[9rem] mt-4 md:mt-0 px-4 hoverRed transition bg-soft-red rounded-md py-[8px] text-white hover:bg-white outline-none  hover:border-soft-red border-soft-red border-2">
          Contact Us
        </Button>
     
    </form>
  );
};

export default Form;

// if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
