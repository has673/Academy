import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center">
        <div className="ml-6">
          <img src="./logo.png" width={140} alt="Logo" />
        </div>

        <div className="flex gap-3 mr-6 items-center">
          <h5>Programs</h5>
          <h5>Programs</h5>
          <h5>Programs</h5>
          <h5>Programs</h5>
          <div className="border-2 border-border p-1">
            <h3 className="text-border font-medium text-center">
              Free Masterclasses
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
