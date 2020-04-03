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
        <form>
          <section className="form-row">
            <div className="col form-group">
              <label htmlFor="name">First name *</label>
              <input
                className="form-control"
                id="name"
                type="text"
                name="first_name"
                value={this.props.values.first_name}
                onChange={this.props.onChange}
                required
              />
            </div>
            <div className="col form-group">
              <label htmlFor="surname">Last name *</label>
              <input
                className="form-control"
                id="surname"
                type="text"
                name="last_name"
                value={this.props.values.last_name}
                onChange={this.props.onChange}
                required
              />
            </div>
          </section>
          <section className="form-row">
            <div className="col form-group"></div>
          </section>
        </form>
      </section>
    );
    return (
      <div className="col-sm-5 text-center">
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
