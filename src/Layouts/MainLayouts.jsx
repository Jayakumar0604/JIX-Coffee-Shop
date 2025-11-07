import React from "react";
import Header from "../Components/Header/Index";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Index";

const MainLayouts = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayouts;
