import Category from "@/components/Category";
import Logobar from "@/components/Logobar";
import Product from "@/components/Product";
import Navbar from "@/components/Navbar";
import Semi_cat from "@/components/Semi_cat";
import Topbar from "@/components/Topbar";
import React from "react";

const page = () => {
  return (
    <>
      <Topbar />
      <Logobar />
      <Navbar />
      <Category />
      <Semi_cat />
      <Product />
      
    </>
  );
};

export default page;
