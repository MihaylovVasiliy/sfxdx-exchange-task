import React from "react";
import styles from "./Header.module.scss";
import ConnectButton from "../Button/ConnectButton/ConnectButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={"assets/icons/sfxdx.svg"} alt="sfxdx icon" />
        </div>
        <div className={styles.connect_button}>
          <ConnectButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
