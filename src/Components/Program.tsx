import Image from "next/image";
import React from "react";

const Program: React.FC<{ icon: string; heading: string; text: string }> = ({
  icon,
  heading,
  text,
}) => {
  return (
    <div className="text-center flex flex-col items-center border-2 border-border p-2 my-5 rounded-lg">
      <Image
        src={icon}
        alt="icon"
        width={300}
        height={400}
        className="flex justify-center"
      />
      <h3>{heading}</h3>
      <h5>{text}</h5>
    </div>
  );
};

export default Program;
