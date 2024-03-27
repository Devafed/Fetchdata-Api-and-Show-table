import React from "react";
import Sidebar from "./sidebar";
import TableData from "./table-data";

export default function Layout() {
  return (
    <div className="container">
        <Sidebar />
        <TableData />
    </div>
  );
}
