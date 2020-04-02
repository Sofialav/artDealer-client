import React, { Component } from "react";
import { Link } from "react-router-dom";
import Artists from "./Artists";

class MainPageArtists extends Component {
  render() {
    if (this.props.artists === {}) {
      return <di>"Loading"</di>;
    }
    return (
      <section className="container-fluid text-center  my-5 mx-5">
        <h2 className="font-weight-light text-center mt-4 mb-0">
          Latest Artists
        </h2>
        <hr className="mt-2 mb-5"></hr>
        <div className="row">
          <Artists artists={this.props.artists} />
        </div>
        <Link to="/artists">
          <button className="btn btn-secondary btn-lg mt-5">All artists</button>
        </Link>
      </section>
    );
  }
}

export default MainPageArtists;
