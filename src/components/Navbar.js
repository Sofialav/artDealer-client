import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  loginCheck = () => {
    if (!this.props.user) {
      const login = (
        <Link to="/login">
          <div>Login</div>
        </Link>
      );
      return login;
    } else {
      const login = (
        <Link to={"/myPage"}>
          <div>My page</div>
        </Link>
      );
      return login;
    }
  };
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
        {this.loginCheck()}
        <Link to="/cart">
          <div>Cart</div>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
