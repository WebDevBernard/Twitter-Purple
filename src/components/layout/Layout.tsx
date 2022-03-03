import { ArrowLeftIcon } from "@heroicons/react/outline";
import { icons } from "../styles/heroicons-style";

const Layout = (props: any) => {
  return (
    <div className="flex-1  max-w-[600px] border-x-[1px] border-hover_border overflow-auto no-scrollbar relative">
      <div className="flex items-center space-x-2 top-0 sticky p-3 border-y-[1px] border-hover_border z-10 bg-bg opacity-90 text-secondary_text">
        <ArrowLeftIcon className={icons} /> <p>Home</p>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
