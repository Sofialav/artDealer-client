import React, { Component } from "react";
import { connect } from "react-redux";
import GenresFilter from "./GenresFilter";
import { loadGenres } from "../store/actions";

class ArtFilterContainer extends Component {
  componentDidMount() {
    this.props.loadGenres();
  }
  render() {
    return (
      <div>
        <GenresFilter />
      </div>
    );
  }
}

export default connect(null, { loadGenres })(ArtFilterContainer);
