import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Filter from "./components/Filter";
import Items from "./components/Items";
// import Link from "next/link";
{
  /* <div className="mt-[25px] px-[20px] text-[14px] font-bold hidden md:block"> */
}

const page = () => {
  //  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"></div>

  return (
    <>
      <div className="mt-[45px] px-[30px]">
        {/* category name */}
        <p className="flex justify-center text-gray-500">Clothing /</p>
        <h1 className="flex justify-center text-[30px] font-semibold mt-[4px]">
          CLOTHING
        </h1>
        {/* filter section */}
        {/* <div className="grid sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2"> */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
          <div>
            <h2 className="text-[23px] font-semibold ">FILTERS</h2>
          </div>
          {/* dropdown filter */}
          <div className="flex justify-end">
            <p className="flex items-center mr-[10px]">
              Showing <span className="font-bold mx-[5px]"> 2,682 </span> items
            </p>
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex border-2 border-gray-300 py-[5px] pl-[15px] pr-[5px]">
                  <span>Select</span>
                  <span className="ml-[30px] text-gray-400">
                    <ChevronDown />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Newest</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem></DropdownMenuItem>
                  <DropdownMenuItem>Price-High to Low</DropdownMenuItem>
                  <DropdownMenuItem>Price-Low to High</DropdownMenuItem>
                  <DropdownMenuItem>Rating</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* arrow */}
            </div>
          </div>
        </div>
        {/* div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"></div> */}
        {/* <div className="grid grid-cols-5 gap-4"> */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* filter components  */}
          <div className="sm:flex sm:justify-center">
            <Filter />
          </div>

          <div className="col-span-4  h-full w-full">
            {/* <Link href="/category/1">
              <Items />
            </Link> */}
            <Items />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
