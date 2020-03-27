import React, { Component } from "react";
import { CloudinaryContext } from "cloudinary-react";
import { openUploadWidget } from "../cloudinary/CloudinaryService";

class PhotoUploader extends Component {
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

export default PhotoUploader;
