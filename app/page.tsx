import Category from "@/components/Category";
import Logobar from "@/components/Logobar";
import Navbar from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import React from "react";

const page = () => {
  return (
    <>
      <Topbar />
      <Logobar />
      <Navbar />
      <Category />
    </>
  );
};

export default page;
