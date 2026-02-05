import React from "react";
import Navbar from "./../components/navbar/Navbar";
import Footer from "./../components/footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
