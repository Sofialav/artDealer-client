import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainPageArtists extends Component {
  artists = () => {
    if (this.props.artists.artists) {
      const artists = this.props.artists.artists;
      const artist = artists.map(artist => {
        return (
          <div key={artist.id} className="col-sm-3">
            <img
              src={require("../images/user.png")}
              alt={artist.first_name}
              className="img-fluid hvr-image"
            />
            <div>
              {artist.first_name} {artist.last_name}
            </div>
          </div>
        );
      });
      return (
        <section className="container-fluid text-center  my-5">
          <h2 className="font-weight-light text-center mt-4 mb-0">
            Latest artists
          </h2>
          <hr class="mt-2 mb-5"></hr>
          <div className="row">{artist}</div>
          <Link to="/artists">
            <button className="btn btn-secondary btn-lg mt-5">
              All artists
            </button>
          </Link>
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
