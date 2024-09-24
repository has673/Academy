import React from "react";

const SubHeading: React.FC<{ text: String }> = ({ text }) => {
  return <h4 className="text-4xl text-center  ">{text}</h4>;
};

export default SubHeading;
