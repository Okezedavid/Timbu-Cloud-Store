import React from "react";
import nav from "../assets/images/nav.svg";
import cart from "../assets/images/cart frame.png";
import icon from "../assets/images/icon.png";
import "../css/style.css";
import "../css/page.css";
import "../css/cart.css";

export default function cart() {
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
          Products / Male Collections / <span>Shoes</span>
        </p>
        <div id="icon">
          <img src={icon} alt="" />
        </div>
      </div>
      <div className="cart-lists">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>
      <div className="cart-products">
        <img src={cart} alt="products" />
      </div>
           <div className="cart-total">
             <div id="shoping-items">
             <h2>Cart Total</h2>
              <p>Subtotal</p>
              <p>Shopping</p>
              <p>Total</p>
              <button>Proceed to Checkout</button>
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
