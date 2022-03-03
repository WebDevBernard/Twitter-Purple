import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  MailIcon,
  FlagIcon,
  DocumentTextIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import { icons } from "../components/styles/heroicons-style";

export const navLinks = {
  Home: <HomeIcon className={icons} />,
  Explore: <HashtagIcon className={icons} />,
  Notifications: <BellIcon className={icons} />,
  Messages: <MailIcon className={icons} />,
  Bookmarks: <FlagIcon className={icons} />,
  Lists: <DocumentTextIcon className={icons} />,
  More: <DotsCircleHorizontalIcon className={icons} />,
};
