import React, { Component } from "react";
import Artworks from "./Artworks";

class UserCabinet extends Component {
  infobox = () => {
    if (this.props.artist) {
      const artist = this.props.artist;
      return (
        <section>
          <img alt={artist.login} />
          <div>PLACEHOLDER</div>
        </section>
      );
    }
  };

  render() {
    if (!Object.keys(this.props.artist).length) {
      return <div>Loading...</div>;
    }
    return (
      <main>
        <h2>Art Cabinet of {this.props.artist.login}</h2>
        <this.infobox />
        <section>
          <h4>My artworks:</h4>
          <Artworks artworks={this.props.artist} />
        </section>
      </main>
    );
  }
}

export default UserCabinet;
