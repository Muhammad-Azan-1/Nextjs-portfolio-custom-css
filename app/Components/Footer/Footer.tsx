import React from "react";
import style from "./page.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <footer>
        {/* Bordre LINE */}
        <div className={style.border}></div>
        {/* Bordre LINE */}

        <div className={style.footerbg}>
          <div className={style.textContent}>
            <h1>
              Let’s connect and create <br /> something awesome together! <br />
              <Link href="mailto:azan96593@gmail.com">
                azan96593@gmail.com
              </Link>{" "}
            </h1>
          </div>

          <div className={style.iconsBox}>
            <div className={style.icons}>
              <Link href="">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link href="">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link href="">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link href="">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link href="">
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bordre LINE */}
        <div className={style.border}></div>
        {/* Bordre LINE */}

        <div className={style.footer}>
          &copy; 2024 Web Developer Muhammad Azan
        </div>
      </footer>
    </>
  );
};

export default Footer;
