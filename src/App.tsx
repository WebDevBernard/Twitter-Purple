import { useState, useEffect } from "react";
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
import NewTweet from "./components/tweet/NewTweet";
import CommentList from "./components/tweet/CommentList";
import Profile from "./components/login/Profile";
import Login from "./components/login/Login";
import TweetList from "./components/tweet/TweetList";
import NewComment from "./components/tweet/NewComment";
import CurrentTweet from "./components/tweet/CurrentTweet";
import { open } from "fs/promises";

function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const [openAuth, setOpenAuth] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const handleOpenDialog = () => {
    setOpenDialog(!openDialog);
  };
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [show]);

  const handleOpenAuth = () => {
    setOpenAuth(!openAuth);
    setShow(!show);
    setOpenDialog(false);
  };
  const handleOpenProfile = () => {
    setOpenProfile(!openProfile);
    setShow(!show);
    setOpenDialog(false);
  };
  const handleOpenModal = () => {
    setOpenModal(!openModal);
    setShow(!show);
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
          openDialog={openDialog}
          handleOpenDialog={handleOpenDialog}
          handleOpenModal={handleOpenModal}
          handleOpenAuth={handleOpenAuth}
          handleOpenProfile={handleOpenProfile}
        />

        <Routes>
          <Route
            path="/:userid/comments/:id"
            element={
              <Layout>
                <CurrentTweet />
                <NewComment />
                <CommentList />
              </Layout>
            }
          />

          <Route
            path="/"
            element={
              <Layout>
                <NewTweet p="inline-block" pencil="hidden" />
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
