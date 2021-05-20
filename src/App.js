
import React from "react";
import Container from "./components/container/Container";
import { Provider } from "react-redux";
import store from './store/store'
// import { BrowserRouter, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Container />
      </div>
      </Provider>
  );
};

export default App;
