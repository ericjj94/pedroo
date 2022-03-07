import React from "react";
import Location from "../Locations";
import { mount } from "../../../utils/mountHelpers";
import { act } from "react-dom/test-utils";
import { wait } from "@testing-library/user-event/dist/utils";
import { mockLocationData, sampleRow, mockErrorData } from "./mockData";

describe("Locations Testing", () => {
  it("Should return a component", () => {
    const { component } = mount(<Location />, mockLocationData);
    expect(component.length).toEqual(1);
  });
  it("Should render loading", () => {
    const { component } = mount(<Location />, mockLocationData);
    expect(component.find("Loader").props().id).toEqual("loading");
  });

  it("Should not render table when data is not present", () => {
    const { component } = mount(<Location />, mockLocationData);
    expect(component.find("#episodes-table").length).toEqual(0);
  });

  it("Should render table when data is present", async () => {
    const { component } = mount(<Location />, mockLocationData);
    await act(() => wait(0));
    component.update();
    expect(component.find("Table #episodes-table").length).toEqual(0);
  });
  it("Should pass the rows as a props to the Table component", async () => {
    const { component } = mount(<Location />, mockLocationData);
    await act(() => wait(0));
    component.update();
    expect(component.find("DataTable").props().rows).toEqual(sampleRow);
  });

  it("Should render the error message", async () => {
    const { component } = mount(<Location />, mockErrorData);
    await act(() => wait(0));
    component.update();
    expect(component.find(".error").length).toEqual(1);
    expect(component.find(".error").props().children).toEqual("Unable to fetch data");
  });
});
