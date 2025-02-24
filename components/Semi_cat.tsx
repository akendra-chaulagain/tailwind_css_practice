import Image from "next/image";
import Link from "next/link";
import React from "react";

const Semi_cat = () => {
  return (
    <>
      <div className="mt-[50px]  mb-[25px]">
        <h1 className="flex justify-center font-semibold text-[30px] mb-[20px] tracking-wide text-[#848383]">
          #OUR CATEGORY
        </h1>
        <div className="grid grid-cols-6 mt-[25px] gap-4 px-7 mb-[25px]">
          <div className="gap-0">
            <Link href={"/category"}>
              <Image
                src="/images/semicat/s1.webp"
                alt="logo"
                width={400}
                height={0}
                className=" w-full h-full object-cover cursor-pointer"
              />

              <span
                className="flex justify-center font-bold underline mt-[6px]
          cursor-pointer hover:text-red-800"
              >
                SHIRTS
              </span>
            </Link>
          </div>
          <div>
            <Link href={"/category"}>
              <Image
                src="/images/semicat/s2.jpg"
                alt="logo"
                width={400}
                height={0}
                className=" w-full h-full object-cover cursor-pointer"
              />

              <span
                className="flex justify-center font-bold underline mt-[6px]
          cursor-pointer hover:text-red-800"
              >
                PANTS
              </span>
            </Link>
          </div>
          <div>
            <Link href={"/category"}>
              <Image
                src="/images/semicat/s3.jpg"
                alt="logo"
                width={400}
                height={0}
                className=" w-full h-full object-cover cursor-pointer"
              />
              <span
                className="flex justify-center font-bold underline mt-[6px]
          cursor-pointer hover:text-red-800"
              >
                SWEATERS
              </span>
            </Link>
          </div>
          <div>
            <Link href={"/category"}>
              <Image
                src="/images/semicat/s4.webp"
                alt="logo"
                width={400}
                height={0}
                className=" w-full h-full object-cover cursor-pointer"
              />
              <span
                className="flex justify-center font-bold underline mt-[6px]
          cursor-pointer hover:text-red-800"
              >
                JEANS
              </span>
            </Link>
          </div>
          <div>
            <Link href={"/category"}>
              <Image
                src="/images/semicat/s5.webp"
                alt="logo"
                width={400}
                height={0}
                className=" w-full h-full object-cover cursor-pointer"
              />
              <span
                className="flex justify-center font-bold underline mt-[6px]
          cursor-pointer hover:text-red-800"
              >
                TEES & KNITS
              </span>
            </Link>
          </div>
          <div>
            <Link href={"/category"}>
              <Image
                src="/images/semicat/s6.webp"
                alt="logo"
                width={400}
                height={0}
                className=" w-full h-full object-cover cursor-pointer"
              />
              <span
                className="flex justify-center font-bold underline mt-[6px]
          cursor-pointer hover:text-red-800"
              >
                DRESSES
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Semi_cat;
