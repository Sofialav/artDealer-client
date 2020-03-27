import React, { Component } from "react";

class ArtFormsFilter extends Component {
  mapArtForms = () => {
    const artForms = this.props.artForms;
    if (Object.keys(artForms).length) {
      const updArtForms = artForms.map(genre => {
        return (
          <div key={genre.id}>
            <input type="checkbox" id={genre.name} name={genre.name} />
            <label htmlFor={genre.name}>{genre.name}</label>
          </div>
        );
      });
      return updArtForms;
    }
    return null;
  };
  render() {
    return (
      <div>
        <h3>Art type</h3>
        <div>
          <this.mapArtForms />
        </div>
      </div>
    );
  }
}

export default ArtFormsFilter;
