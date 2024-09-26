import React from "react";

const Button: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="bg-white p-1 text-border border-2 border-border w-1/12 rounded-md my-9 text-xl text-center ">
      {text}
    </div>
  );
};

export default Button;
