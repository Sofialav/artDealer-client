import React, { Component } from "react";
import PhotoList from "./PhotoList";
import { CloudinaryContext } from "cloudinary-react";

class AddArtwork extends Component {
  postArtwork = () => {
    if (this.props.jwt) {
      return (
        <div>
          <h3>Post a new artwork</h3>
          <CloudinaryContext cloudName="d2eath4e" upload_preset="kwu9iom8">
            <PhotoList />
          </CloudinaryContext>
          <form onSubmit={this.props.onSubmit}>
            <div>
              <label htmlFor="artForms">Type of art:</label>
              <select
                id="artForms"
                name="artFormId"
                type="number"
                onChange={this.props.onChange}
              >
                <option value="1">Painting</option>
                <option value="2">Drawing</option>
                <option value="3">Sculpture</option>
              </select>
            </div>
            <label htmlFor="artworkTitle">Title*</label>
            <input
              id="artworkTitle"
              placeholder="Artwork title"
              type="text"
              name="name"
              value={this.props.values.name}
              onChange={this.props.onChange}
              required
            />
            <label htmlFor="price">Price in Euros*</label>
            <input
              id="price"
              type="number"
              min="0"
              step="0.5"
              name="price"
              value={this.props.values.price}
              onChange={this.props.onChange}
              required
            />
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Put any information about your work here"
              type="text"
              name="description"
              value={this.props.values.description}
              onChange={this.props.onChange}
            ></textarea>
            <label htmlFor="shipCountry">Country of shipping*</label>
            <input
              id="shipCountry"
              placeholder="France"
              type="text"
              name="ship_country"
              value={this.props.values.ship_country}
              onChange={this.props.onChange}
              required
            />
            <button type="submit">Add artwork</button>
          </form>
        </div>
      );
    }
    return (
      <h3 className="font-weight-light text-center mt-4 mb-0 font-weight-bold">
        Page not found
      </h3>
    );
  };

  render() {
    const errors = this.props.errors.map(error => <p>{error}</p>);
    return (
      <div>
        <div>{errors}</div>
        <this.postArtwork />
      </div>
    );
  }
}

export default AddArtwork;
