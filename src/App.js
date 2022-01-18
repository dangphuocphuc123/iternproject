import "../src/App.css";
import React from "react";
import Nav from "./components/Nav";
import About from "./pages/About";
import Shop from "./components/Shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetail from "./pages/ItemDetail";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { useState, useEffect } from "react";
import Contact from "./pages/Contact";
import SlideImage from "./components/SlideImage";
import SignIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Provider } from "react-redux";
import stores from "../src/stores/index";

function App() {
  return (
    
      <div>
        <Router>
          <div class="header">{/* <Nav /> */}</div>
          <div className="App">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" exact element={<Shop />} />
              <Route path="/:id" element={<ItemDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
          <div>{/* <Footer /> */}</div>
        </Router>
      </div>
  );
}

export default App;
