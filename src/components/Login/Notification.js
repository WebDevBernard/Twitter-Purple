import classes from "./Notification.module.css";

const Notification = ({ notification }) => {
  return (
    <section className={classes.notification}>
      <p>{notification}</p>
    </section>
  );
};

export default Notification;
