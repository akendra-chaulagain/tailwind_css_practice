import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <>
      <div className="grid grid-cols-6 mt-[50px]">
        <div className="cursor-pointer">
          <Image
            src="/images/semicat/s1.webp"
            alt="logo"
            width={250}
            height={100}
            className=" object-cover cursor-pointer"
          />
          <h3 className="font-semibold text-[24px] text-red-800">$399.00</h3>
          <p className="text-[19px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit....
          </p>
          <div className="flex">
            <span className="flex mt-[6px]">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
            <span className="ml-[5px]">23</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
