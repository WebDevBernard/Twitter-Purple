import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  MailIcon,
  FlagIcon,
  DocumentTextIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import { navIcons } from "../components/styles/heroicons-style";

export const navLinks = {
  Home: <HomeIcon className={navIcons} />,
  Explore: <HashtagIcon className={navIcons} />,
  Notifications: <BellIcon className={navIcons} />,
  Messages: <MailIcon className={navIcons} />,
  Bookmarks: <FlagIcon className={navIcons} />,
  Lists: <DocumentTextIcon className={navIcons} />,
  More: <DotsCircleHorizontalIcon className={navIcons} />,
};
