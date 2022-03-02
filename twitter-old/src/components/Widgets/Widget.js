import classes from "./Widget.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
export default function Widget() {
  return (
    <div className={classes.cardcontainer}>
      {/* <Card className={classes.card}>
        <p className={classes.title}>Trending on Real Twitter</p>
        <label className={classes.trendlabel} htmlFor="trendcard">
          Trending in Canada
        </label>
        <Card name="trendcard" className={classes.trendcard}>
          <p>Trending</p>
        </Card>
        <label className={classes.trendlabel} htmlFor="trendcard">
          Trending in Sports
        </label>
        <Card className={classes.trendcard}>
          <p>Trending</p>
        </Card>
      </Card> */}

      <Card className={classes.card}>
        <p className={classes.title}>follow me on real twitter</p>
        <div className={classes.followcard}>
          <img
            className={classes.atSign}
            src="https://img.icons8.com/ios/50/000000/email.png"
            alt="@ sign"
          />
          <p className={classes.userName}>WebDevBernard</p>
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://twitter.com/WebDevBernard"}
          >
            <Button className={classes.button}>Follow</Button>
          </a>
        </div>
      </Card>
    </div>
  );
}
