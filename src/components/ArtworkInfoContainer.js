import React, { Component } from "react";
import { connect } from "react-redux";
import ArtworkInfo from "./ArtworkInfo";
import { loadArtwork } from "../store/actions";

class ArtworkInfoContainer extends Component {
  componentDidMount() {
    const artworkId = this.props.match.params.artworkId;
    this.props.loadArtwork(artworkId);
  }
  render() {
    if (!Object.keys(this.props.artwork).length) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container-fluid text-center">
        <div className="card border-0 shadow my-5 mx-5">
          <ArtworkInfo artwork={this.props.artwork} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  artwork: state.artwork
});
export default connect(mapStateToProps, { loadArtwork })(ArtworkInfoContainer);
