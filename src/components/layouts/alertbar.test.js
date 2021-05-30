import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import store from "../../store/store";
import { Provider } from "react-redux";
import AlertBar from "./AlertBar";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";

afterEach(cleanup);
render(
  <Provider store={store}>
    <AlertBar />
  </Provider>
);

describe("Completely render <Footer />", () => {
  test("render the AlertBar component without crashing", () => {
    expect(screen.getAllByTestId("alert-text")).toHaveLength(1);
  });
});
