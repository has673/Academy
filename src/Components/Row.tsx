import Image from "next/image";
import React from "react";

const Row: React.FC<{ image: string; text: string }> = ({ image, text }) => {
  return (
    <div className="flex justify-center">
      <Image className="mr-10" src={image} alt="e" width={30} height={30} />
      <h5>{text}</h5>
    </div>
  );
};

export default Row;
