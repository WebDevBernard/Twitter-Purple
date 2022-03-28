import { FC } from "react";

const NavButton: FC<{ className: string }> = (props) => {
  return (
    <li
      {...props}
      data-tip="Not Implemented"
      className={`flex text-secondary_text md:hover:bg-hover cursor-pointer ${props.className} relative`}
    >
      {props.children}
    </li>
  );
};

export default NavButton;
