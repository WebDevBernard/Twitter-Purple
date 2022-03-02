import { ArrowLeftIcon } from "@heroicons/react/outline";
import NewTweet from "./NewTweet";
import Tweet from "./Tweet";
const Layout = () => {
  return (
    <div className="flex-1 min-w-fit max-w-[600px] border-x-[1px] mx-8 border-slate-300 overflow-auto no-scrollbar relative">
      <div className="flex items-center space-x-2 top-0 sticky p-3 border-y-[1px] border-slate-300 z-10 bg-violet-50 opacity-90 text-violet-500">
        <ArrowLeftIcon className="h-6 w-6 cursor-pointer" /> <p>Home</p>
      </div>
      <NewTweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
};

export default Layout;
