import React, { Component } from "react";
import { Link } from "react-router-dom";

class Artworks extends Component {
  displayArtworks = () => {
    if (this.props.artworks.artworks) {
      const artworks = this.props.artworks.artworks;
      const mapWork = artworks.map(artwork => {
        return (
          <div key={artwork.id}>
            <h4>{artwork.name}</h4>
            <Link to={`/artworks/${artwork.id}`}>
              <img src={artwork.img} alt={artwork.name} />
            </Link>
          </div>
        );
      });
      return <div>{mapWork}</div>;
    }
    return null;
  };

  render() {
    if (this.props.artworks === {}) {
      return <div>Loading...</div>;
    }
    return <this.displayArtworks />;
  }
}

export default Artworks;
