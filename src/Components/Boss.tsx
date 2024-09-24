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
      <div className="flex mt-10">
        <div className="bg-F5F9FF  w-auto h-4/5  mb-6">
          {array2.map((item, index) => (
            <Row image={item.icon} text={item.text} key={index} />
          ))}
        </div>
        <div>
          <Image src="/5.png" alt="ok" width={600} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Boss;
