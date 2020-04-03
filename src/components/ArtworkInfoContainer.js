import React, { Component } from "react";
import { connect } from "react-redux";
import ArtworkInfo from "./ArtworkInfo";
import { loadArtwork, addToCart } from "../store/actions";

class ArtworkInfoContainer extends Component {
  componentDidMount() {
    const artworkId = this.props.match.params.artworkId;
    this.props.loadArtwork(artworkId);
  }
  handleClick = artwork => {
    if (!artwork.is_sold) {
      return this.props.addToCart(artwork);
    }
    return alert("Sorry, this artwork is already sold");
  };
  render() {
    if (!Object.keys(this.props.artwork).length) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container-fluid text-center">
        <div className="card border-0 shadow my-5 mx-5">
          <ArtworkInfo artwork={this.props.artwork} toCart={this.handleClick} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  artwork: state.artwork
});
export default connect(mapStateToProps, { loadArtwork, addToCart })(
  ArtworkInfoContainer
);
