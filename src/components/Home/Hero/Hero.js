import CanvasComponent from "@/components/canvas/CanvasComponent";
import classes from "./Hero.module.css";
import Button from "../../UI/Button/Button";
import StatisticItems from "./StatisticItems/StatisticItems";
export default function Hero() {
  return (
    <div className={classes.heroSection}>
      <h1 className={classes.usp}>web development beyond our reality</h1>
      <h3 className={classes.slogan}>
        Nullam vitae pellentesque dui, eget gravida augue. Etiam dapibus
        tincidunt mauris, vel sodales dui mollis eget.
      </h3>
      <span className={classes.backgroundSquare}></span>
      <Button className={classes.button}>Get Started</Button>
      <StatisticItems className={classes.statisticItems} />
      <div className={classes.canvas}>
        <CanvasComponent />
      </div>
    </div>
  );
}
