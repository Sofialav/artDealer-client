import React, { Component } from "react";

class MainPageArtists extends Component {
  artists = () => {
    if (this.props.artists.artists) {
      const artists = this.props.artists.artists;
      const artist = artists.map(artist => {
        return (
          <div key={artist.id}>
            <img src={require("../images/user.png")} alt={artist.first_name} />
            <div>
              {artist.first_name} {artist.last_name}
            </div>
          </div>
        );
      });
      return (
        <section>
          <h2>Latest artists</h2>
          {artist}
        </section>
      );
    }
    return (
      <section>
        <h2>Latest artists</h2>
      </section>
    );
  };

  render() {
    if (this.props.artists === {}) {
      return <di>"Loading"</di>;
    }
    return <this.artists />;
  }
}

export default MainPageArtists;
