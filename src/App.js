import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import store from "./store/store";
import "./App.css";
import MainPageContainer from "./components/MainPageContainer";
import NavbarContainer from "./components/NavbarContainer";
import AuthFormContainer from "./components/authorization/AuthFormContainer";
import ArtworksContainer from "./components/ArtworksContainer";
import UserCabinetContainer from "./components/UserCabinetContainer";
import AddArtworkContainer from "./components/AddArtworkContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <NavbarContainer />
          <Route exact path="/" component={MainPageContainer} />
          <Route exact path="/login" component={AuthFormContainer} />
          <Route exact path="/artworks" component={ArtworksContainer} />
          <Route exact path="/myPage" component={UserCabinetContainer} />
          <Route
            exact
            path="/myPage/newArtwork"
            component={AddArtworkContainer}
          />
        </div>
      </Provider>
    );
  }
}

export default App;
