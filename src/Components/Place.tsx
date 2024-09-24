import React from "react";
import Heading from "./Heading";
import SubHeading from "./SubHeading";
import array from "../app/data/array";
import Card from "./Card";
import Button from "./button";
const Place = () => {
  return (
    <div className="bg-F5F9FF h-full text-center">
      <Heading text="Placement and career support" />
      <SubHeading
        text={"Helping students get exposed to  a world opportunitities"}
      />
      <div className="flex justify-center gap-8">
        {array.map((item, index) => (
          <Card
            img={item.icon}
            head={item.heading}
            text={item.text}
            key={index}
          />
        ))}
      </div>
      <Button text="Know More" />
    </div>
  );
};

export default Place;
