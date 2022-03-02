import NewTweet from "./NewTweet";
import Tweet from "./Tweet";
const Layout = () => {
  return (
    <div className="flex-1 min-w-fit max-w-[600px] border-x-[1px] mx-8 border-slate-300 overflow-auto no-scrollbar relative">
      <div className="top-0 sticky p-3 border-y-[1px] border-slate-300 z-10 bg-violet-50 opacity-90 text-violet-500">
        Home
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
