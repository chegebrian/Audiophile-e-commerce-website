import React from "react";
import { NavLink } from "react-router";

function Button({
  children,
  color,
  backgroundColor,
  hover,
  to,
  backgroundHover,
  border,
  borderColor,
  onClick,
}) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={` px-5 py-3 font-semibold tracking-widest uppercase outline-0 ${border} ${borderColor} ${color} ${backgroundColor} ${hover} ${backgroundHover} transition duration-100`}
    >
      {children}
    </NavLink>
  );
}

export default Button;
