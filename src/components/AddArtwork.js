import React, { Component } from "react";
import PhotoUploader from "./PhotoUploader";

class AddArtwork extends Component {
  render() {
    return (
      <div>
        <h3>Artwork info</h3>
        <PhotoUploader />
      </div>
    );
  }
}

export default AddArtwork;
