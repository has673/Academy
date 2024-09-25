import Boss from "@/Components/Boss";
import Heading from "@/Components/Heading";
import Place from "@/Components/Place";
import SubHeading from "@/Components/SubHeading";
import Image from "next/image";
import array3 from "./data/array3";
import Program from "@/Components/Program";

export default function Home() {
  return (
    <>
      <div id="back" className="w-full h-1/6 flex justify-between">
        <div className="w-1/2 ml-6 mt-10">
          <h1 className="text-white font-semibold text-4xl">
            Grab your Dream tech
          </h1>
          <h1 className="text-white font-semibold  text-4xl">offer today</h1>
          <ul className="text-white text-xl p-2  list-disc">
            <li>
              A highly structured, personalized and guided word-class program
            </li>
            <li>Designed by industry expertst</li>
            <li>That will make you the best software developer out there</li>
            <li>
              For ambition learners, who don’t want to settle for anything less
              in their tech careers
            </li>
          </ul>
        </div>
        <div>
          <img id="img" src="./6.png" width={500}></img>
        </div>
      </div>
      <div>
        <img src="/7.png"></img>
        <div className="text-center font-bold">
          {" "}
          <Heading text="Our Programs" />
          <SubHeading
            text={
              "Ace Your Skills In Problem Solving In DSA, System Design And Developement"
            }
          />
        </div>
        {array3.map((item, index) => (
          <div className="flex flex-col items-center">
            <Program
              icon={item.icon}
              text={item.text}
              heading={item.heading}
              key={index}
            />
          </div>
        ))}
      </div>
      <Boss />
      <Place />
    </>
  );
}
