// src/components/Header.jsx
import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import nav from "../assets/images/nav.svg";
import banner1 from "../assets/images/Banner1.svg";
import banner2 from "../assets/images/Banner2.svg";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";
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
          <div>
            {" "}
            <p className="shop">Shop Now</p>
            <p className="english">English</p>
          </div>
        </nav>
      </div>
      <div>
        <img src={nav} alt="nav" />
      </div>
      <div className="perks"><h1>EXCLUSIVE PERKS</h1></div>
      <div className="banner">
       <div id="banner1">
       <img src={banner1} alt="banner1" />
       </div>
        <div id="banner2">
        <img src={banner2} alt="banner2" />
        </div>
      </div>
      <div className="list">
        <p>Products / Male Collections / <span>Shoes</span></p>
        <div id="icon"><img src={icon} alt="" /></div>
      </div>
      <div className="products">
        <img src={product1} alt="product1" />
        <img src={product2} alt="product2" />
        <img src={product3} alt="product3" />
        <img src={product4} alt="product4" />
      </div>
      <div id="paginate">
        <img src={pagination} alt="pagination" />
      </div>
    </div>
  );
}
