import React from "react";

const Heading: React.FC<{ text: string }> = ({ text }) => {
  return <h1 className="text-4xl my-5 text-center font-semibold">{text}</h1>;
};

export default Heading;
