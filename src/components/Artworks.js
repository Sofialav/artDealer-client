import React, { Component } from "react";
import { Link } from "react-router-dom";

class Artworks extends Component {
  displayArtworks = () => {
    if (this.props.artworks.artworks) {
      const artworks = this.props.artworks.artworks;
      const mapWork = artworks.map(artwork => {
        return (
          <div key={artwork.id} className="col-sm-3">
            <h4>{artwork.name}</h4>
            <Link to={`/artworks/${artwork.id}`}>
              <img
                className="img-thumbnail"
                id="aw-thumbnail"
                src={artwork.img}
                alt={artwork.name}
              />
            </Link>
          </div>
        );
      });
      return mapWork;
    }
    return null;
  };

  render() {
    if (!Object.keys(this.props.artworks).length) {
      return <div>Loading...</div>;
    }
    return <this.displayArtworks />;
  }
}

export default Artworks;
