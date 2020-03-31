import React, { Component } from "react";
import { connect } from "react-redux";
import MainPageWorks from "./MainPageWorks";
import MainPageArtists from "./MainPageArtists";
import { loadArtworks, loadArtists } from "../store/actions";

class MainPageContainer extends Component {
  componentDidMount() {
    const limit = 6;
    this.props.loadArtworks(limit);
    this.props.loadArtists(limit);
  }
  render() {
    return (
      <main className="container-fluid text-center w-75">
        <MainPageWorks artworks={this.props.artworks} />
        <br />
        <MainPageArtists artists={this.props.artists} />
      </main>
    );
  }
}
const mapStateToProps = state => ({
  artworks: state.artworks,
  artists: state.artists
});
export default connect(mapStateToProps, { loadArtworks, loadArtists })(
  MainPageContainer
);
