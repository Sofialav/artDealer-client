import React, { Component } from "react";
import { CloudinaryContext } from "cloudinary-react";
import { openUploadWidget } from "../cloudinary/CloudinaryService";
import { photosUploaded } from "../store/actions/cloudinary";
import PropTypes from "prop-types";
import Photo from "./Photo";
import { connect } from "react-redux";

class PhotoList extends Component {
  render() {
    return (
      <div>
        {this.props.photos.length === 0 && (
          <div className="actions">
            <button
              className="upload_link"
              onClick={this.uploadImageWithCloudinary.bind(this)}
            >
              Upload photo of your artwork
            </button>
          </div>
        )}

        <div className="photos">
          {this.props.photos.length === 0 && <p>No photos were added yet.</p>}
          {this.props.photos.map(photo => {
            return <Photo key={photo.public_id} publicId={photo.public_id} />;
          })}
        </div>
      </div>
    );
  }

  uploadImageWithCloudinary() {
    const uploadOptions = {
      tags: "artwork",
      folder: "artworks",
      ...this.context
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        this.props.onPhotosUploaded(photos);
      } else {
        console.log(error);
      }
    });
  }

  static contextType = CloudinaryContext.contextType;
}

PhotoList.propTypes = {
  photos: PropTypes.array,
  onPhotosUploaded: PropTypes.func
};

// const PhotoListContainer = connect(state => ({ photos: state.photos }), {
//   onPhotosUploaded: photosUploaded
// })(PhotoList);

// Object.assign(PhotoListContainer.contextTypes, PhotoList.contextTypes);

export default connect(state => ({ photos: state.photos }), {
  onPhotosUploaded: photosUploaded
})(PhotoList);
