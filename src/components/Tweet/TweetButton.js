import { useState, useEffect } from "react";
import Button from "../Button/Button";
import classes from "./TweetButton.module.css";
export default function TweetButton(props) {
  const [showButton, setShowButton] = useState();
  const toggleVisibility = () => {
    if (window.scrollY >= 60) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // makes the animation smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 80,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      className={showButton ? classes.button : classes.hide}
    >
      TWEET
    </Button>
  );
}
