import Image from "next/image";
import Link from "next/link";
import React from "react";
import ResposnsiveBar from "@/components/resposnsiveNavbar";

const Category = () => {
  return (
    <>
   
        <ResposnsiveBar />
      

      {/* for bi display bigger than 1024px */}

      <span className="flex justify-center mt-[20px] text-red-700">
        Discount will appear in shopping bag. Exclusions apply
      </span>

      <div className="grid grid-cols-4  text-[16px] mt-[35px]    ">
        {/* LEFY SIDE CATEGORY */}
        <div className="">
          <div className="relative text-center ">
            <Link href={"/category"}>
              <Image
                src="/images/homeCategory/h1.webp"
                alt="h1"
                width={400}
                height={400}
                className="md:mw-0"
              />

              <button className="absolute translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2 bg-slate-200 px-[10px] py-[3px] opacity-90 hover:bg-white">
                SHIRTS
              </button>
            </Link>
          </div>
          <div className="relative text-center">
            <Link href={"/category"}>
              <Image
                src="/images/homeCategory/h2.jpg"
                alt="h1"
                width={400}
                height={400}
              />

              <button className="absolute translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2 bg-slate-200 px-[10px] py-[3px] opacity-90 hover:bg-white">
                SWEATERS
              </button>
            </Link>
          </div>
        </div>

        {/* MIDDLE SIDE CATEGORY PHOTO */}
        <div className="col-span-2  ">
          <div className="relative text-center  overflow-hidden">
            <Link href={"/category"}>
              <Image
                src="/images/homeCategory/h7.webp"
                alt="h3"
                width={1000}
                height={1000}
                className=" h-[88.7vh]  object-cover"
              />

              <button className="absolute translate-x-[-50%] left-1/2 top-1/2 bg-slate-200 px-[10px] py-[3px] opacity-90 hover:bg-white">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>

        {/* right part */}

        <div className="">
          <div className="relative text-center">
            <Link href={"/category"}>
              <Image
                src="/images/homeCategory/h4.jpg"
                alt="h1"
                width={400}
                height={400}
              />

              <button className="absolute translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2 bg-slate-200 px-[10px] py-[3px] opacity-90 hover:bg-white">
                PANTS
              </button>
            </Link>
          </div>
          <div className="relative text-center">
            <Link href={"/category"}>
              <Image
                src="/images/homeCategory/h5.webp"
                alt="h1"
                width={400}
                height={400}
              />

              <button className="absolute translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2 bg-slate-200 px-[10px] py-[3px] opacity-90 hover:bg-white">
                TEES AND KNITS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
