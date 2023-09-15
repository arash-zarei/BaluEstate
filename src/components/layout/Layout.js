import React from "react";

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
