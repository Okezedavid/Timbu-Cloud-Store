import React from "react";
import "../css/style.css";
import "../css/page.css";
// import "../css/cart.css";

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
        <img src={nav} alt="nav" />
      </div>

      <div className="list">
        <p>
          Home / Products / Carts /<span>Checkout</span>
        </p>
      </div>
   <div className="billing-order">
   <div className="billing-address">
        <h1>Billing Address</h1>
        <label htmlFor="name">First Name</label>
        <input placeholder="Enter Fist Name" type="text" />
        <label htmlFor="name">Last Name</label>
        <input placeholder="Enter Last Name" type="text" />
        <label htmlFor="number">Phone Number</label>
        <input placeholder="Enter Phone Number" type="text" />
        <label htmlFor="email">Email</label>
        <input placeholder="Enter Email" type="text" />
        <label htmlFor="address">Delivey Address</label>
        <input placeholder="Enter Address" type="text" />
        <label htmlFor="address">Town/City</label>
        <input placeholder="Enter Address" type="text" />
      </div>
      <div className="order">
        <h2>Order Summary</h2>
        <hr />
        <p>Items(4)</p>
        <p>Delivery</p>
        <p>Bank</p>
        <p>Cash on Delivery</p>
        <div>
          <p>$173</p>
          <p>$12</p>
        </div>
        <div>
          <input placeholder="coupon code" type="text" />
          <button>Apply Coupon</button>
        </div>
        <button>Purchase Now</button>
      </div>
   </div>
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
            <p>Copyright Investo 2023. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
