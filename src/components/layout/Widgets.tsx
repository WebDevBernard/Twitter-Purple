import { avatarArray } from "../../utils/avatar-names";
import ReactTooltip from "react-tooltip";
import { SearchIcon } from "@heroicons/react/outline";
import Avatar from "../shared/Avatar";
import Card from "../shared/Card";
import { avatarIcon } from "../styles/heroicons-style";

const Widgets = () => {
  return (
    <div className="w-[405px] hidden px-8 lg:flex flex-col space-y-3">
      <form data-tip="Not Implemented" className="relative flex items-center">
        <ReactTooltip backgroundColor="#64748b" />
        <input
          className="w-[100%] px-3 py-2 bg-bg placeholder-primary_light_text mt-2 rounded-3xl focus:outline-primary_light_text"
          placeholder="Search Twitter"
        ></input>
        <SearchIcon className=" w-[20px] h-[20px] bottom-3 right-3 absolute text-primary_light_text" />
      </form>
      <Card className="space-y-6 bg-bg p-4 inline-block tracking-normal">
        <h3 className=" font-bold text-lg tracking-wide">What's Happening</h3>
        <div className="inline-block break-words">
          <p className="text-xs ">Updates</p>
          <p className="text-sm font-bold text-secondary_text">
            Login as "Guest" user or sign up to tweet with a unique username.
            Change your user avatar from the login menu.
          </p>
          <p className="text-xs ">#Firebase</p>
        </div>
        <div>
          <p className="text-xs">Main Features</p>
          <p className="text-sm font-bold text-secondary_text">
            Tweet, comment or like a tweet, delete your own tweets. Tweets are
            saved to local storage.
          </p>
          <p className="text-xs ">#ResponsiveDesign #React #Redux</p>
        </div>
        <div>
          <p className="text-xs">Info</p>
          <a
            href="https://github.com/WebDevBernard/Twitter-Purple"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold text-secondary_text"
          >
            View the Github repo
          </a>
          <p className="text-xs ">#Github</p>
        </div>
      </Card>
      <Card className="bg-bg p-4 whitespace-nowrap">
        <h3 className="font-bold mb-2">Who To Follow</h3>

        <a
          href="https://twitter.com/WebDevBernard"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer">
              <Avatar avatar={avatarArray[4]} className={avatarIcon} />
              <div className="ml-4 hidden md:inline-block whitespace-nowrap">
                <p className="font-bold text-secondary_text">WebDevBernard</p>
                <p>@ WebDevBernard</p>
              </div>
            </div>
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
