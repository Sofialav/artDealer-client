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
      <main>
        <MainPageWorks artworks={this.props.artworks} />
        <br />
        <MainPageArtists />
      </main>
    );
  }
}
const mapStateToProps = state => ({
  artworks: state.artworks
});
export default connect(mapStateToProps, { loadArtworks, loadArtists })(
  MainPageContainer
);
