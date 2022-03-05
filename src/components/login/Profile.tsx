import { useState, useContext, ChangeEvent } from "react";
import AuthContext from "../../store/auth-context";
import { auth } from "../../utils/firebase";
import { avatarArray } from "../../utils/avatar-names";
import Button from "../shared/Button";

import Modal from "../shared/Modal";

const Profile = (props: any) => {
  const [selected, setSelected] = useState("");
  const { handleNotification } = useContext<any>(AuthContext);
  const handleSelected = (e: any) => {
    setSelected(avatarArray[e.target.id]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (selected === "") {
      handleNotification("No Avatar Selected");
      return;
    }
    try {
      await auth.currentUser?.updateProfile({
        photoURL: selected,
      });
      handleNotification("Avatar Updated");
      props.onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Modal className="" onClose={props.onClose}>
      <form onSubmit={handleSubmit}>
        <div className="p-3 space-y-4">
          <p className="border-b-border border-[1px]">Choose a new avatar</p>
          <div className="grid grid-cols-2 gap-2">
            {avatarArray.map((src, index: any) => {
              return (
                <img
                  className={`h-16 w-16 border-2 p-1.5 rounded-full cursor-pointer ${
                    selected === avatarArray[index]
                      ? "border-purple-500"
                      : "border-zinc-300"
                  }`}
                  src={src}
                  key={index}
                  id={index}
                  onClick={handleSelected}
                  alt={src}
                />
              );
            })}
          </div>
          <div className="flex flex-col flex-center">
            <Button className="rounded-lg py-1 px-3">Update</Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default Profile;
