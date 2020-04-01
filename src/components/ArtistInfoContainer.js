import React, { Component } from "react";
import { connect } from "react-redux";
import ArtistInfo from "./ArtistInfo";

class ArtistInfoContainer extends Component {
  componentDidMount() {
    const artistId = this.props.match.params.artistId;
    this.props.loadArtist(artistId);
  }
  render() {
    return (
      <div>
        <ArtistInfo />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  artistPublic: state.artistPublic
});
export default connect(mapStateToProps)(ArtistInfoContainer);
