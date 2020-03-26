import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import store from "./store/store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Hi!</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
