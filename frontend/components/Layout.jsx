import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children, title }) => {
  return (
    <div className="h-100 d-flex flex-row justify-content-start">
      <Sidebar />
      <div className="h-100 bg-light flex-fill p-5 text-dark col offset-2">
        <Topbar name="Fernando Ruas">{title}</Topbar>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
