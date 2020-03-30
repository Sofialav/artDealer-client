import React, { Component } from "react";
import PhotoList from "./PhotoList";
import { CloudinaryContext } from "cloudinary-react";

class AddArtwork extends Component {
  render() {
    return (
      <div>
        <h3>Artwork info</h3>
        <CloudinaryContext cloudName="d2eath4e" upload_preset="kwu9iom8">
          <PhotoList />
        </CloudinaryContext>
      </div>
    );
  }
}

export default AddArtwork;
