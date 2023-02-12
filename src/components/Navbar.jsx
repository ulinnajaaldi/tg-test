import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-20 border-b-2">
      <Link to="/">Aldilla Ulinnaja</Link>
      <div className="flex gap-6">
        <NavLink
          to="/logic-1"
          className={({ isActive }) =>
            isActive ? "text-slate-500" : "hover:text-slate-500"
          }
        >
          Logic 1
        </NavLink>
        <NavLink
          to="/logic-2"
          className={({ isActive }) =>
            isActive ? "text-slate-500" : "hover:text-slate-500"
          }
        >
          Logic 2
        </NavLink>
      </div>
    </div>
  );
}
