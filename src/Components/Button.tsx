import React from "react";

const Button: React.FC<{ text: string }> = ({ text }) => {
  return <div className=" p-2 text-border border-blue-300">{text}</div>;
};

export default Button;
