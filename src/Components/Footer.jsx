// src/components/Footer.jsx
import React from "react";
import social from "../assets/images/social.png";
import "../css/style.css";


export default function Footer() {
  return (
    <div className="">
      <div className="footer-part">
        <section>
          <h1>Join Our Community</h1>
          <p>
            We have the community committed to sharing more information <br />
            about us.To get our promo you can leave your email here
          </p>
          <div id="input-part">
            <input type="email" placeholder="Add your email here" />
            <button>Subscribe</button>
          </div>
        </section>
      </div>
      <footer>
        <div className="lower-footer  ">
          <div className="main">
            <h1 >KICKZZS</h1>
            <img src={social} alt="media" />
          </div>
          <div className="service">
            <div id="services"><h2 id="ser">Services</h2><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0.25C10.1989 0.25 10.3897 0.329018 10.5303 0.46967C10.671 0.610322 10.75 0.801088 10.75 1V9.25H19C19.1989 9.25 19.3897 9.32902 19.5303 9.46967C19.671 9.61032 19.75 9.80109 19.75 10C19.75 10.1989 19.671 10.3897 19.5303 10.5303C19.3897 10.671 19.1989 10.75 19 10.75H10.75V19C10.75 19.1989 10.671 19.3897 10.5303 19.5303C10.3897 19.671 10.1989 19.75 10 19.75C9.80109 19.75 9.61032 19.671 9.46967 19.5303C9.32902 19.3897 9.25 19.1989 9.25 19V10.75H1C0.801088 10.75 0.610322 10.671 0.46967 10.5303C0.329018 10.3897 0.25 10.1989 0.25 10C0.25 9.80109 0.329018 9.61032 0.46967 9.46967C0.610322 9.32902 0.801088 9.25 1 9.25H9.25V1C9.25 0.801088 9.32902 0.610322 9.46967 0.46967C9.61032 0.329018 9.80109 0.25 10 0.25Z" fill="white"/>
</svg></div>
            <p>
              Clothing <br />
              Wholesale <br /> Branding <br /> Dropshipping
            </p>
          </div>
          <div className="account">
            <div id="account"><h2 id="acc">Account</h2><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0.25C10.1989 0.25 10.3897 0.329018 10.5303 0.46967C10.671 0.610322 10.75 0.801088 10.75 1V9.25H19C19.1989 9.25 19.3897 9.32902 19.5303 9.46967C19.671 9.61032 19.75 9.80109 19.75 10C19.75 10.1989 19.671 10.3897 19.5303 10.5303C19.3897 10.671 19.1989 10.75 19 10.75H10.75V19C10.75 19.1989 10.671 19.3897 10.5303 19.5303C10.3897 19.671 10.1989 19.75 10 19.75C9.80109 19.75 9.61032 19.671 9.46967 19.5303C9.32902 19.3897 9.25 19.1989 9.25 19V10.75H1C0.801088 10.75 0.610322 10.671 0.46967 10.5303C0.329018 10.3897 0.25 10.1989 0.25 10C0.25 9.80109 0.329018 9.61032 0.46967 9.46967C0.610322 9.32902 0.801088 9.25 1 9.25H9.25V1C9.25 0.801088 9.32902 0.610322 9.46967 0.46967C9.61032 0.329018 9.80109 0.25 10 0.25Z" fill="white"/>
</svg></div>
            <p>
              My Account <br /> Login/Register <br /> Cart <br /> Favorites{" "}
              <br /> Shop
            </p>
          </div>
          <div className="support">
            <div id="support"><h2 id="sup">Support</h2><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0.25C10.1989 0.25 10.3897 0.329018 10.5303 0.46967C10.671 0.610322 10.75 0.801088 10.75 1V9.25H19C19.1989 9.25 19.3897 9.32902 19.5303 9.46967C19.671 9.61032 19.75 9.80109 19.75 10C19.75 10.1989 19.671 10.3897 19.5303 10.5303C19.3897 10.671 19.1989 10.75 19 10.75H10.75V19C10.75 19.1989 10.671 19.3897 10.5303 19.5303C10.3897 19.671 10.1989 19.75 10 19.75C9.80109 19.75 9.61032 19.671 9.46967 19.5303C9.32902 19.3897 9.25 19.1989 9.25 19V10.75H1C0.801088 10.75 0.610322 10.671 0.46967 10.5303C0.329018 10.3897 0.25 10.1989 0.25 10C0.25 9.80109 0.329018 9.61032 0.46967 9.46967C0.610322 9.32902 0.801088 9.25 1 9.25H9.25V1C9.25 0.801088 9.32902 0.610322 9.46967 0.46967C9.61032 0.329018 9.80109 0.25 10 0.25Z" fill="white"/>
</svg></div>
            <p>
              Contact <br /> Give Feedback <br /> FAQ <br />
              Privacy Policy
            </p>
          </div>
        </div>
        <div className="bottom">
         <p>Copyright Investo 2023.  All rights reserved.</p>
         </div>
      </footer>
    </div>
  );
}
