import Category from "@/components/Category";
import Logobar from "@/components/Logobar";
import Product from "@/components/Product";
import Navbar from "@/components/Navbar";
import Semi_cat from "@/components/Semi_cat";
import Topbar from "@/components/Topbar";
import Homeslider from "@/components/Homeslider";
import React from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const page = () => {
  return (
    <>
      <Topbar />
      <Logobar />
      <Navbar />
      <Category />
      <Semi_cat />

      <Homeslider />
      <Product />
    </>
  );
};

export default page;
