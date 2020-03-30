import React, { Component } from "react";
import { connect } from "react-redux";
import AddArtwork from "./AddArtwork";

class AddArtworkContainer extends Component {
  state = { name: "", description: "", price: 0 };
  render() {
    return <AddArtwork />;
  }
}

export default connect(null)(AddArtworkContainer);
