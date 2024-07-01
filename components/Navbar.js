import Link from "next/link";
import logo from "../public/Logo.svg";
import navstyles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={navstyles.nav}>
      {/* <div className={navstyles.nav__login}></div> */}
      <div className={navstyles.nav__row}>
        <Link href="/">
          <figure className={navstyles.nav__logo}>
            <img
              src="/Logo.svg"
              className={`${navstyles["nav__logo--img"]} logo-invert`}
              alt=""
            />
            <h6 className={navstyles["nav__logo--text"]}>BalanceAI</h6>
          </figure>
        </Link>
        <ul className={navstyles.nav__list}>
          <Link href="/">
            <li
              className={`${navstyles.nav__link} ${navstyles["nav__link--home"]}`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className={navstyles.nav__link}>About</li>
          </Link>
          <Link href="/contact">
            <li className={navstyles.nav__link}>Contact</li>
          </Link>
          <Link href="/technology">
            <li className={navstyles.nav__link}>Technology</li>
          </Link>
        </ul>
          <div className={navstyles["nav__button--container"]}>
            <button className={`${navstyles.nav__button} bai__button--hover bai__button--focus`}>Login</button>
            <button className={`${navstyles.nav__button} bai__button--hover bai__button--focus`}>Sign Up</button>
          </div>
      </div>
    </nav>
  );
}
