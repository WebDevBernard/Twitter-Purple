import {
  useState,
  useContext,
  ChangeEvent,
  FC,
  MouseEventHandler,
} from "react";
import AuthContext from "../../store/auth-context";
import { auth } from "../../utils/firebase";
import { avatarArray } from "../../utils/avatar-names";
import Button from "../shared/Button";
import Modal from "../shared/Modal";
import { XIcon } from "@heroicons/react/outline";

const Profile: FC<{ onClose: () => void }> = (props) => {
  const [selected, setSelected] = useState<string | null>(null);
  const { handleNotification } = useContext(AuthContext);
  const handleSelected = (e: any) => {
    setSelected(avatarArray[e.target.id]);
  };

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selected === null) {
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
    <Modal className="flex items-center " onClose={props.onClose}>
      <XIcon
        onClick={props.onClose}
        className="h-10 w-10 p-2 cursor-pointer absolute top-0"
      />
      <form onSubmit={handleSubmit}>
        <div className="p-10 space-y-4">
          <h2 className="text-xl">Choose a new avatar</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {avatarArray.map((src, index) => {
              return (
                <img
                  className={`h-16 w-16 border-2 p-1.5 rounded-full cursor-pointer ${
                    selected === avatarArray[index]
                      ? "border-purple-500"
                      : "border-zinc-300"
                  }`}
                  src={src}
                  key={index}
                  id={index.toString()}
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
