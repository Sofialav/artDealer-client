import React, { Component } from "react";
import { connect } from "react-redux";
import GenresFilter from "./GenresFilter";

class ArtFilterContainer extends Component {
  componentDidMount() {
    // this.props.loadGenres();
  }
  render() {
    return (
      <div>
        <GenresFilter />
      </div>
    );
  }
}

export default connect(null)(ArtFilterContainer);
