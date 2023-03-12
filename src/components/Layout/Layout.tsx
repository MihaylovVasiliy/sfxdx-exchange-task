import React from "react";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";
import Footer from "../Footer/Footer";
import Background from "../Background/Background";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Background />
      <Header />
      <main className={styles.content} />
      <Footer />
    </div>
  );
};

export default Layout;
