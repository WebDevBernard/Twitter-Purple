import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Tweet from "./components/Tweet/Tweet";
import TweetList from "./components/Tweet/TweetList";
function App() {
  const [tweetsList, setTweetsList] = useState([]);

  const addTweetHandler = (text) => {
    setTweetsList((prev) => {
      return [...prev, { tweet: text, id: Math.Random.toString() }];
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
              <>
                <Tweet onAddTweet={addTweetHandler} />
                <TweetList tweets={tweetsList} />
              </>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
