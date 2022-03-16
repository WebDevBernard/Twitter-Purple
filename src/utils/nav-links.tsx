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
import { icons } from "../components/styles/heroicons-style";

export const navLinks = {
  Home: <HomeIcon className={icons} />,
  Explore: [
    <HashtagIcon className={`${icons} md:inline-block hidden`} />,
    <SearchIcon className={`${icons} inline-block md:hidden `} />,
  ],
  Notifications: <BellIcon className={icons} />,
  Messages: <MailIcon className={icons} />,
  Bookmarks: <FlagIcon className={icons} />,
  Lists: <DocumentTextIcon className={icons} />,
  Profile: <UserIcon className={icons} />,
  More: <DotsCircleHorizontalIcon className={icons} />,
};
