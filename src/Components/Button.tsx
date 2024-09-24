import React from "react";

const Button: React.FC<{ text: string }> = ({ text }) => {
  return <div className="bg-white border-red-200 p-2 text-red-600">{text}</div>;
};

export default Button;
