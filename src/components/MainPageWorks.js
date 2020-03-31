import React, { Component } from "react";
import { Link } from "react-router-dom";
import Artworks from "./Artworks";

class MainPageWorks extends Component {
  render() {
    if (this.props.artworks === {}) {
      return <di>"Loading"</di>;
    }
    return (
      <section className="container-fluid text-center">
        <h2>Latest Artworks</h2>
        <div className="row">
          <Artworks artworks={this.props.artworks} />
        </div>
        <Link to="/artworks">
          <button>All artworks</button>
        </Link>
      </section>
    );
  }
}

export default MainPageWorks;
