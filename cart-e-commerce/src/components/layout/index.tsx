import { Outlet } from "react-router-dom";
import Header from "../header";

import React from "react";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
