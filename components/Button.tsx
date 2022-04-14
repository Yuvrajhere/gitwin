// package imports
import Link from "next/link";
import React from "react";

interface ButtonProps {
  link?: boolean;
  to?: string;
  type?: string;
  children: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  rounded?: boolean;
}

const Button = ({
  link = false,
  to,
  type = "white",
  children,
  disabled = false,
  fullWidth = false,
  className = "",
  onClick = () => {},
  rounded = false,
}: ButtonProps) => {
  let classes =
    " hover-opacity-20 font-semibold py-2 px-6 rounded-2xl focus:outline-none hover:opacity-80 ";

  if (!disabled) {
    switch (type) {
      case "white":
        classes += "bg-white border-silver border-2 text-dark_slate_gray ";
        break;
      case "black":
        classes += "bg-black border-black border-2 text-white ";
        break;
    }
  }

  if (!fullWidth) classes += "max-w-max ";

  if (rounded) classes += "rounded-full ";

  if (disabled) classes += "bg-gray-500 text-white cursor-not-allowed ";

  classes += className;

  if (link && to) {
    return (
      <Link href={to}>
        <button className={classes} disabled={disabled} onClick={onClick}>
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
