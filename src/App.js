import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./route/PrivateRoute";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NewTweet from "./components/Tweet/NewTweet";
import TweetList from "./components/Tweet/TweetList";
import Login from "./components/Login/Login";
import TopButton from "./components/TopButton/TopButton";
import Notification from "./components/Login/Notification";
import UserProfile from "./components/Login/UserProfile";
import CommentList from "./components/Tweet/Comments/CommentList";
import Widget from "./components/Widgets/Widget";
import SideBar from "./components/SideBar/SideBar";
import UserTweets from "./components/Tweet/UserTweets";
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [notification, setNotification] = useState("");
  const [getComments, setGetComments] = useState("");

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleNotification = (e) => {
    setNotification(e);
  };
  const getCommentsHandler = (e) => {
    setGetComments(e);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotification("");
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [notification]);

  return (
    <Router>
      {notification && <Notification notification={notification} />}
      <Header onOpen={handleOpenModal} />
      <TopButton />
      {openModal && (
        <Login
          open={openModal}
          handleNotification={handleNotification}
          onClose={handleCloseModal}
        />
      )}
      <main>
        <Routes>
          <Route
            exact
            path="/comments/:id"
            element={
              <div style={{ position: "relative" }}>
                <SideBar />
                <Widget />
                <CommentList getComments={getComments} />
              </div>
            }
          />
          <Route
            exact
            path="/:userid/tweets"
            element={
              <div style={{ position: "relative" }}>
                <SideBar />
                <Widget />
                <UserTweets getComments={getComments} />
              </div>
            }
          />
          <Route
            exact
            path="/"
            element={
              <div style={{ position: "relative" }}>
                <SideBar />
                <Widget />
                <NewTweet />
                <TweetList getCommentsHandler={getCommentsHandler} />
              </div>
            }
          />
          <Route element={<PrivateRoute />}>
            <Route
              exact
              path="/profile"
              element={<UserProfile handleNotification={handleNotification} />}
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
