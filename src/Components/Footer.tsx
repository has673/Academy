import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-evenly gap-5 mt-6  mb-10">
        <div>
          <div>
            <img src="./logo.png" width={140}></img>
          </div>

          <div className="mb-3">
            <h5 className=" text-black font-semibold">
              Helping ambitious learners upskill
            </h5>
            <h5 className=" text-black font-semibold">
              themselves & shift to top product
            </h5>
            <h5 className=" text-black font-semibold">Based Companies</h5>
          </div>
        </div>

        <div>
          <h4 className="text-border font-semibold p-2">About</h4>
          <h5 className="py-1">Programs</h5>
          <h5 className="py-1">Programs</h5>
          <h5 className="py-1">Programs</h5>
          <h5 className="py-1">Programs</h5>
        </div>
        <div>
          <h4 className="text-border font-semibold p-2">Links</h4>
          <h5 className="py-1">Programs</h5>
          <h5 className="py-1">Programs</h5>
          <h5 className="py-1">Programs</h5>
          <h5 className="py-1">Programs</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
