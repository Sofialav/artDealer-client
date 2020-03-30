import React, { Component } from "react";
import PhotoList from "./PhotoList";
import { CloudinaryContext } from "cloudinary-react";

class AddArtwork extends Component {
  postArtwork = () => {
    if (this.props.jwt) {
      return (
        <div>
          <h3>Post a new artwork</h3>
          <form>
            <CloudinaryContext cloudName="d2eath4e" upload_preset="kwu9iom8">
              <PhotoList />
            </CloudinaryContext>
            <div>
              <h4>Type of art:</h4>
              <input
                type="radio"
                name="artFormId"
                id="Painting"
                value="1"
                checked
              />
              <label for="Painting">Painting</label>
              <input type="radio" name="artFormId" id="Drawing" value="2" />
              <label for="Drawing">Drawing</label>
              <input type="radio" name="artFormId" id="Sculpture" value="3" />
              <label for="Sculpture">Sculpture</label>
            </div>

            <input
              placeholder="Artwork title"
              type="text"
              name="name"
              value={this.props.values.name}
              onChange={this.props.onChange}
            />
            <input
              type="number"
              min="1"
              step="0.5"
              name="price"
              value={this.props.values.price}
              onChange={this.props.onChange}
            />
            <textarea
              placeholder="Description"
              type="text"
              name="description"
              value={this.props.values.description}
              onChange={this.props.onChange}
            ></textarea>
          </form>
          <input
            placeholder="Country of shipping"
            type="text"
            name="ship_country"
            value={this.props.values.ship_country}
            onChange={this.props.onChange}
          />
          <button type="submit">Add artwork</button>
        </div>
      );
    }
    return <h3>Page not found</h3>;
  };

  render() {
    return <this.postArtwork />;
  }
}

export default AddArtwork;
