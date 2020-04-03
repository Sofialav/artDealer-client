import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import BillingInfo from "./BillingInfo";

class CartContainer extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <div className="card border-0 shadow my-5 mx-5 ">
          <h2 className="font-weight-light text-center mt-4 mb-0">
            Shopping Cart
          </h2>
          <hr className="mt-2 mb-5"></hr>
          <main className="row text-center">
            <Cart cart={this.props.cart} />
            <BillingInfo />
          </main>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart
});
export default connect(mapStateToProps)(CartContainer);
