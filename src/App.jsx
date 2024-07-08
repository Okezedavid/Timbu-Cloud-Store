// src/App.jsx
import React from "react";
import Page from "./Components/Page";
import Footer from "../src/Components/Footer";
import Cart from "../src/Components/Cart";
import Checkout from "../src/Components/Checkout";

import { BrowserRouter,Route,Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page/>}/>
      <Route path="/Footer" element={<Footer/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Checkout" element={<Checkout/>}/>
    </Routes>
  </BrowserRouter>
  );
};


export default App;
