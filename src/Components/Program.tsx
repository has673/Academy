import Image from "next/image";
import React from "react";

const Program: React.FC<{ icon: string; heading: string; text: string }> = ({
  icon,
  heading,
  text,
}) => {
  return (
    <div className="text-center flex flex-col items-center border-2 border-border  my-5 rounded-lg ">
      <Image
        src={icon}
        alt="icon"
        width={0}
        height={0}
        objectFit="cover"
        style={{ width: "100%", height: "auto" }}
      />
      <div className="p-8 bg-F5F9FF w-full">
        {" "}
        <h3 className="text-6xl my-5">{heading}</h3>
        <h5 className="text-4xl p-3 mb-5 text-justify">{text}</h5>
      </div>
    </div>
  );
};

export default Program;
