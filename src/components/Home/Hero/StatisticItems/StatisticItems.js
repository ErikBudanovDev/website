import classes from "./StatisticItems.module.css";
export default function StatisticItems(props) {
  return (
    <div className={`${classes.statisticItems} ${props.className}`}>
      <span className={classes.statisticItem}>
        <span className={classes.statisticTop}>100+</span>
        <span className={classes.statisticBottom}>satisfied clients</span>
      </span>
      <span className={classes.statisticItem}>
        <span className={classes.statisticTop}>550+</span>
        <span className={classes.statisticBottom}>Projects completed</span>
      </span>
      <span className={classes.statisticItem}>
        <span className={classes.statisticTop}>20</span>
        <span className={classes.statisticBottom}>years of experience</span>
      </span>
    </div>
  );
}
