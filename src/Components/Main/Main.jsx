import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
