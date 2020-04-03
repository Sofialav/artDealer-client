import React, { Component } from "react";
import { Link } from "react-router-dom";

class BillingInfo extends Component {
  displayBilling = () => {
    const personalData = (
      <section>
        <h3 className="font-weight-light text-center mt-4 mb-0">
          Billing information
        </h3>

        <hr className="mt-2 mb-5"></hr>
      </section>
    );
    return (
      <div className="col-sm-6 text-center">
        {personalData}
        <Link to="/checkout">
          <button type="submit" className="btn btn-secondary btn-lg mb-5">
            Checkout
          </button>
        </Link>
      </div>
    );
  };
  render() {
    return <this.displayBilling />;
  }
}

export default BillingInfo;
