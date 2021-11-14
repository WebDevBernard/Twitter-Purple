import { useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NewTweet from "./components/Tweet/NewTweet";
import TweetList from "./components/Tweet/TweetList";
import { v4 } from "uuid";
import Login from "./components/Form/Login";
import TweetButton from "./components/Tweet/TweetButton";

function App() {
  const [tweetsList, setTweetsList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const addTweetHandler = (data) => {
    setTweetsList((prev) => {
      return [...prev, { text: data, id: v4(data) }];
    });
  };

  return (
    <Router>
      <Header onShowLogin={openModalHandler} />
      <TweetButton />
      {openModal && <Login onClose={closeModalHandler} />}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <NewTweet onAddTweet={addTweetHandler} />
                <TweetList tweets={tweetsList} />
              </Fragment>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
