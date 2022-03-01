import Modal from "../Modal/Modal";
import classes from "./DeleteDialog.module.css";
import Button from "../Button/Button";
export default function DeleteDialog(props) {
  return (
    <Modal onClose={props.onClose} className={classes.modal}>
      <p>Delete?</p>
      <div className={classes.buttoncontainer}>
        <Button className={classes.button} onClick={props.delete}>
          Yes
        </Button>
        <Button className={classes.button} onClick={props.onClose}>
          No
        </Button>
      </div>
    </Modal>
  );
}
