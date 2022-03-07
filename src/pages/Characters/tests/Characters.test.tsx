import React from "react";
import Characters from "../Characters";
import { mount } from "../../../utils/mountHelpers";
import { act } from "react-dom/test-utils";
import { wait } from "@testing-library/user-event/dist/utils";
import { mockCharactersData, sampleRow, mockCharactersErrorData } from "./mockData";

describe("Characters Testing", () => {
  it("Should return a component", () => {
    const { component } = mount(<Characters />, mockCharactersData);
    expect(component.length).toEqual(1);
  });
  it("Should render loading", () => {
    const { component } = mount(<Characters />, mockCharactersData);
    expect(component.find(".sc-bdvvtL").length).toEqual(1);
  });

  it("Should not render table when data is not present", () => {
    const { component } = mount(<Characters />, mockCharactersData);
    expect(component.find("#characters-table").length).toEqual(0);
  });

  it("Should render table when data is present", async () => {
    const { component } = mount(<Characters />, mockCharactersData);
    await act(() => wait(0));
    component.update();
    expect(component.find("Table #characters-table").length).toEqual(0);
  });
  it("Should pass props to the Table component", async () => {
    const { component } = mount(<Characters />, mockCharactersData);
    await act(() => wait(1));
    component.update();
    expect(component.find("DataTable").props().rows).toEqual(sampleRow);
  });

  it("Should render the error message", async () => {
    const { component } = mount(<Characters />, mockCharactersErrorData);
    await act(() => wait(0));
    component.update();
    expect(component.find(".error").length).toEqual(1);
    expect(component.find(".error").props().children).toEqual("Unable to fetch data");
  });
});
