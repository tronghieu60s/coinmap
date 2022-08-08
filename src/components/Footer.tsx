import facebook from "../assets/images/facebook.png";
import logo from "../assets/images/logo.png";
import telegram from "../assets/images/telegram.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" className="footer-logo" />
      <div className="footer-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </div>
      <ul className="footer-icons">
        <li>
          <img src={facebook} alt="Facebook" />
        </li>
        <li>
          <img src={telegram} alt="Telegram" />
        </li>
        <li>
          <img src={twitter} alt="Twitter" />
        </li>
        <li>
          <img src={youtube} alt="Youtube" />
        </li>
      </ul>
      <div className="footer-copyright">
        Copyright 2022. All rights reserved.
      </div>
    </footer>
  );
}
