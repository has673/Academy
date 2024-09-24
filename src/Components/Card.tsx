import Image from "next/image";
import React from "react";

const Card: React.FC<{ img: string; head: string; text: string }> = ({
  img,
  head,
  text,
}) => {
  return (
    <div className="bg-white w-20vw text-center p-2 my-5">
      <div className="flex justify-center">
        {" "}
        <Image src={img} alt="icon" width={60} height={10} />
      </div>

      <h3 className="font-semibold">{head}</h3>
      <p className="text-lg p-1">{text}</p>
    </div>
  );
};

export default Card;
