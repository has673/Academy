import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import Image from "next/image";
import array2 from "@/app/data/array2";
import Row from "./Row";

const Boss = () => {
  return (
    <div className="bg-white w-full h-auto">
      <Heading text={"Bosscoder end-to-end solutions"} />
      <SubHeading
        text={
          "to give you an immersive learning experience and help you ace  in your tech career"
        }
      />
      <div className="flex mt-10 items-start justify-between">
        <div className="bg-F5F9FF  mb-6  rounded-r-lg mt-20 p-2">
          {array2.map((item, index) => (
            <Row image={item.icon} text={item.text} key={index} />
          ))}
        </div>
        <div className="w-7/12">
          <Image src="/5.png" alt="ok" width={1000} height={10} />
        </div>
      </div>
    </div>
  );
};

export default Boss;
