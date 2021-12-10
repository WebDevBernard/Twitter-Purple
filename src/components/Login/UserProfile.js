import { useState } from "react";
import { avatarArray } from "../../utils/generate-avatar-names";
import classes from "./UserProfile.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import { auth } from "../../utils/firebase";

export default function UserProfile({ handleNotification }) {
  const [selected, setSelected] = useState("");

  const handleSelected = (e) => {
    setSelected(avatarArray[e.target.id]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.currentUser.updateProfile({
        photoURL: selected,
      });
      handleNotification("Avatar Updated");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className={classes.title}>Choose a new avatar</p>
      <Card className={classes.card}>
        {avatarArray.map((src, index) => {
          return (
            <img
              className={
                selected === avatarArray[index]
                  ? classes.selected
                  : classes.profile
              }
              src={src}
              key={index}
              id={index}
              onClick={handleSelected}
              alt={src}
            />
          );
        })}
      </Card>
      <Button className={classes.button}>Update</Button>
    </form>
  );
}
