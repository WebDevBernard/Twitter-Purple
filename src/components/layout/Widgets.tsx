import ReactTooltip from "react-tooltip";
import { SearchIcon } from "@heroicons/react/outline";
import LoginButton from "./ProfileButton";
import Card from "../shared/Card";

const Widgets = () => {
  return (
    <div className="hidden md:flex flex-col space-y-6 max-w-xs overflow-hidden whitespace-nowrap">
      <form data-tip="Not Implemented" className="relative flex items-center">
        <ReactTooltip backgroundColor="#64748b" />
        <input
          className="w-[100%] px-3 py-2 bg-bg placeholder-primary_light_text mt-2 rounded-3xl focus:outline-border"
          placeholder="Search Twitter"
        ></input>
        <SearchIcon className=" w-[20px] h-[20px] bottom-3 right-3 absolute text-primaryLightText" />
      </form>
      <Card className="space-y-6 bg-bg p-3">
        <h3 className=" font-bold">What's Happening</h3>
        <div>
          <p className="text-xs ">Placeholder</p>
          <p className="text-base font-bold text-secondary_text">Placeholder</p>
          <p className="text-xs ">Placeholder</p>
        </div>
        <div>
          <p className="text-xs">Placeholder</p>
          <p className="text-lg font-bold text-secondary_text">Placeholder</p>
          <p className="text-xs ">Placeholder</p>
        </div>
      </Card>
      <Card className="bg-bg p-3">
        <h3 className="font-bold mb-2">Who To Follow</h3>
        <div className="flex items-center">
          <LoginButton className="p-2" />
          <button className="ml-6 text-sm px-3 h-8 text-primary_text bg-violet-200 hover:bg-violet-300 font-bold block select-none rounded-2xl duration-150 ease-out active:scale-95 active:shadow-sm">
            Follow
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Widgets;
