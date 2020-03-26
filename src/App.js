import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import store from "./store/store";
import "./App.css";
import MainPageContainer from "./components/MainPageContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route exact path="/" component={MainPageContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
