import React from "react";
import { NavLink } from "react-router";

function Button({ children, color, backgroundColor, hover, to }) {
  return <NavLink to={to} className={`border-0 px-5 py-3 outline-0 uppercase tracking-widest font-semibold ${color} ${backgroundColor} hover:${hover}  transition duration-100`}>{children}</NavLink>;
}

export default Button;
