import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import BillingInfo from "./BillingInfo";

class CartContainer extends Component {
  state = {
    first_name: "",
    last_name: "",
    country: "",
    region: "",
    address1: "",
    city: "",
    postcode: "",
    phone: "",
    email: ""
  };

  render() {
    return (
      <div className="container-fluid text-center">
        <div className="card border-0 shadow my-5 mx-5 ">
          <h2 className="font-weight-light text-center mt-4 mb-0">
            Shopping Cart
          </h2>
          <hr className="mt-2 mb-5"></hr>
          <main className="row text-center justify-content-md-center">
            <Cart cart={this.props.cart} />
            <BillingInfo
              values={this.state}
              onChange={this.onChange}
              selectCountry={this.selectCountry}
              selectRegion={this.selectRegion}
            />
          </main>
        </div>
      </div>
    );
  }

  selectCountry = val => {
    this.setState({ ...this.state, country: val });
  };
  selectRegion = val => {
    this.setState({ ...this.state, region: val });
  };
  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
}
const mapStateToProps = state => ({
  cart: state.cart
});
export default connect(mapStateToProps)(CartContainer);
