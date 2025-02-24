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
        <div className="grid  grid-cols-2">
          <div>
            <h2 className="text-[20px] font-semibold">FILTERS</h2>
          </div>
          {/* dropdown filter */}
          <div className="flex justify-end">
            <p className="flex items-center mr-[10px]">
              Showing <span className="font-bold mx-[5px]"> 2,682 </span> items
            </p>
            <div className="flex border-2 border-black py-[5px] pl-[25px] pr-[5px]">
              <DropdownMenu>
                <DropdownMenuTrigger>Select</DropdownMenuTrigger>
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
              <span className="ml-[30px]">
                <ChevronDown />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
