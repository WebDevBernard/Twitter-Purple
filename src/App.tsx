import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import Login from "./components/login/Login";
import TweetList from "./components/tweet/TweetList";
function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const [openAuth, setOpenAuth] = useState<boolean>(false);

  const [getComments, setGetComments] = useState<string>("");

  const getCommentsHandler = (e: any) => {
    setGetComments(e);
  };
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
    <Router>
      <div
        className={`font-["Sofia Pro"] flex md:justify-center h-screen text-primary_text`}
      >
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {openProfile && <Profile onClose={handleOpenProfile} />}
          {openAuth && <Login onClose={handleOpenAuth} />}
          {openModal && <NavTweet onClose={handleOpenModal} />}
        </AnimatePresence>
        <Nav
          handleOpenModal={handleOpenModal}
          handleOpenAuth={handleOpenAuth}
          handleOpenProfile={handleOpenProfile}
        />

        <Routes>
          <Route
            path="/:userid/comments/:id"
            element={
              <Layout>
                <CurrentComment />
              </Layout>
            }
          />
          <Route
            path="/:userid/tweets"
            element={
              <Layout>
                <NewTweet />
                <TweetList />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                <NewTweet />
                <TweetList />
              </Layout>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Widgets />
      </div>
    </Router>
  );
}

export default App;
