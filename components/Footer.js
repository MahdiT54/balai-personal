import Link from "next/link";
import logo from "../public/Logo.svg";
import footerstyles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className={`container`}>
        <div className={`row ${footerstyles.footer__row}`}>
          <a href="#" className={footerstyles.footer__anchor}>
            <figure>
              <img
                className={`${footerstyles["footer__logo--img"]} logo-invert`}
                src="/Logo.svg"
                alt=""
              />
            </figure>
            <span className={footerstyles["footer__logo--popper"]}>
              Top
              <FontAwesomeIcon icon={faArrowUp} />{" "}
            </span>
          </a>
          <div className={footerstyles["footer__social--list"]}>
            <Link href="/about" className={footerstyles["footer__social--link"]}>About</Link>
            <Link href="/contact" className={footerstyles["footer__social--link"]}>Contact</Link>
            <Link href="/technology" className={footerstyles["footer__social--link"]}>Technology</Link>
            <Link href="/" className={footerstyles["footer__social--link"]}>Newsletter</Link>
            
          </div>
          <div className={footerstyles.footer__copyright}>
            Copyright © 2024 BalanceAI
          </div>
        </div>
      </div>
    </footer>
  );
}
