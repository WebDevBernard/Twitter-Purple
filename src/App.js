import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NewTweet from "./components/Tweet/NewTweet";
import TweetList from "./components/Tweet/TweetList";
import Login from "./components/Login/Login";
import TopButton from "./components/TopButton/TopButton";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Router>
      <Header onOpen={handleOpenModal} />
      <TopButton />
      {openModal && <Login onClose={handleCloseModal} />}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NewTweet />
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
