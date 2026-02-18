import React from "react";
import Navbar from "./../components/navbar/Navbar";
import Footer from "./../components/footer/Footer";
import ScrollToTop from "../components/scroll/ScrollToTop";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayout;
