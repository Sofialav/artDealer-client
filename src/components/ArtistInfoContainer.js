import React, { Component } from "react";
import { connect } from "react-redux";
import ArtistInfo from "./ArtistInfo";
import { loadArtistPublic } from "../store/actions";

class ArtistInfoContainer extends Component {
  componentDidMount() {
    const artistId = this.props.match.params.artistId;
    this.props.loadArtistPublic(artistId);
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
export default connect(mapStateToProps, { loadArtistPublic })(
  ArtistInfoContainer
);
