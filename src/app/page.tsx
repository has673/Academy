import Boss from "@/Components/Boss";
import Heading from "@/Components/Heading";
import Place from "@/Components/Place";
import SubHeading from "@/Components/SubHeading";
import array3 from "./data/array3";
import Program from "@/Components/Program";
import Button from "@/Components/Button";

export default function Home() {
  return (
    <>
      <div id="back">
        <div className="w-full h-1/6 flex justify-between">
          <div className=" ml-6 mt-10 w-full">
            <h1 className="text-white font-semibold text-4xl">
              Grab your Dream tech
            </h1>
            <h1 className="text-white font-semibold  text-4xl">offer today</h1>
            <ul className="text-white text-4xl p-2  list-disc ml-5">
              <li>
                A highly structured, personalized and guided word-class program
              </li>
              <li>Designed by industry expertst</li>
              <li>That will make you the best software developer out there</li>
              <li>
                For ambition learners, who don’t want to settle for anything
                less in their tech careers
              </li>
            </ul>
            <div className="ml-10  ">
              <Button text={"Apply Now"} />
            </div>
          </div>

          <div>
            <img
              id="img"
              src="./111.png"
              style={{
                width: "100%",
                marginRight: "10px",
                marginBottom: "30px",
              }}
            ></img>
          </div>
        </div>
      </div>
      <div>
        <img alt="7" src="/7.png"></img>
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
