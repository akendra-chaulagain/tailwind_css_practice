import React from "react";

import Filter from "./components/Filter";
import Items from "./components/Items";
// import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="mt-[45px] px-[30px]">
        {/* category name */}
        <p className="flex justify-center text-gray-500">Clothing /</p>
        <h1 className="flex justify-center text-[30px] font-semibold mt-[4px]">
          CLOTHING
        </h1>
        {/* filter section */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
          <div>
            <h2 className="text-[23px] font-semibold mb-[20px]">FILTERS</h2>
          </div>
          {/* dropdown filter */}
          <div className="flex  sm:hidden  md:hidden lg:block hidden">
            <div className="flex justify-end">
              <p className="flex items-center mr-[10px]">
                Showing <span className="font-bold mx-[5px]"> 2,682 </span>{" "}
                items
              </p>
            </div>

            {/* <div className="sm:hidden  md:hidden lg:block"> */}
          </div>
        </div>

        {/* <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4"> */}
        <div className="grid sm:grid-cols-1 md:grid-cols-1  grid-cols-1 lg:grid-cols-5">
          {/* filter components  */}

          <Filter />

          <Items />
        </div>
      </div>
    </>
  );
};

export default page;
