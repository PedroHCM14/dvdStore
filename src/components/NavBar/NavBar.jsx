import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";


function NavBar() {
  return (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/">DVDs</Link>
    <Link to="/">Blu-Rays</Link>
    <Link to="/">Lançamentos</Link>
    <CartWidget />
  </nav>
  );
}

export default NavBar;
