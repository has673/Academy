import Heading from "@/Components/Heading";
import SubHeading from "@/Components/SubHeading";
import Image from "next/image";

export default function Home() {
  return (
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
    </div>
  );
}
