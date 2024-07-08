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
            <button>Sign Up</button>
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
            <h2>Services</h2>
            <p>
              Clothing <br />
              Wholesale <br /> Branding <br /> Dropshipping
            </p>
          </div>
          <div className="account">
            <h2>Account</h2>
            <p>
              My Account <br /> Login/Register <br /> Cart <br /> Favorites{" "}
              <br /> Shop
            </p>
          </div>
          <div className="support">
            <h2>Support</h2>
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
