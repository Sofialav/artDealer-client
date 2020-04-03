import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

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
            <div className="col form-group">
              <label htmlFor="country">Country *</label>
              <CountryDropdown
                className="form-control"
                id="country"
                name="country"
                value={this.props.values.country}
                onChange={val => this.props.selectCountry(val)}
              />
            </div>
            <div className="col form-group">
              <label htmlFor="region">Region *</label>
              <RegionDropdown
                className="form-control"
                id="region"
                name="region"
                country={this.props.values.country}
                value={this.props.values.region}
                onChange={val => this.props.selectRegion(val)}
              />
            </div>
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
