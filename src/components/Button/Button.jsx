import React from "react";

const Button = ({
  // parameters from user
  icon,
  bgcolor,
  color,
  bgHoverColor,
  size,
  text,
  borderradius,
  width,
}) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgcolor, color, borderradius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
