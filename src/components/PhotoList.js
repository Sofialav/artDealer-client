import React, { Component } from "react";
import { CloudinaryContext } from "cloudinary-react";
import { openUploadWidget } from "../cloudinary/CloudinaryService";
import { photosUploaded } from "../store/actions/cloudinary";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class PhotoList extends Component {
  render() {
    return (
      <div>
        <div className="actions">
          <button
            className="upload_link"
            onClick={this.uploadImageWithCloudinary.bind(this)}
          >
            Add photos with Cloudinary File upload
          </button>
        </div>
      </div>
    );
  }

  uploadImageWithCloudinary() {
    const uploadOptions = { tags: "myphotoalbum", ...this.context };
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

const PhotoListContainer = connect(state => ({ photos: state.photos }), {
  onPhotosUploaded: photosUploaded
})(PhotoList);

// Object.assign(PhotoListContainer.contextTypes, PhotoList.contextTypes);

export default PhotoListContainer;
