import React, { Component } from "react";
import PhotoListContainer from "./PhotoList";
import { CloudinaryContext, Image } from "cloudinary-react";

class AddArtwork extends Component {
  render() {
    return (
      <div>
        <h3>Artwork info</h3>
        <CloudinaryContext cloudName="d2eath4e" upload_preset="kwu9iom8">
          <Image
            publicId="https://cloudinary.com/images/logo.png"
            fetch-format="auto"
            quality="auto"
          />
          <PhotoListContainer />
        </CloudinaryContext>
      </div>
    );
  }
}

export default AddArtwork;
