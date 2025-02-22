import React from "react";

const Topbar = () => {
  return (
    <>
      <div className=" bg-black h-auto  w-auto text-white text-[14px] ">
        <div className="flex justify-center items-center p-1.5">
          <div className="cursor-pointer pr-[14px]">
            25% DISCOUNT ON SCOTIA CREDIT CARD!
          </div>
          <div className="cursor-pointer text-[#c1c1c1]">
            <button className="underline mr-[7px] hover:text-white">
              SHOP NOW
            </button>
            <span className="mr-[7px] ">|</span>
            <button className="underline hover:text-white">DETAILS</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
