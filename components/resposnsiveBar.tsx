import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

const resposnsiveBar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div>
            <h1 className="text-[17px] font-bold mb-[10px]">MENU</h1>
            <div>
              <hr />
              <div className="my-[12px]">
                <Link href="//" className=" font-bold text-[13px]">
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
