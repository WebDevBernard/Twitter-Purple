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
  const avatars = {
    Female: [
      "https://i.imgur.com/nlhLi3I.png",
      "https://i.imgur.com/z5LNkkB.png",
      "https://i.imgur.com/v0JXau2.png",
      "https://i.imgur.com/lRUnDgU.png",
      "https://i.imgur.com/3GvwNBf.png",
    ],
    Male: [
      "https://i.imgur.com/73hZDYK.png",
      "https://i.imgur.com/5fUVPRP.png",
      "https://i.imgur.com/DVpDmdR.png",
      "https://i.imgur.com/2WZtOD6.png",
      "https://i.imgur.com/ilT4JDe.png",
    ],
  };
  const avatarArray = Object.values(avatars.Male).concat(
    Object.values(avatars.Female)
  );
  const avatar = avatarArray[Math.floor(Math.random() * avatarArray.length)];
  const [userAvatar, setUserAvatar] = useState(avatar);
  const context = useContext(AuthContext);
  const [tweetsList, setTweetsList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleAvatar = (e) => {
    setUserAvatar(e);
  };
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
          createdAt: Date.now(),
          avatar: userAvatar,
          userName: handleUsernameForLoggedUser,
          like: false,
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
      {openModal && (
        <Login
          avatar={avatar}
          handleAvatar={handleAvatar}
          onClose={() => setOpenModal(false)}
        />
      )}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <NewTweet
                  onAddTweet={addTweetHandler}
                  userAvatar={userAvatar}
                />
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
