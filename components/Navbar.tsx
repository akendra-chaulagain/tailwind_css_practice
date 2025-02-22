import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="mt-[25px] px-[20px] text-[14px] font-bold">
        <ul className="flex justify-between">
          <li className=" cursor-pointer hover:underline hover:text-red-800">
            Home
          </li>
          <li className=" cursor-pointer hover:underline hover:text-red-800">
            New Arrivals
          </li>
          <li className=" cursor-pointer hover:underline hover:text-red-800">
            Clothing
          </li>
          <li className=" cursor-pointer hover:underline hover:text-red-800">
            Shoes
          </li>
          <li className=" cursor-pointer hover:underline hover:text-red-800">
            Accessories
          </li>
          <li className=" cursor-pointer hover:underline hover:text-red-800">
            Petite
          </li>
          <li className=" cursor-pointer hover:underline hover:text-red-800">
            T By Talbots
          </li>
          <li className=" cursor-pointer hover:underline hover:text-red-800">
            Havan Well Within
          </li>
          <li className=" cursor-pointer hover:underline hover:text-red-800">
            The Edit
          </li>
          <li className=" cursor-pointer hover:underline hover:text-red-800">
            Sale
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
