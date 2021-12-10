import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NewTweet from "./components/Tweet/NewTweet";
import TweetList from "./components/Tweet/TweetList";
import Login from "./components/Login/Login";
import TopButton from "./components/TopButton/TopButton";
import Notification from "./components/Login/Notification";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [notification, setNotification] = useState("");
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleNotification = (e) => {
    setNotification(e);
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
          handleNotification={handleNotification}
          onClose={handleCloseModal}
        />
      )}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NewTweet notification={notification} />
                <TweetList />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
