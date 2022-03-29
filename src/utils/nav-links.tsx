import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  MailIcon,
  FlagIcon,
  DocumentTextIcon,
  DotsCircleHorizontalIcon,
  UserIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { nanoid } from "nanoid";
import { icons } from "../components/styles/heroicons-style";

export const navLinks = {
  Home: <HomeIcon key={nanoid()} className={icons} />,
  Explore: [
    <HashtagIcon
      key={nanoid()}
      className={`${icons} md:inline-block hidden`}
    />,
    <SearchIcon
      key={nanoid()}
      className={`${icons} inline-block md:hidden `}
    />,
  ],
  Notifications: <BellIcon key={nanoid()} className={icons} />,
  Messages: <MailIcon key={nanoid()} className={icons} />,
  Bookmarks: <FlagIcon key={nanoid()} className={icons} />,
  Lists: <DocumentTextIcon key={nanoid()} className={icons} />,
  Profile: <UserIcon key={nanoid()} className={icons} />,
  More: <DotsCircleHorizontalIcon key={nanoid()} className={icons} />,
};
