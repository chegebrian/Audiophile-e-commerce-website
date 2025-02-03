import React from "react";
import { NavLink } from "react-router";

function Button({ children, color, backgroundColor, hover, to }) {
  return (
    <NavLink
      to={to}
      className={`border-0 px-5 py-3 font-semibold tracking-widest uppercase outline-0 ${color} ${backgroundColor}  ${hover} transition duration-100`}
    >
      {children}
    </NavLink>
  );
}

export default Button;
