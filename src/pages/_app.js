import Header from "@/components/Layout/Header/Header";
import "@/styles/globals.css";
import "@/styles/media.css";
import classes from "../styles/Page.module.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={`${classes.pageHolder} wrapper`}>
        <Header />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </div>
    </>
  );
}
