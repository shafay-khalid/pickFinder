import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <>
      <header>{<Navbar/>}</header>

      {/* main */}
      <main className=" mx-auto">
        <Outlet />
      </main>

      <footer>{/* footer */}</footer>
    </>
  );
};

export default MainLayout;
