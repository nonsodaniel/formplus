import { shallow } from "enzyme";
import Header from "./Header";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
let initialState = {};

const setUp = (props = {}) => {
  const store = mockStore(initialState);
  const component = shallow(
    <Provider store={store}>
      <Header {...props} store={store} />
    </Provider>,
    {
      context: { store: mockStore() },
    }
  );
  return component;
};
// const findByAttr = (component, attribute) => {
//   const wrap = component.find(`[data-test ='${attribute}']`);
//   return wrap;
// };

describe("Header component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render without errors", () => {
    let comp = shallow(<Header />);
    const wrap = comp.find(".header");
    expect(wrap.length).toBe(1);
  });
});
