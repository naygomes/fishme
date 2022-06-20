import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <div className="h-100 d-flex flex-row justify-content-start">
      <Sidebar />
      <div className="bg-light flex-fill p-5 text-dark ">
        <Topbar name="Fernando Ruas">{children}</Topbar>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
