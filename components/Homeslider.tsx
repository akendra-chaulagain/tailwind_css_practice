"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import product from "../product.json";

const Homeslider = () => {
  const settings = {
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    dots:true
  };

  return (
    <>
      <div className="mt-[60px]">
        <div>
          <h1 className="flex justify-center font-semibold text-[27px] mb-[5px] tracking-wide text-[#adb5bd]">
            #MYTALBOTS
          </h1>
          <p className="flex justify-center text-[17px] mb-[20px]">
            Follow us on Instagram @talbotsofficial for outfit inspiration and
            fun style tips.
          </p>
        </div>
        <Slider {...settings}>
          {/* <div>
            <Image
              src="/images/product/p1.webp"
              alt="Image 1"
              className="w-full h-auto"
              width={300}
              height={100}
            />
          </div> */}
          {product.map((data) => (
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

              <p className="text-[17px] ml-[6px]">{data.p}</p>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Homeslider;
