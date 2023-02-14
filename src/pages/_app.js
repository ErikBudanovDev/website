import Header from "@/components/Layout/Header/Header";
import "@/styles/globals.css";
import classes from "../styles/Page.module.css";

export default function App({ Component, pageProps }) {
  return (
    <div className={`${classes.pageHolder} `}>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </div>
  );
}
