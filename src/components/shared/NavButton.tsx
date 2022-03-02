import ReactTooltip from "react-tooltip";
const NavButton = (props: any) => {
  return (
    <div
      data-tip="Not Implemented"
      className={`flex text-violet-700 md:hover:bg-violet-100 cursor-pointer ${props.className} relative`}
    >
      <ReactTooltip backgroundColor="#64748b" />
      {props.children}
    </div>
  );
};

export default NavButton;
