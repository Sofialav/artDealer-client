import React, { Component } from "react";
import { connect } from "react-redux";
import LoginFormContainer from "./LoginFormContainer";

class AuthFormContainer extends Component {
  render() {
    const errors = this.props.errors.map(error => <p>{error}</p>);
    return (
      <div>
        <LoginFormContainer history={this.props.history} />
        <div>{errors}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}
export default connect(mapStateToProps)(AuthFormContainer);
