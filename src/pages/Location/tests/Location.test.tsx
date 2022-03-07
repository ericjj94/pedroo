import React from "react";
import Location from "../Location";
import { mount, mountWithRoute } from "../../../utils/mountHelpers";
import { act } from "react-dom/test-utils";
import { wait } from "@testing-library/user-event/dist/utils";
import { mockLocationData } from "./mockData";

describe("location Testing", () => {
  it("Should return a component", () => {
    const { component } = mount(<Location />, mockLocationData);
    expect(component.length).toEqual(1);
  });

  it("Should render the Loader component", () => {
    const { component } = mount(<Location />, mockLocationData);
    expect(component.find("Loader").props().id).toEqual("loading");
  });
  it("Should render the name of the location", async () => {
    const { component } = mountWithRoute(<Location />, mockLocationData, {
      initialRoute: "/location/1",
      currentPath: "/location/:id",
    });

    await act(() => wait(0));
    component.update();
    expect(component.find("h2").props().children).toEqual("Earth (C-137)");
  });

  it("Should render the cards of all characters in the location", async () => {
    const { component } = mountWithRoute(<Location />, mockLocationData, {
      initialRoute: "/location/1",
      currentPath: "/location/:id",
    });

    await act(() => wait(0));
    component.update();

    expect(component.find("Card").length).toEqual(1);
  });
});
