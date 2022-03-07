import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component testing", () => {
  it("should contain the AppRouting component", () => {
    const component = shallow(<App />);
    expect(component.find(".App").length).toEqual(1);
  });
});
