import { FC } from "react";
import ReactTooltip from "react-tooltip";

const NavButton: FC<{ className: string; content: string }> = (props) => {
  return (
    <div
      data-tip="Not Implemented"
      className={`flex text-secondary_text md:hover:bg-hover cursor-pointer ${props.className} relative`}
    >
      <ReactTooltip backgroundColor="#64748b" />
      {props.children}
      <p className="hidden text-[22px] xl:flex ml-4">{props.content}</p>
    </div>
  );
};

export default NavButton;
