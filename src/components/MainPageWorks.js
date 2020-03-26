import React, { Component } from "react";
import { Link } from "react-router-dom";
import Artworks from "./Artworks";

class MainPageWorks extends Component {
  render() {
    if (this.props.artworks === {}) {
      return <di>"Loading"</di>;
    }
    return (
      <section>
        <h2>Latest Artworks</h2>
        <Artworks artworks={this.props.artworks} />
        <Link to="/artworks">
          <button>All artworks</button>
        </Link>
      </section>
    );
  }
}

export default MainPageWorks;
