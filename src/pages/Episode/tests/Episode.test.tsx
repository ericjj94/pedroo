import React from "react";
import Episode from "../Episode";
import { mount, mountWithRoute } from "../../../utils/mountHelpers";
import { act } from "react-dom/test-utils";
import { wait } from "@testing-library/user-event/dist/utils";
import { mockEpisodeData } from "./mockData";

describe("Episode Testing", () => {
  it("Should return a component", () => {
    const { component } = mount(<Episode />, mockEpisodeData);
    expect(component.length).toEqual(1);
  });

  it("Should render the Loader component", () => {
    const { component } = mount(<Episode />, mockEpisodeData);
    expect(component.find("Loader").props().id).toEqual("loading");
  });
  it("Should render the name of the Episode", async () => {
    const { component } = mountWithRoute(<Episode />, mockEpisodeData, {
      initialRoute: "/episode/1",
      currentPath: "/episode/:id",
    });

    await act(() => wait(0));
    component.update();
    expect(component.find("h2").props().children).toEqual("Pilot");
  });

  it("Should render the cards of all characters in the episode", async () => {
    const { component } = mountWithRoute(<Episode />, mockEpisodeData, {
      initialRoute: "/episode/1",
      currentPath: "/episode/:id",
    });

    await act(() => wait(0));
    component.update();

    expect(component.find("Card").length).toEqual(1);
  });
});
