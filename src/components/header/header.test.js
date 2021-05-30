
import Header from "./Header";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import store from "../../store/store";
import { Provider } from "react-redux";

afterEach(cleanup);
render(
  <Provider store={store}>
    <Header />
  </Provider>
);

describe("Completely render <Header />", () => {
  test("render the Header component without crashing", () => {
    expect(screen.getAllByTestId("header")).toHaveLength(1);
    expect(screen.getAllByTestId("search-textfield")).toHaveLength(1);
    expect(screen.getAllByTestId("sort-category")).toHaveLength(1);
    expect(screen.getAllByTestId("sort-order")).toHaveLength(1);
  });
});

