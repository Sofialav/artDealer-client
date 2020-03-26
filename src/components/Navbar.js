import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/artists">
          <div>Artists</div>
        </Link>
        <Link to="/artworks">
          <div>Artworks</div>
        </Link>
        <Link to="/login">
          <div>Login</div>
        </Link>
        <Link to="/cart">
          <div>Cart</div>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
