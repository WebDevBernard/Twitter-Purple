import { useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NewTweet from "./components/Tweet/NewTweet";
import TweetList from "./components/Tweet/TweetList";
import { v4 } from "uuid";
function App() {
  const [tweetsList, setTweetsList] = useState([]);

  const addTweetHandler = (data) => {
    setTweetsList((prev) => {
      return [...prev, { text: data, id: v4(data) }];
    });
  };

  return (
    <Router>
      <Header />
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
