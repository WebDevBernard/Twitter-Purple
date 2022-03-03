import { useState } from "react";
import Layout from "./components/layout/Layout";
import Nav from "./components/layout/Nav";
import Widgets from "./components/layout/Widgets";
import { AnimatePresence } from "framer-motion";
import NavTweet from "./components/tweet/NavTweet";
import Tweet from "./components/tweet/Tweet";
import NewTweet from "./components/tweet/NewTweet";
import Comment from "./components/comments/Comment";
import NewComment from "./components/comments/NewComment";
import CurrentComment from "./components/comments/CurrentComment";
import Profile from "./components/login/Profile";
import Auth from "./components/login/Auth";
function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const [openAuth, setOpenAuth] = useState<boolean>(false);

  const handleOpenAuth = () => {
    setOpenAuth(!openAuth);
  };
  const handleOpenProfile = () => {
    setOpenProfile(!openProfile);
  };
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div
      className={`font-["Sofia Pro"] flex md:justify-center h-screen text-primary_text`}
    >
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {openProfile && <Profile onClose={handleOpenProfile} />}
        {openAuth && <Auth onClose={handleOpenAuth} />}
        {openModal && <NavTweet onClose={handleOpenModal} />}
      </AnimatePresence>
      <Nav
        handleOpenModal={handleOpenModal}
        handleOpenAuth={handleOpenAuth}
        handleOpenProfile={handleOpenProfile}
      />
      {/* <Layout>
        <NewTweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Layout> */}
      <Layout>
        <CurrentComment />
        <NewComment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </Layout>
      <Widgets />
    </div>
  );
}

export default App;
