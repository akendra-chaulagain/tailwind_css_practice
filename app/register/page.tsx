"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen ">
        <div className="border-2 px-[30px] py-[50px]">
          <h1 className="text-[20px]  font-semibold mb-[13px] text-red-600">
            Create a new account{" "}
          </h1>
          <div className="">
            <input
              type="text"
              className="border-2 h-[50px] w-[400px] px-[10px] focus:border-red-600 focus:ring-1 outline-none rounded-lg"
              placeholder="First Name"
            />

            <br />
            <input
              type="text"
              className="border-2 mt-[20px] h-[50px] w-[400px] px-[10px] focus:border-red-600 focus:ring-1 outline-none rounded-lg"
              placeholder="Last Name"
            />
            <br />
            <input
              type="date"
              className="border-2 mt-[20px] h-[50px] w-[400px] px-[10px] focus:border-red-600 focus:ring-1 outline-none rounded-lg"
              placeholder="Date Of Birth"
            />

            <br />
            {/* <input
              type="select"
              className="border-2 mt-[20px] h-[50px] w-[400px] px-[10px] focus:border-red-600 focus:ring-1 outline-none rounded-lg"
              placeholder="Gender"
            /> */}
            <div className="mt-[20px] focus:border-red-600 focus:ring-1 outline-none rounded-lg">
              <Select>
                <SelectTrigger className="w-[400px] h-[50px]">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent className="focus:border-red-600 focus:ring-1 outline-none rounded-lg">
                  <SelectItem
                    value="light"
                    className="focus:border-red-600 focus:ring-1 outline-none rounded-lg"
                  >
                    Male
                  </SelectItem>
                  <SelectItem
                    value="dark"
                    className="focus:border-red-600 focus:ring-1 outline-none rounded-lg"
                  >
                    Female
                  </SelectItem>
                  <SelectItem
                    value="system"
                    className="focus:border-red-600 focus:ring-1 outline-none rounded-lg"
                  >
                    Others
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <br />
            <input
              type="text"
              className="border-2  h-[50px] w-[400px] px-[10px] focus:border-red-600 focus:ring-1 outline-none rounded-lg"
              placeholder="Password"
            />
            <br />
            <input
              type="text"
              className="border-2 mt-[20px] h-[50px] w-[400px] px-[10px] focus:border-red-600 focus:ring-1 outline-none rounded-lg"
              placeholder="Confirm Password"
            />
            <div className="mt-[20px] ">
              <Button className="bg-red-600 text-white border-2 w-[400px] hover:text-black hover:bg-white px-[40px] py-[25px]">
                REGISTER
              </Button>
            </div>
          </div>
          <span className="flex justify-center my-[8px] text-gray-500 cursor-pointer hover:text-red-600">
            Forget Password ?
          </span>
          <hr />

          <div className="mt-[20px]">
            <Link
              href="/login"
              className="  text-gray-500 cursor-pointer hover:text-red-600 "
            >
              Already have an account ?{" "}
              <span className="text-red-600 underline">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
