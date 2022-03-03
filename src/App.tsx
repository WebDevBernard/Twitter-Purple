import { useState } from "react";
import Layout from "./components/layout/Layout";
import Nav from "./components/layout/Nav";
import Widgets from "./components/layout/Widgets";
import { AnimatePresence } from "framer-motion";
import NavTweet from "./components/tweet/NavTweet";
function App() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div
      className={`font-["Sofia Pro"] flex md:justify-center h-screen text-primary_text`}
    >
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {openModal && <NavTweet onClose={handleOpenModal} />}
      </AnimatePresence>
      <Nav handleOpenModal={handleOpenModal} />
      <Layout />
      <Widgets />
    </div>
  );
}

export default App;
