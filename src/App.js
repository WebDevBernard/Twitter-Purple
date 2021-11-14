import { useEffect, useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NewTweet from "./components/Tweet/NewTweet";
import TweetList from "./components/Tweet/TweetList";

import Login from "./components/Form/Login";
import TweetButton from "./components/Tweet/TweetButton";

function App() {
  const [tweetsList, setTweetsList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [likeToggle, setLikeToggle] = useState(false);

  const toggleLike = () => {
    likeToggle ? setLikeToggle(true) : setLikeToggle(false);
  };
  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  // lifting state up from NewTweet.js to App.js as Callback function and then add pointer in TweetList.js
  const addTweetHandler = (data) => {
    setTweetsList((prev) => {
      // console.log(prev);
      return [...prev, { text: data, id: generateKey(data), like: likeToggle }];
    });
  };
  const removeTweetHandler = (tweetId) => {
    setTweetsList((prev) => {
      // console.log(tweetId);
      // console.log(prev);
      return [...prev.filter((tweet) => tweet.id !== tweetId)];
    });
  };

  // only run once the first time this component is rendered
  useEffect(() => {
    if (localStorage.getItem("tweetData")) {
      setTweetsList(JSON.parse(localStorage.getItem("tweetData")));
    }
  }, []);
  // run every time our state changes (first argument is the name, 2nd data is an array)
  useEffect(() => {
    localStorage.setItem("tweetData", JSON.stringify(tweetsList));
  }, [tweetsList]);

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
                <TweetList
                  likeButton={toggleLike}
                  tweets={tweetsList}
                  onRemoveTweet={removeTweetHandler}
                />
              </Fragment>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
