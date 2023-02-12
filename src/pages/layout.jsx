import React from "react";
import Navbar from "../components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="max-w-7xl px-10 border m-auto">
      <Navbar />
      {children}
    </div>
  );
}
