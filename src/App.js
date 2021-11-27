import { useEffect, useState, Fragment } from "react";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NewTweet from "./components/Tweet/NewTweet";
import TweetList from "./components/Tweet/TweetList";
import Login from "./components/Form/Login";
import TweetButton from "./components/Tweet/TweetButton";

function App() {
  const [tweetsList, setTweetsList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
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
  const handleAvatar = () => {
    setUserAvatar(avatar);
  };
  const shortName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
    length: 2,
  });
  const [userName, setUserName] = useState(shortName);
  const handleUserName = () => {
    setUserName(shortName);
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
  // ...prev makes a shallow copy of the previous state
  // THE INITIAL STATE OBJECT HERE
  const addTweetHandler = (data) => {
    setTweetsList((prev) => {
      // console.log(prev);
      return [
        ...prev,
        {
          text: data,
          id: generateKey(data),
          like: false,
          createdAt: Date.now(),
          avatar: userAvatar,
          userName: userName,
        },
      ];
    });
  };
  const removeTweetHandler = (tweetId) => {
    setTweetsList((prev) => {
      // console.log(tweetId);
      // console.log("prev from App", prev);
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
                <NewTweet
                  userName={userName}
                  handleUserName={handleUserName}
                  avatar={userAvatar}
                  handleAvatar={handleAvatar}
                  onAddTweet={addTweetHandler}
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
