import classes from "./Button.module.css";
import arrow from "../../UI/svgIcons/ButtonArrow.svg";
import Image from "next/image";
export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} ${props.className}`}
    >
      {props.children}
      <Image src={arrow} />
    </button>
  );
}
