import React, { Component } from "react";
import { connect } from "react-redux";
import UserCabinet from "./UserCabinet";

class UserCabinetContainer extends Component {
  componentDidMount() {
    if (this.props.jwt) {
      // this.props.loadArtist();
    }
  }
  render() {
    if (!this.props.jwt) {
      return <h2>404: Page not found</h2>;
    }
    return <UserCabinet />;
  }
}

const mapStateToProps = state => ({
  jwt: state.jwt
});

export default connect(mapStateToProps)(UserCabinetContainer);
