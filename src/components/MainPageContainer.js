import React, { Component } from "react";
import { connect } from "react-redux";
import MainPageWorks from "./MainPageWorks";
import { loadArtworks } from "../store/actions";

class MainPageContainer extends Component {
  componentDidMount() {
    const limit = 6;
    this.props.loadArtworks(limit);
  }
  render() {
    return (
      <main>
        <MainPageWorks />
      </main>
    );
  }
}

export default connect(null, { loadArtworks })(MainPageContainer);
