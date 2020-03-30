import React, { Component } from "react";
import { connect } from "react-redux";
import AddArtwork from "./AddArtwork";

class AddArtworkContainer extends Component {
  state = {
    name: "",
    description: "",
    price: 0,
    img: "",
    ship_country: "",
    artFormId: 1
  };
  render() {
    return (
      <AddArtwork
        values={this.state}
        onChange={this.onChange}
        jwt={this.props.jwt}
      />
    );
  }
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
}
const mapStateToProps = state => ({
  jwt: state.jwt,
  photos: state.photos
});
export default connect(mapStateToProps)(AddArtworkContainer);
