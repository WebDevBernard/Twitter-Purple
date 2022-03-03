import { Link } from "react-router-dom";
import { avatarArray } from "../../utils/avatar-names";
import ReactTooltip from "react-tooltip";
import { SearchIcon } from "@heroicons/react/outline";
import ProfileButton from "./ProfileButton";
import Card from "../shared/Card";

const Widgets = () => {
  return (
    <div className="max-w-xs hidden px-8 md:flex flex-col space-y-6 whitespace-nowrap">
      <form data-tip="Not Implemented" className="relative flex items-center">
        <ReactTooltip backgroundColor="#64748b" />
        <input
          className="w-[100%] px-3 py-2 bg-bg placeholder-primary_light_text mt-2 rounded-3xl focus:outline-border"
          placeholder="Search Twitter"
        ></input>
        <SearchIcon className=" w-[20px] h-[20px] bottom-3 right-3 absolute text-primary_light_text" />
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

        <a
          href="https://twitter.com/WebDevBernard"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-evenly">
            <ProfileButton
              selectUserAvatar={avatarArray[4]}
              selectUserName="WebDevBernard"
            />
            <button className="ml-12 text-sm px-3 h-8 text-primary_text bg-violet-200 hover:bg-violet-300 font-bold select-none rounded-2xl duration-150 ease-out active:scale-95 active:shadow-sm">
              Follow
            </button>
          </div>
        </a>
      </Card>
    </div>
  );
};

export default Widgets;
