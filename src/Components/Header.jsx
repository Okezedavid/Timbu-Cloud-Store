// src/components/Header.jsx
import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import nav from "../assets/images/nav.svg";
import banner1 from "../assets/images/Banner1.svg";
import banner2 from "../assets/images/Banner2.svg";
import pic1 from "../assets/images/pic1.png";
import pic2 from "../assets/images/pic2.png";
import pic3 from "../assets/images/pic3.png";
import pic4 from "../assets/images/pic4.png";
import pic5 from "../assets/images/pic5.png";
import pic6 from "../assets/images/pic6.png";
import pic7 from "../assets/images/pic7.png";
import pic8 from "../assets/images/pic8.png";
import pic9 from "../assets/images/pic9.png";
import pic10 from "../assets/images/pic10.png";
import pic11 from "../assets/images/pic11.png";
import pic12 from "../assets/images/pic12.png";
import pic13 from "../assets/images/pic13.png";
import pic14 from "../assets/images/pic14.png";
import pic15 from "../assets/images/pic15.png";
import pic16 from "../assets/images/pic16.png";
import pagination from "../assets/images/Pagination.png";
import icon from "../assets/images/icon.png";
import "../css/style.css";
import "../css/page.css";


export default function Header() {
  return (
    <div className="page">
      <div className="nav-section">
        <nav>
          <p>
            Make a splash with our summer sales: 50% off + Express <br />{" "}
            Delivery
          </p>
          <div > 
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
      <div className="perks">
        <h1>EXCLUSIVE PERKS</h1>
      </div>
      <div className="banner">
        <div id="banner1">
          <img src={banner1} alt="banner1" />
        </div>
        <div id="banner2">
          <img src={banner2} alt="banner2" />
        </div>
      </div>
      <div className="list">
        <p>
          Products / Male Collections / <span>Shoes</span>
        </p>
        <div id="icon">
          <img src={icon} alt="" />
        </div>
      </div>
      <div className="products">
        <div className="section1">
          <div id="image1">
            <img src={pic1} alt="products" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 3C4.239 3 2 5.23669 2 7.99621C2 10.2238 2.875 15.5107 11.488 20.8551C11.6423 20.9499 11.8194 21 12 21C12.1806 21 12.3577 20.9499 12.512 20.8551C21.125 15.5107 22 10.2238 22 7.99621C22 5.23669 19.761 3 17 3C14.239 3 12 6.028 12 6.028C12 6.028 9.761 3 7 3Z"
                stroke="#0D1216"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Custom Air Force one</p>
            <p>$ 40.00</p>
            <button>Add to cart</button>
          </div>
          <div id="image2"> 
            <img src={pic2} alt="products" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 3C4.239 3 2 5.23669 2 7.99621C2 10.2238 2.875 15.5107 11.488 20.8551C11.6423 20.9499 11.8194 21 12 21C12.1806 21 12.3577 20.9499 12.512 20.8551C21.125 15.5107 22 10.2238 22 7.99621C22 5.23669 19.761 3 17 3C14.239 3 12 6.028 12 6.028C12 6.028 9.761 3 7 3Z"
                stroke="#0D1216"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Custom Air Force one</p>
            <p>$ 40.00</p>
            <button>Add to cart</button>
          </div>
          <div id="image3">
            <img src={pic3} alt="products" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 3C4.239 3 2 5.23669 2 7.99621C2 10.2238 2.875 15.5107 11.488 20.8551C11.6423 20.9499 11.8194 21 12 21C12.1806 21 12.3577 20.9499 12.512 20.8551C21.125 15.5107 22 10.2238 22 7.99621C22 5.23669 19.761 3 17 3C14.239 3 12 6.028 12 6.028C12 6.028 9.761 3 7 3Z"
                stroke="#0D1216"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Custom Air Force one</p>
            <p>$ 40.00</p>
            <button>Add to cart</button>
          </div>
          <div id="image4">
            <img src={pic4} alt="products" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 3C4.239 3 2 5.23669 2 7.99621C2 10.2238 2.875 15.5107 11.488 20.8551C11.6423 20.9499 11.8194 21 12 21C12.1806 21 12.3577 20.9499 12.512 20.8551C21.125 15.5107 22 10.2238 22 7.99621C22 5.23669 19.761 3 17 3C14.239 3 12 6.028 12 6.028C12 6.028 9.761 3 7 3Z"
                stroke="#0D1216"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Custom Air Force one</p>
            <p>$ 40.00</p>
            <button>Add to cart</button>
          </div>
        </div>
        <div className="section2">
        <div id="image5"> 
            <img src={pic5} alt="products" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 3C4.239 3 2 5.23669 2 7.99621C2 10.2238 2.875 15.5107 11.488 20.8551C11.6423 20.9499 11.8194 21 12 21C12.1806 21 12.3577 20.9499 12.512 20.8551C21.125 15.5107 22 10.2238 22 7.99621C22 5.23669 19.761 3 17 3C14.239 3 12 6.028 12 6.028C12 6.028 9.761 3 7 3Z"
                stroke="#0D1216"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Custom Air Force one</p>
            <p>$ 40.00</p>
            <button>Add to cart</button>
          </div>
          <div id="image6">
            <img src={pic6} alt="products" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 3C4.239 3 2 5.23669 2 7.99621C2 10.2238 2.875 15.5107 11.488 20.8551C11.6423 20.9499 11.8194 21 12 21C12.1806 21 12.3577 20.9499 12.512 20.8551C21.125 15.5107 22 10.2238 22 7.99621C22 5.23669 19.761 3 17 3C14.239 3 12 6.028 12 6.028C12 6.028 9.761 3 7 3Z"
                stroke="#0D1216"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Custom Air Force one</p>
            <p>$ 40.00</p>
            <button>Add to cart</button>
          </div>
          <div id="image7"> 
            <img src={pic7} alt="products" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 3C4.239 3 2 5.23669 2 7.99621C2 10.2238 2.875 15.5107 11.488 20.8551C11.6423 20.9499 11.8194 21 12 21C12.1806 21 12.3577 20.9499 12.512 20.8551C21.125 15.5107 22 10.2238 22 7.99621C22 5.23669 19.761 3 17 3C14.239 3 12 6.028 12 6.028C12 6.028 9.761 3 7 3Z"
                stroke="#0D1216"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Custom Air Force one</p>
            <p>$ 40.00</p>
            <button>Add to cart</button>
          </div>
          <div id="image8">
            <img src={pic8} alt="products" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 3C4.239 3 2 5.23669 2 7.99621C2 10.2238 2.875 15.5107 11.488 20.8551C11.6423 20.9499 11.8194 21 12 21C12.1806 21 12.3577 20.9499 12.512 20.8551C21.125 15.5107 22 10.2238 22 7.99621C22 5.23669 19.761 3 17 3C14.239 3 12 6.028 12 6.028C12 6.028 9.761 3 7 3Z"
                stroke="#0D1216"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Custom Air Force one</p>
            <p>$ 40.00</p>
            <button>Add to cart</button>
          </div>
        </div>
        <div className="section3">
        <div id="image9">
            <img src={pic9} alt="products" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 3C4.239 3 2 5.23669 2 7.99621C2 10.2238 2.875 15.5107 11.488 20.8551C11.6423 20.9499 11.8194 21 12 21C12.1806 21 12.3577 20.9499 12.512 20.8551C21.125 15.5107 22 10.2238 22 7.99621C22 5.23669 19.761 3 17 3C14.239 3 12 6.028 12 6.028C12 6.028 9.761 3 7 3Z"
                stroke="#0D1216"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Custom Air Force one</p>
            <p>$ 40.00</p>
            <button>Add to cart</button>
          </div>
          <div id="image10">
            <img src={pic10} alt="products" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 3C4.239 3 2 5.23669 2 7.99621C2 10.2238 2.875 15.5107 11.488 20.8551C11.6423 20.9499 11.8194 21 12 21C12.1806 21 12.3577 20.9499 12.512 20.8551C21.125 15.5107 22 10.2238 22 7.99621C22 5.23669 19.761 3 17 3C14.239 3 12 6.028 12 6.028C12 6.028 9.761 3 7 3Z"
                stroke="#0D1216"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Custom Air Force one</p>
            <p>$ 40.00</p>
            <button>Add to cart</button>
          </div>
          <div id="image11">
            <img src={pic11} alt="products" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 3C4.239 3 2 5.23669 2 7.99621C2 10.2238 2.875 15.5107 11.488 20.8551C11.6423 20.9499 11.8194 21 12 21C12.1806 21 12.3577 20.9499 12.512 20.8551C21.125 15.5107 22 10.2238 22 7.99621C22 5.23669 19.761 3 17 3C14.239 3 12 6.028 12 6.028C12 6.028 9.761 3 7 3Z"
                stroke="#0D1216"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Custom Air Force one</p>
            <p>$ 40.00</p>
            <button>Add to cart</button>
          </div>
          <div id="image12"> 
            <img src={pic12} alt="products" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 3C4.239 3 2 5.23669 2 7.99621C2 10.2238 2.875 15.5107 11.488 20.8551C11.6423 20.9499 11.8194 21 12 21C12.1806 21 12.3577 20.9499 12.512 20.8551C21.125 15.5107 22 10.2238 22 7.99621C22 5.23669 19.761 3 17 3C14.239 3 12 6.028 12 6.028C12 6.028 9.761 3 7 3Z"
                stroke="#0D1216"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Custom Air Force one</p>
            <p>$ 40.00</p>
            <button>Add to cart</button>
          </div>
        </div>
        <div className="section4">
        <div id="image13">
            <img src={pic13} alt="products" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 3C4.239 3 2 5.23669 2 7.99621C2 10.2238 2.875 15.5107 11.488 20.8551C11.6423 20.9499 11.8194 21 12 21C12.1806 21 12.3577 20.9499 12.512 20.8551C21.125 15.5107 22 10.2238 22 7.99621C22 5.23669 19.761 3 17 3C14.239 3 12 6.028 12 6.028C12 6.028 9.761 3 7 3Z"
                stroke="#0D1216"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Custom Air Force one</p>
            <p>$ 40.00</p>
            <button>Add to cart</button>
          </div>
          <div id="image14">
            <img src={pic14} alt="products" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 3C4.239 3 2 5.23669 2 7.99621C2 10.2238 2.875 15.5107 11.488 20.8551C11.6423 20.9499 11.8194 21 12 21C12.1806 21 12.3577 20.9499 12.512 20.8551C21.125 15.5107 22 10.2238 22 7.99621C22 5.23669 19.761 3 17 3C14.239 3 12 6.028 12 6.028C12 6.028 9.761 3 7 3Z"
                stroke="#0D1216"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Custom Air Force one</p>
            <p>$ 40.00</p>
            <button>Add to cart</button>
          </div>
          <div id="image15">
            <img src={pic15} alt="products" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 3C4.239 3 2 5.23669 2 7.99621C2 10.2238 2.875 15.5107 11.488 20.8551C11.6423 20.9499 11.8194 21 12 21C12.1806 21 12.3577 20.9499 12.512 20.8551C21.125 15.5107 22 10.2238 22 7.99621C22 5.23669 19.761 3 17 3C14.239 3 12 6.028 12 6.028C12 6.028 9.761 3 7 3Z"
                stroke="#0D1216"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Custom Air Force one</p>
            <p>$ 40.00</p>
            <button>Add to cart</button>
          </div>
          <div id="image16">
            <img src={pic16} alt="products" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 3C4.239 3 2 5.23669 2 7.99621C2 10.2238 2.875 15.5107 11.488 20.8551C11.6423 20.9499 11.8194 21 12 21C12.1806 21 12.3577 20.9499 12.512 20.8551C21.125 15.5107 22 10.2238 22 7.99621C22 5.23669 19.761 3 17 3C14.239 3 12 6.028 12 6.028C12 6.028 9.761 3 7 3Z"
                stroke="#0D1216"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Custom Air Force one</p>
            <p>$ 40.00</p>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
      <div id="paginate">
        <img src={pagination} alt="pagination" />
      </div>
    </div>
  );
}
