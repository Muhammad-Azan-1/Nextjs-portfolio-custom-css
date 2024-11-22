"use client";
import style from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className={style.headerbg}>
        <div className={style.logo}>
          <Image
            src="/Images/SAAD.svg"
            alt="Logo"
            width={170}
            height={40}
          ></Image>
        </div>

        <div className={style.barIcon}>
          <FontAwesomeIcon
            onClick={toggleMenu}
            className={style.icon}
            icon={faBars}
          />
        </div>

        <div
          className={`${showMenu ? style.showMenu : style.hideMenu} ${
            style.navbarBox
          }`}
        >
          <div className={style.crossIcon}>
            <FontAwesomeIcon
              onClick={toggleMenu}
              className={style.icon2}
              icon={faTimes}
            />
          </div>

          <ul className={style.nav}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="/About">About</Link>
            </li>
            <li>
              <Link href="/Services">Services</Link>
            </li>
          </ul>
        </div>

        <div className={style.btn}>
          <button>Let&apos;s Connect</button>
        </div>
      </div>
    </>
  );
};

export default Header;
