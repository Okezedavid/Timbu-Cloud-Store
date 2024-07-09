import React from "react";
import "../css/style.css";
import "../css/page.css";
import social from "../assets/images/social.png";
import "../css/checkout.css";

export default function Checkout() {
  return (
    <div className="page">
      <div className="nav-section">
        <nav>
          <p>
            Make a splash with our summer sales: 50% off + Express <br />{" "}
            Delivery
          </p>
          <div>
            {" "}
            <p className="shop">Shop Now</p>
            <div>
              <p className="english">English</p>
              <div className="down-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M12.864 12.95L17.814 8L19.228 9.414L12.864 15.778L6.50003 9.414L7.91403 8L12.864 12.95Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div>
       
      </div>

      <div className="list">
        <p>
          Home  / Products  / Carts  / <span>Checkout</span>
        </p>
      </div>
   <div className="billing-order">
   <div className="billing-address">
        <h1>Billing Address</h1>
        <label htmlFor="name" className="label-p">First Name</label>
        <br />
        <br />
        <input placeholder="Enter Fist Name" type="text" />
        <br />
        <br />
        <label htmlFor="name" className="label-p">Last Name</label>
        <br />
        <br />
        <input placeholder="Enter Last Name" type="text" />
        <br />
        <br />
        <label htmlFor="number" className="label-p">Phone Number</label>
        <br />
        <br />
        <input placeholder="Enter Phone Number" type="text" />
        <br />
        <br />
        <label htmlFor="email" className="label-p">Email</label>
        <br />
        <br />
        <input placeholder="Enter Email" type="text" />
        <br />
        <br />
        <label htmlFor="address" className="label-p">Delivey Address</label>
        <br />
        <br />
        <input placeholder="Enter Address" type="text" />
        <br />
        <br />
        <label htmlFor="address" className="label-p">Town/City</label>
        <br />
        <br />
        <input placeholder="Enter Address" type="text" />
      </div>
      <div className="order">
       <div id="line">
       <h2>Order Summary</h2>
       <hr />
       </div>
        <p>Items(4) <span>$173</span></p>
        <p>Delivery <span>$12</span></p>
        <p>Bank</p>
        <p>Cash on Delivery</p>
        <div>
          <input placeholder="coupon code" type="text" />
          <button id="first-btn">Apply Coupon</button>
        </div>
        <button id="second-btn">Purchase Now</button>
      </div>
   </div>

   {/*  FOOTER SECTION */}
      <div className="footer-side">
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
              <h1>KICKZZS</h1>
            <img src={social} alt="img" />
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
            <p>Copyright Investo 2023. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
