import { useEffect, useState, Fragment, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NewTweet from "./components/Tweet/NewTweet";
import TweetList from "./components/Tweet/TweetList";
import Login from "./components/Login/Login";
import TweetButton from "./components/Tweet/TweetButton";
import AuthContext from "./store/auth-context";

function App() {
  const context = useContext(AuthContext);
  const [tweetsList, setTweetsList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleUsernameForLoggedUser = !context.isLoggedIn
    ? context.userName
    : context.loginName;
  const addTweetHandler = (data) => {
    setTweetsList((prev) => {
      return [
        ...prev,
        {
          text: data,
          id: `${data}_${new Date().getTime()}`,
          like: false,
          createdAt: Date.now(),
          avatar: context.userAvatar,
          userName: handleUsernameForLoggedUser,
        },
      ];
    });
  };
  const removeTweetHandler = (tweetId) => {
    setTweetsList((prev) => {
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
      <Header onShowLogin={() => setOpenModal(true)} />
      <TweetButton />
      {openModal && <Login onClose={() => setOpenModal(false)} />}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <NewTweet onAddTweet={addTweetHandler} />
                <TweetList
                  tweets={tweetsList}
                  onRemoveTweet={removeTweetHandler}
                />
              </Fragment>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
