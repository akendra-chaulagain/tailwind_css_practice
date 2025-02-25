import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="mt-[45px] px-[30px] ">
        <h1 className="flex justify-center text-[30px] font-semibold my-[20px]">
          MY CART
        </h1>

        <div className="grid grid-cols-6">
          <div
            className="col-span-4 gap-2  bg-[#f7f7f7] px-[30px] py-[30px]
 "
          >
            <div className="grid grid-cols-5">
              <div>
                <Image
                  src="/images/product/1.webp"
                  alt="logo"
                  width={170}
                  height={100}
                  className=" object-fill cursor-pointer "
                />
              </div>
              {/* items details */}
              <div className="col-span-3">
                <h2 className="text-[17px] font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  eveniet iusto cumque nisi laudantium voluptates cupiditate
                  veritatis fugit....
                </h2>
                <span className="text-red-600 cursor-pointer text-[13px]">
                  In Stock
                </span>
                <br />
                {/* items shipping details */}
                <span className="text-gray-600 cursor-pointer text-[14px]">
                  Ships from and sold by Amazon.ca
                </span>
                <br />
                <span className="text-gray-600 text-[15px]">
                  Eligible for FREE Shipping
                </span>

                {/* item counter */}

                <div className="flex my-[20px]">
                  <div className="flex items-center gap-6 border-2 px-[16px] py-[3px]">
                    <span className=" cursor-pointer hover:text-red-600">
                      <Trash2 size={"19px"} />
                    </span>
                    <p className="text-[20px] font-semibold ">1</p>{" "}
                    <span className="text-[20px] cursor-pointer  hover:text-red-600">
                      +
                    </span>
                  </div>
                </div>
                <Link
                  href="/category/1"
                  className="text-[15px] text-red-600 underline"
                >
                  Product details
                </Link>
              </div>

              <div className="flex justify-center">
                <p className="text-[20px] font-semibold">$467.99</p>
              </div>
            </div>

            {/* second item */}

            <div className="grid grid-cols-5  ">
              <div>
                <Image
                  src="/images/product/p4.webp"
                  alt="logo"
                  width={170}
                  height={100}
                  className=" object-fill cursor-pointer "
                />
              </div>
              {/* items details */}
              <div className="col-span-3">
                <h2 className="text-[17px] font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  eveniet iusto cumque nisi laudantium voluptates cupiditate
                  veritatis fugit....
                </h2>
                <span className="text-red-600 cursor-pointer text-[13px]">
                  In Stock
                </span>
                <br />
                {/* items shipping details */}
                <span className="text-gray-600 cursor-pointer text-[14px]">
                  Ships from and sold by Amazon.ca
                </span>
                <br />
                <span className="text-gray-600 text-[15px]">
                  Eligible for FREE Shipping
                </span>

                {/* item counter */}

                <div className="flex my-[20px]">
                  <div className="flex items-center gap-6 border-2 px-[16px] py-[3px]">
                    <span className=" cursor-pointer hover:text-red-600">
                      <Trash2 size={"19px"} />
                    </span>
                    <p className="text-[20px] font-semibold ">1</p>{" "}
                    <span className="text-[20px] cursor-pointer  hover:text-red-600">
                      +
                    </span>
                  </div>
                </div>
                <Link
                  href="/category/1"
                  className="text-[15px] text-red-600 underline"
                >
                  Product details
                </Link>
              </div>

              <div className="flex justify-center">
                <p className="text-[20px] font-semibold">$579.99</p>
              </div>
            </div>
            <hr className="mt-[20px]" />
            <div className="flex justify-end">
              <p>
                Subtotal (1 item): <span className="font-bold text-[18px]">$1,249.00</span>{" "}
              </p>
            </div>
          </div>

          {/* <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatum, eligendi?
          </div> */}
        </div>
      </div>
    </>
  );
};

export default page;
