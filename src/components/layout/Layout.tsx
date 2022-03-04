import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { icons } from "../styles/heroicons-style";

const Layout = (props: any) => {
  const { notification } = useContext<any>(AuthContext);
  return (
    <div className="flex-1  max-w-[600px] border-x-[1px] border-hover_border overflow-auto no-scrollbar relative">
      <div className="text-secondary_text flex justify-between items-center space-x-2 top-0 sticky p-3 border-y-[1px] border-hover_border z-10 bg-bg opacity-90 ">
        <Link to={"/"}>
          <div className="flex space-x-2 ">
            {window.location.href.match("comments") && (
              <ArrowLeftIcon className={icons} />
            )}
            <p className="text-xl">
              {window.location.href.match("comments") ? "Tweets" : "Home"}
            </p>
          </div>
        </Link>
        <p className="text-xl space-x-2">{notification}</p>
      </div>
      {props.children}
    </div>
  );
};

export default Layout;
