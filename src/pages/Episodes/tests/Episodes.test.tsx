import React from "react";
import Episodes from "../Episodes";
import { mount } from "../../../helpers/mountHelpers";
import { act } from "react-dom/test-utils";
import { wait } from "@testing-library/user-event/dist/utils";
import { mockEpisodesData, columns, sampleRow } from "./mockData";

describe("Episodes Testing", () => {
  it("Should return a component", () => {
    const { component } = mount(<Episodes />, mockEpisodesData);
    expect(component.length).toEqual(1);
  });
  it("Should render loading", () => {
    const { component } = mount(<Episodes />, mockEpisodesData);
    expect(component.find(".sc-bdvvtL").length).toEqual(1);
  });

  it("Should not render table when data is not present", () => {
    const { component } = mount(<Episodes />, mockEpisodesData);
    expect(component.find("#episodes-table").length).toEqual(0);
  });

  it("Should render table when data is present", async () => {
    const { component } = mount(<Episodes />, mockEpisodesData);
    await act(() => wait(0));
    component.update();
    expect(component.find("Table #episodes-table").length).toEqual(0);
  });
  it("Should pass props to the Table component", async () => {
    const { component } = mount(<Episodes />, mockEpisodesData);
    await act(() => wait(1));
    component.update();

    expect(component.find("DataTable").props().rows).toEqual(sampleRow);
    expect(component.find("DataTable").props().columnData).toEqual(columns);
  });
});
