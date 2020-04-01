import React, { Component } from "react";

class ArtistsContainer extends Component {
  componentDidMount() {
    const limit = 4;
    this.props.loadArtists(limit);
  }
  render() {
    return <div></div>;
  }
}

export default ArtistsContainer;
