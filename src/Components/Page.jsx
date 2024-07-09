// src/components/Header.jsx
import React from "react";
import { Link } from 'react-router-dom';
import Footer from "./Footer"
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
import "../index.css";

export default function Header() {
  return (
    
      <div className="page">
      <div className="nav-section">
        <nav>
          <p id="splash">
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
      <div className="bottom-nav">
        <div className="kicks">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
          >
            <path
              d="M24.8267 30.16L25.5067 27.68H15.0433C13.9717 27.6735 12.9309 28.0386 12.0982 28.7133C11.2656 29.3879 10.6925 30.3303 10.4767 31.38L9.62332 35.6234C9.5362 36.0702 9.54967 36.5309 9.66275 36.9719C9.77583 37.4129 9.98569 37.8232 10.2771 38.173C10.5685 38.5228 10.9341 38.8034 11.3474 38.9943C11.7608 39.1852 12.2114 39.2816 12.6667 39.2767H22.5067L24.06 33.4767H19.8567L19.09 35.6534H15.3467C15.2129 35.6577 15.0799 35.6311 14.9582 35.5755C14.8364 35.5199 14.7292 35.4369 14.6449 35.3329C14.5607 35.2289 14.5016 35.1068 14.4724 34.9762C14.4432 34.8456 14.4447 34.71 14.4767 34.58L15.1433 31.9567C15.192 31.7644 15.3039 31.5941 15.4611 31.4731C15.6183 31.3522 15.8117 31.2877 16.01 31.29H23.3167C24.0267 31.29 24.6367 30.8234 24.8233 30.1567M43.65 44.65L44.3467 42.17H35.36C34.2859 42.1634 33.2424 42.5276 32.4056 43.2011C31.5688 43.8745 30.9899 44.816 30.7667 45.8667L29.91 50.1134C29.8238 50.5615 29.8385 51.0231 29.953 51.4648C30.0675 51.9066 30.279 52.3172 30.572 52.6671C30.865 53.0169 31.2322 53.2971 31.647 53.4873C32.0618 53.6775 32.5137 53.7729 32.97 53.7667H41.8967L42.68 50.14H35.6467C35.4462 50.1449 35.2503 50.0801 35.0923 49.9567C34.9342 49.8333 34.8239 49.659 34.78 49.4634C34.754 49.3335 34.754 49.1998 34.78 49.07L35.46 46.4467C35.5088 46.2538 35.6212 46.0831 35.7791 45.9621C35.937 45.8411 36.1311 45.777 36.33 45.78H42.13C42.8533 45.78 43.4633 45.3134 43.6333 44.6467L43.65 44.65Z"
              fill="#3B32D8"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M26.4067 31.3766C26.6516 30.3127 27.2543 29.3651 28.114 28.6923C28.9738 28.0194 30.0384 27.6621 31.13 27.68H36.45C38.4767 27.68 40 29.4466 39.6067 31.3333L38.84 34.9266H30.58C30.3962 34.9391 30.224 35.0209 30.0983 35.1555C29.9725 35.2901 29.9025 35.4674 29.9025 35.6516C29.9025 35.8358 29.9725 36.0132 30.0983 36.1478C30.224 36.2824 30.3962 36.3642 30.58 36.3766H38.55L37.9567 39.2766H28.9567C26.7834 39.2766 25.1567 37.39 25.58 35.36L26.4067 31.3766ZM31.3067 31.3033C31.3067 30.8966 31.6234 30.58 32.03 30.58H34.93C35.1099 30.5972 35.2768 30.6809 35.3983 30.8147C35.5198 30.9484 35.5872 31.1226 35.5872 31.3033C35.5872 31.484 35.5198 31.6582 35.3983 31.7919C35.2768 31.9257 35.1099 32.0093 34.93 32.0266H32.03C31.9347 32.0271 31.8403 32.0087 31.7522 31.9725C31.664 31.9364 31.5839 31.8832 31.5164 31.816C31.4489 31.7487 31.3953 31.6689 31.3587 31.5809C31.3222 31.4929 31.3033 31.3986 31.3033 31.3033"
              fill="#272190"
            />
            <path
              d="M42.9 31.3033L41.84 36.6666C41.7761 36.9814 41.7826 37.3065 41.8591 37.6184C41.9356 37.9304 42.0802 38.2216 42.2825 38.4711C42.4848 38.7206 42.7399 38.9222 43.0293 39.0615C43.3188 39.2007 43.6355 39.2742 43.9567 39.2766H50.6234L51.5934 35.65H46.5234L47.4767 31.3033H48.39C49.6234 31.3033 51.1167 30.1733 51.3634 28.94L51.5967 27.68H48.1467L48.4634 26.23H43.8267L43.5367 27.68H42.0867L41.45 31.3033H42.9ZM25.1 42.1733H29.8567L27.3634 53.7666H22.61L25.1 42.1733ZM50.1 45.32L50.71 42.1733H46.39L44.1167 53.7666H48.4334L48.9267 51.3033L50.3767 49.8266L52.9867 53.7666H57.97L53.7367 47.2L58.84 42.1733C55.6614 42.2403 52.5919 43.3454 50.1 45.32ZM8.94335 42.1733H13.2767L12.4067 46.52H13.7834L18.0734 42.1733H22.68L17.6367 48.0866L21.16 53.7666H19.55C17.35 52.8666 14.4767 51.13 13.81 48.52C13.4767 48.5933 12.71 48.7833 12.19 48.9533C11.9278 49.0528 11.6792 49.1849 11.45 49.3466C11.13 49.5633 10.87 49.74 10.6667 49.61C10.4067 49.4333 10.2767 48.9566 10.2334 48.74C10.5234 48.8833 11.1334 49.13 11.2167 48.9566C11.3167 48.74 11.1 47.8566 10.2334 47.8566C9.36335 47.8566 8.92669 49.29 8.92669 50.49C8.92669 51.69 9.79669 52.0133 10.2334 52.0133H10.32C10.9134 52.0133 13.0867 51.9867 13.7967 53.4333L13.58 53.3466C12.768 52.9687 11.8935 52.7428 11 52.68C10.2951 52.6511 9.59999 52.5046 8.94335 52.2466C9.11669 52.5366 9.63669 53.1133 10.2434 53.1133C10.91 53.1133 12.2034 53.2033 12.8567 53.7666H6.66669L8.94335 42.1733ZM73.0434 43.68L73.3334 42.1733H64.03C63.0312 42.1847 62.0775 42.5907 61.3769 43.3026C60.6763 44.0144 60.2856 44.9745 60.29 45.9733V46.7666C60.29 48.1 61.3034 49.2333 62.58 49.42L68.4634 50.32H61.4067C60.834 50.326 60.2824 50.5367 59.8514 50.9138C59.4205 51.291 59.1386 51.8098 59.0567 52.3766L58.84 53.7666H68.68C70.5067 53.7666 71.68 52.3033 71.7967 50.4333L71.8834 49.0566C71.97 47.7233 71.3034 46.5633 70 46.49L65.4767 46.2033C65.4059 46.1938 65.3409 46.1594 65.2932 46.1062C65.2456 46.0531 65.2184 45.9847 65.2167 45.9133C65.2192 45.8372 65.2505 45.7649 65.3044 45.711C65.3582 45.6572 65.4306 45.6258 65.5067 45.6233H70.7533C71.3033 45.6175 71.834 45.4203 72.2543 45.0656C72.6746 44.711 72.9583 44.2211 73.0567 43.68H73.0434Z"
              fill="#3129B4"
            />
          </svg>
        </div>
        <p>Home</p>
        <p>About</p>
        <p>
          <span>Products</span>
        </p>
        <p>Blogs</p>
        <div id="input-svg">
          {" "}
          <input placeholder="What are you looking for?" type="text" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M19 19.0002L14.657 14.6572M14.657 14.6572C15.3998 13.9143 15.9891 13.0324 16.3912 12.0618C16.7932 11.0911 17.0002 10.0508 17.0002 9.00021C17.0002 7.9496 16.7932 6.90929 16.3912 5.93866C15.9891 4.96803 15.3998 4.08609 14.657 3.34321C13.9141 2.60032 13.0321 2.01103 12.0615 1.60898C11.0909 1.20693 10.0506 1 8.99996 1C7.94936 1 6.90905 1.20693 5.93842 1.60898C4.96779 2.01103 4.08585 2.60032 3.34296 3.34321C1.84263 4.84354 0.999756 6.87842 0.999756 9.00021C0.999756 11.122 1.84263 13.1569 3.34296 14.6572C4.84329 16.1575 6.87818 17.0004 8.99996 17.0004C11.1217 17.0004 13.1566 16.1575 14.657 14.6572Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="svgs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
          >
            <path
              d="M6 1C3.239 1 1 3.23669 1 5.99621C1 8.22381 1.875 13.5107 10.488 18.8551C10.6423 18.9499 10.8194 19 11 19C11.1806 19 11.3577 18.9499 11.512 18.8551C20.125 13.5107 21 8.22381 21 5.99621C21 3.23669 18.761 1 16 1C13.239 1 11 4.028 11 4.028C11 4.028 8.761 1 6 1Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="23"
            viewBox="0 0 20 23"
            fill="none"
          >
            <path
              d="M19.5303 14.4697L17.5 12.4395V9.75C17.4977 7.89138 16.8063 6.09964 15.5595 4.72124C14.3127 3.34284 12.5991 2.4757 10.75 2.2875V0.75H9.25V2.2875C7.40093 2.4757 5.68732 3.34284 4.44053 4.72124C3.19373 6.09964 2.50233 7.89138 2.5 9.75V12.4395L0.46975 14.4697C0.329088 14.6104 0.250042 14.8011 0.25 15V17.25C0.25 17.4489 0.329018 17.6397 0.46967 17.7803C0.610322 17.921 0.801088 18 1 18H6.25V18.5828C6.23335 19.5343 6.5686 20.4585 7.19145 21.1781C7.81429 21.8977 8.68088 22.362 9.625 22.482C10.1464 22.5337 10.6728 22.4757 11.1704 22.3117C11.6681 22.1478 12.1259 21.8815 12.5144 21.53C12.9029 21.1785 13.2136 20.7495 13.4264 20.2707C13.6392 19.792 13.7494 19.2739 13.75 18.75V18H19C19.1989 18 19.3897 17.921 19.5303 17.7803C19.671 17.6397 19.75 17.4489 19.75 17.25V15C19.75 14.8011 19.6709 14.6104 19.5303 14.4697ZM12.25 18.75C12.25 19.3467 12.0129 19.919 11.591 20.341C11.169 20.7629 10.5967 21 10 21C9.40326 21 8.83097 20.7629 8.40901 20.341C7.98705 19.919 7.75 19.3467 7.75 18.75V18H12.25V18.75ZM18.25 16.5H1.75V15.3105L3.78025 13.2803C3.92091 13.1396 3.99996 12.9489 4 12.75V9.75C4 8.1587 4.63214 6.63258 5.75736 5.50736C6.88258 4.38214 8.4087 3.75 10 3.75C11.5913 3.75 13.1174 4.38214 14.2426 5.50736C15.3679 6.63258 16 8.1587 16 9.75V12.75C16 12.9489 16.0791 13.1396 16.2197 13.2803L18.25 15.3105V16.5Z"
              fill="black"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z"
              stroke="#141B34"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z"
              stroke="#141B34"
              stroke-width="1.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="61"
            viewBox="0 0 60 61"
            fill="none"
          >
            <g filter="url(#filter0_i_41_1820)">
              <circle cx="30" cy="30.5" r="30" fill="#F2F4F7" />
            </g>
            <defs>
              <filter
                id="filter0_i_41_1820"
                x="0"
                y="0.5"
                width="62"
                height="68"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="1"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_innerShadow_41_1820"
                />
                <feOffset dx="2" dy="8" />
                <feGaussianBlur stdDeviation="8" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_41_1820"
                />
              </filter>
            </defs>
          </svg>
          <div className="circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
            >
              <path
                d="M21.25 23C21.913 23 22.5489 23.2634 23.0178 23.7322C23.4866 24.2011 23.75 24.837 23.75 25.5C23.75 26.163 23.4866 26.7989 23.0178 27.2678C22.5489 27.7366 21.913 28 21.25 28C20.587 28 19.9511 27.7366 19.4822 27.2678C19.0134 26.7989 18.75 26.163 18.75 25.5C18.75 24.1125 19.8625 23 21.25 23ZM1.25 3H5.3375L6.5125 5.5H25C25.3315 5.5 25.6495 5.6317 25.8839 5.86612C26.1183 6.10054 26.25 6.41848 26.25 6.75C26.25 6.9625 26.1875 7.175 26.1 7.375L21.625 15.4625C21.2 16.225 20.375 16.75 19.4375 16.75H10.125L9 18.7875L8.9625 18.9375C8.9625 19.0204 8.99542 19.0999 9.05403 19.1585C9.11263 19.2171 9.19212 19.25 9.275 19.25H23.75V21.75H8.75C8.08696 21.75 7.45107 21.4866 6.98223 21.0178C6.51339 20.5489 6.25 19.913 6.25 19.25C6.25 18.8125 6.3625 18.4 6.55 18.05L8.25 14.9875L3.75 5.5H1.25V3ZM8.75 23C9.41304 23 10.0489 23.2634 10.5178 23.7322C10.9866 24.2011 11.25 24.837 11.25 25.5C11.25 26.163 10.9866 26.7989 10.5178 27.2678C10.0489 27.7366 9.41304 28 8.75 28C8.08696 28 7.45107 27.7366 6.98223 27.2678C6.51339 26.7989 6.25 26.163 6.25 25.5C6.25 24.1125 7.3625 23 8.75 23ZM20 14.25L23.475 8H7.675L10.625 14.25H20Z"
                fill="#0D1216"
              />
            </svg>
          </div>
        </div>
        <div id="four">
        <span>4</span>
        </div>
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
      {/* SECTION FOR THE PRODUCTS ON THE PAGE */}
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
            <Link to="/Cart"><button>Add to cart</button></Link>
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
            <Link to="/Cart"><button>Add to cart</button></Link>
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
            <Link to="/Cart"><button>Add to cart</button></Link>
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
            <Link to="/Cart"><button>Add to cart</button></Link>
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
            <Link to="/Cart"><button>Add to cart</button></Link>
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
            <Link to="/Cart"><button>Add to cart</button></Link>
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
            <Link to="/Cart"><button>Add to cart</button></Link>
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
            <Link to="/Cart"><button>Add to cart</button></Link>
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
            <Link to="/Cart"><button>Add to cart</button></Link>
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
            <Link to="/Cart"><button>Add to cart</button></Link>
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
            <Link to="/Cart"><button>Add to cart</button></Link>
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
            <Link to="/Cart"><button>Add to cart</button></Link>
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
            <Link to="/Cart"><button>Add to cart</button></Link>
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
            <Link to="/Cart"><button>Add to cart</button></Link>
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
            <Link to="/Cart"><button>Add to cart</button></Link>
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
            <Link to="/Cart"><button>Add to cart</button></Link>
          </div>
        </div>
      </div>
      <div id="paginate">
        <img src={pagination} alt="pagination" />
      </div>
      <Footer/>
    </div>
   
  );
}
