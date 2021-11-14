import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import classes from "./Login.module.css";
export default function Login(props) {
  return (
    <Modal onClose={props.onClose} className={classes.modal}>
      <header>
        <br />
        <FontAwesomeIcon
          className={classes.close}
          onClick={props.onClose}
          icon={faTimes}
          alt="close"
        />
      </header>

      <form id="signup" className={classes.signup}>
        <label htmlFor="signup">Create a new Account</label>
        <input placeholder="Name"></input>
        <input placeholder="Username"></input>
        <input placeholder="Password"></input>
        <input placeholder="Enter Password Again"></input>
        <Button className={classes.buttons}>Sign UP</Button>
      </form>
      <br />

      <form id="login" className={classes.login}>
        <label htmlFor="login">or login with an existing Account</label>
        <input placeholder="Username"></input>
        <input placeholder="Password"></input>
        <Button className={classes.buttonl}>Login</Button>
      </form>

      <footer>
        <p> or login with a premade user</p>
        <Button className={classes.button}>Login as happy guy</Button>
        <br />
        <br />
      </footer>
    </Modal>
  );
}
