import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import classes from "./Login.module.css";
export default function Login(props) {
  return (
    <Modal onClose={props.onClose} className={classes.modal}>
      <div>asdaasdasdsd</div>
      <Button onClick={props.onClose}>Close Modal</Button>
    </Modal>
  );
}
