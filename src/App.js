
import React from "react";
import Container from "./components/container/Container";
import { Provider } from "react-redux";
import store from './store/store'
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
