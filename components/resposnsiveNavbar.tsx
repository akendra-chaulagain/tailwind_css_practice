import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { MapPin, Menu, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const resposnsiveBar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger className="grid grid-cols-7 items-center bg-slate-300">
          {/* menu button */}
          <Menu size={30} />

          {/* location icon */}
          <div className="cursor-pointer">
            <MapPin />
          </div>
          {/* logo */}
          <div className=" col-span-3">
            <Link href={"/"}>
              {" "}
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={130}
                height={50}
                className="cursor-pointer mr-[10px]"
              />
            </Link>
          </div>

          {/* login icons */}
          <div>
            <Link href="/register" className=" cursor-pointer">
              <span>
                <User />
              </span>
            </Link>
          </div>
          {/* cart */}
          <div>
            <Link href="/register" className="flex cursor-pointer">
              <span>
                <ShoppingCart />
              </span>
              <span className="ml-[7px] hover:underline">(0)</span>
            </Link>
          </div>
        </SheetTrigger>
        <SheetContent>
          <div>
            <h1 className="text-[17px] font-bold mb-[10px]">MENU</h1>
            <div>
              <hr />
              <div className="my-[12px]">
                <Link href="/" className=" font-bold text-[13px]">
                  Home
                </Link>
              </div>
              <hr />
              <div className="my-[12px]">
                <Link href="/category" className=" font-bold text-[13px]">
                  New Arrivals
                </Link>
              </div>
              <hr />
              <div className="my-[12px]">
                <Link href="/category" className=" font-bold text-[13px]">
                  Clothing
                </Link>
              </div>
              <hr />{" "}
              <div className="my-[12px]">
                <Link href="/category" className=" font-bold text-[13px]">
                  Shoes
                </Link>
              </div>
              <hr />{" "}
              <div className="my-[12px]">
                <Link href="/category" className=" font-bold text-[13px]">
                  Accessories
                </Link>
              </div>
              <hr />
              <div className="my-[12px]">
                <Link href="/category" className=" font-bold text-[13px]">
                  Petite
                </Link>
              </div>
              <hr />{" "}
              <div className="my-[12px]">
                <Link href="/category" className=" font-bold text-[13px]">
                  Plus
                </Link>
              </div>
              <hr />{" "}
              <div className="my-[12px]">
                <Link href="/category" className=" font-bold text-[13px]">
                  T By Talbots
                </Link>
              </div>
              <hr />{" "}
              <div className="my-[12px]">
                <Link href="/category" className=" font-bold text-[13px]">
                  Haven well Within
                </Link>
              </div>
              <hr />
              <div className="my-[12px]">
                <Link href="/category" className=" font-bold text-[13px]">
                  The Edit
                </Link>
              </div>
              <hr />{" "}
              <div className="my-[12px]">
                <Link href="/category" className=" font-bold text-[13px]">
                  Sale
                </Link>
              </div>
              <hr />{" "}
              <div className="my-[12px]">
                <Link href="/register" className=" font-bold text-[13px]">
                  Sign In
                </Link>
              </div>
              <hr />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default resposnsiveBar;
