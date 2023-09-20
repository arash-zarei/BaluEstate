import React from "react";

import Banner from "@/modules/HomePage/Banner";
import Attributes from "@/modules/HomePage/Attributes";
import Advertisement from "@/modules/HomePage/Advertisement";
import Category from "@/modules/HomePage/Category";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Attributes />
      <Category />
      <Advertisement />
    </>
  );
};

export default HomePage;
