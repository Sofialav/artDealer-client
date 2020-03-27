import React, { Component } from "react";
import Artworks from "./Artworks";
import { connect } from "react-redux";
import { loadArtworks } from "../store/actions";
import ArtFilterContainer from "./ArtFilterContainer";

class ArtworksContainer extends Component {
  componentDidMount() {
    const limit = 9;
    this.props.loadArtworks(limit);
  }
  render() {
    return (
      <div>
        <section>
          <h2>Artworks</h2>
          <Artworks artworks={this.props.artworks} />
        </section>
        <ArtFilterContainer />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  artworks: state.artworks
});
export default connect(mapStateToProps, { loadArtworks })(ArtworksContainer);
