import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import store from "../../store/store";
import { Provider } from "react-redux";
import Templates from "./Templates";

afterEach(cleanup);
render(
  <Provider store={store}>
    <Templates />
  </Provider>
);

describe("Completely render <Templates />", () => {
  test("render the Templates component without crashing", () => {
    expect(screen.getAllByTestId("templates-wrap")).toHaveLength(1);
  });
});
