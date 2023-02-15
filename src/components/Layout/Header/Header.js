import Navigation from "./Navigation/Navigation";
import classes from "./Header.module.css";
import logo from "/Users/erikb/Desktop/Front-End/ReactProjects/DigidogWeb/website/src/components/utility/imgs/Logo.png";
import Image from "next/image";
export default function Header() {
  return (
    <header className={`${classes.header}`}>
      <Image
        src={logo}
        alt={"logo"}
        sizes="(max-width: 992px) 70; margin-top: 20px"
        width={140}
        height={77.38}
      />
      <Navigation />
    </header>
  );
}
