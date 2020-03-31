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
      <div className="container-fluid text-center">
        <main className="row">
          <section className="col-sm-2">
            <ArtFilterContainer />
          </section>
          <section className="col-sm-6 offset-sm-1">
            <h2>Artworks</h2>
            <div className="row">
              <Artworks artworks={this.props.artworks} />
            </div>
          </section>
        </main>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  artworks: state.artworks
});
export default connect(mapStateToProps, { loadArtworks })(ArtworksContainer);
