import React from "react";

const ErrorMessage = ({ message }) => {
  return (
   
      <div className="bg-soft-red text-[13px] p-1 italic rounded-b-md">{message}</div>

  );
};

export default ErrorMessage;
