import Image from "next/image";
import React from "react";

const Row: React.FC<{ image: string; text: string }> = ({ image, text }) => {
  return (
    <div className="flex justify-center  gap-2 p-2 my-3">
      <Image className="ml-10" src={image} alt="e" width={30} height={10} />
      <h5 className="mt-3 px-2">{text}</h5>
    </div>
  );
};

export default Row;
