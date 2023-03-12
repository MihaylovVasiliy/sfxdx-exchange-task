import React from "react";
import styles from "./Footer.module.scss";

const leftLinks = [
  {
    url: "/",
    text: "Privacy Policy",
  },
  {
    url: "/",
    text: "Terms & Conditions",
  },
  {
    url: "/",
    text: "Cookie Policy",
  },
];

const rightLinks = [
  {
    name: "facebook",
    url: "https://www.facebook.com/",
    imgPath: "assets/icons/facebook.svg",
  },
  {
    name: "twitter",
    url: "https://www.twitter.com/",
    imgPath: "assets/icons/twitter.svg",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/",
    imgPath: "assets/icons/instagram.svg",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/",
    imgPath: "assets/icons/youtube.svg",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.links}>
            <ul>
              {leftLinks.map((link) => {
                return (
                  <li key={crypto.randomUUID()}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.logo_container}>
            <img src={"assets/icons/sfxdx.svg"} alt="sfxdx icon" />
          </div>
          <div className={styles.icons_container}>
            {rightLinks.map((link) => (
              <div className={styles.icon} key={crypto.randomUUID()}>
                <a href={link.url} rel="noreferrer noopener">
                  <img src={link.imgPath} alt={`${link.name} icon link`} />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.copyright}>
          ©{new Date().getFullYear()} All rights reserved. Powered by Atla
        </div>
      </div>
    </footer>
  );
};

export default Footer;
