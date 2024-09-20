import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between">
        <div className="ml-6">
          <img src="./logo.png" width={140}></img>
        </div>

        <div className="flex justify-center gap-3 mt-7 mr-6 border-blue-200">
          <h5>Programs</h5>
          <h5>Programs</h5>
          <h5>Programs</h5>
          <h5>Programs</h5>
          <div className="border-purple-300 ">
            <h3 className="text-border">Free Masterclasses</h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
