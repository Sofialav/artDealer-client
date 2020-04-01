import React, { Component } from "react";
import { connect } from "react-redux";
import ArtworkInfo from "./ArtworkInfo";

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
      <div>
        <ArtworkInfo />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  artwork: state.artwork
});
export default connect(mapStateToProps)(ArtworkInfoContainer);
