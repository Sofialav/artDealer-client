import React, { Component } from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";

class NavbarContainer extends Component {
  render() {
    return <Navbar />;
  }
}

export default connect(null)(NavbarContainer);
