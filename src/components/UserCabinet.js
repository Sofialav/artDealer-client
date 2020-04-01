import React, { Component } from "react";
import Artworks from "./Artworks";
import { Link } from "react-router-dom";

class UserCabinet extends Component {
  infobox = () => {
    if (this.props.artist) {
      const artist = this.props.artist;
      return (
        <section>
          <img alt={artist.login} />
          <div>PLACEHOLDER FOR USER INFO</div>
        </section>
      );
    }
  };

  render() {
    if (!Object.keys(this.props.artist).length) {
      return <div>Loading...</div>;
    }
    return (
      <main className="container-fluid text-center">
        <div className="card border-0 shadow my-5 mx-5">
          <h2 className="font-weight-light text-center mt-4 mb-0 font-weight-bold">
            Art Cabinet of {this.props.artist.login}
          </h2>
          <hr class="mt-2 mb-5"></hr>
          <this.infobox />
          <section>
            <Link to={`/myPage/newArtwork`}>
              <button className="btn btn-secondary btn-lg mt-5 mr-2">
                Post new artwork
              </button>
            </Link>
            <Link>
              <button className="btn btn-secondary btn-lg mt-5 ml-2">
                Update personal info
              </button>
            </Link>
          </section>
          <section className="container-fluid text-center  my-5 mx-5">
            <h2 className="font-weight-light text-center mt-4 mb-0">
              My Artworks
            </h2>
            <hr class="mt-2 mb-5"></hr>
            <div className="row">
              <Artworks artworks={this.props.artist} />
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default UserCabinet;
