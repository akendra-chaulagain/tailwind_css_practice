import Image from "next/image";
import React from "react";

const Category = () => {
  return (
    <>
      <span className="flex justify-center mt-[20px] text-red-700">
        Discount will appear in shopping bag. Exclusions apply
      </span>

      <div className="grid grid-cols-4  text-[16px] mt-[35px]  w-full">
        {/* LEFY SIDE CATEGORY */}
        <div className="">
          <div className="relative text-center">
            <Image
              src="/images/homeCategory/h1.webp"
              alt="h1"
              width={400}
              height={400}
            />

            <button className="absolute translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2 bg-slate-200 px-[10px] py-[3px] opacity-90 hover:bg-white">
              SHIRTS
            </button>
          </div>
          <div className="relative text-center">
            <Image
              src="/images/homeCategory/h2.jpg"
              alt="h1"
              width={400}
              height={400}
            />

            <button className="absolute translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2 bg-slate-200 px-[10px] py-[3px] opacity-90 hover:bg-white">
              SWEATERS
            </button>
          </div>
        </div>

        {/* MIDDLE SIDE CATEGORY PHOTO */}
        <div className="col-span-2  ">
          <div className="relative text-center  overflow-hidden">
            <Image
              src="/images/homeCategory/h7.webp"
              alt="h3"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />

            <button className="absolute translate-x-[-50%] left-1/2 top-1/2 bg-slate-200 px-[10px] py-[3px] opacity-90 hover:bg-white">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* right part */}

        <div className="">
          <div className="relative text-center">
            <Image
              src="/images/homeCategory/h4.jpg"
              alt="h1"
              width={400}
              height={400}
            />

            <button className="absolute translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2 bg-slate-200 px-[10px] py-[3px] opacity-90 hover:bg-white">
              PANTS
            </button>
          </div>
          <div className="relative text-center">
            <Image
              src="/images/homeCategory/h5.webp"
              alt="h1"
              width={400}
              height={400}
            />

            <button className="absolute translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2 bg-slate-200 px-[10px] py-[3px] opacity-90 hover:bg-white">
              TEES AND KNITS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
