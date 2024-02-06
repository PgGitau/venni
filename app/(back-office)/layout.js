import Navbar from "@/components/backoffice/Navbar/Navbar";
import Sidebar from "@/components/backoffice/Sidebar/Sidebar";
import React from "react";
import './layout.css'

export default function Layout({ children }) {
  return (
    <div className='dashboard-container flex'>
      {/* sidebar */}
      <Sidebar />

      <div className="w-full">
        <Navbar />

        <main>{children}</main>
      </div>

      {/* main body */}
    </div>
  );
}
