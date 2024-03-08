import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";


function NavBar() {
  return (
  <nav>
    <a href="#">Home</a>
    <a href="#">DVDs</a>
    <a href="#">Blu-Rays</a>
    <a href="#">Lançamentos</a>
    <CartWidget />
  </nav>
  );
}

export default NavBar;
