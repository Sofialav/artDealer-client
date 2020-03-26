import React, { Component } from "react";

class MainPageWorks extends Component {
  works = () => {
    if (this.props.artworks.artworks) {
      const artworks = this.props.artworks.artworks;
      const work = artworks.map(artwork => {
        return (
          <div>
            <img src={artwork.img} alt={artwork.name} />
          </div>
        );
      });
      return (
        <section>
          <h2>Latest works</h2>
          {work}
        </section>
      );
    }
    return (
      <section>
        <h2>Latest works</h2>
      </section>
    );
  };

  render() {
    if (this.props.artworks === {}) {
      return <di>"Loading"</di>;
    }
    return <this.works />;
  }
}

export default MainPageWorks;
