import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-100 d-flex flex-row justify-content-start">
      <Sidebar />
      <div className="bg-light flex-fill p-4 text-dark">{children}</div>
    </div>
  );
};

export default Layout;
