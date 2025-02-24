"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import Category from "../category.json";

const Product = () => {
  return (
    <>
      <div className="mt-[100px] mb-[40px] ">
        <h1 className="flex justify-center font-semibold text-[27px] mb-[20px] tracking-wide text-[#adb5bd]">
          #OUR PRODUCTS
        </h1>
        <div className="grid grid-cols-6">
          {Category.map((data) => (
            <div
              key={data.id}
              className="cursor-pointer border-2 border-[#f2f2f2] p-4 rounded "
            >
              <Image
                src={data.photo}
                alt="logo"
                width={300}
                height={100}
                className=" object-fill cursor-pointer ml-[6px]"
              />
              <h3 className="font-semibold text-[21px] text-red-800 ml-[6px]">
                ${data.price}
              </h3>
              <p className="text-[17px] ml-[6px]">{data.p}</p>
              <div className="flex ml-[6px]">
                <span className="flex mt-[6px] mb-[10px]">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </span>
                <span className="ml-[5px]">23</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
