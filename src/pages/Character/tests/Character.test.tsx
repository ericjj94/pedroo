import React from "react";
import Character from "../Character";
import { mount, mountWithRoute } from "../../../utils/mountHelpers";
import { act } from "react-dom/test-utils";
import { wait } from "@testing-library/user-event/dist/utils";
import { mockCharacterData, mockCharactersErrorData } from "./mockData";

describe("Characters Testing", () => {
  it("Should return a component", () => {
    const { component } = mount(<Character />, mockCharacterData);
    expect(component.length).toEqual(1);
  });

  it("Should render the Loader component", () => {
    const { component } = mount(<Character />, mockCharacterData);
    expect(component.find("Loader").props().id).toEqual("loading");
  });
  it("Should render the name of the character", async () => {
    const { component } = mountWithRoute(<Character />, mockCharacterData, {
      initialRoute: "/characters/1",
      currentPath: "/characters/:id",
    });

    await act(() => wait(0));
    component.update();
    expect(component.find("h2").props().children).toEqual("Rick Sanchez");
  });
  it("Should render the location of the character in bold", async () => {
    const { component } = mountWithRoute(<Character />, mockCharacterData, {
      initialRoute: "/characters/1",
      currentPath: "/characters/:id",
    });

    await act(() => wait(0));
    component.update();
    expect(component.find("b").props().children).toEqual("Citadel of Ricks");
  });
  it("Should render the cards of episodes the character has featured in", async () => {
    const { component } = mountWithRoute(<Character />, mockCharacterData, {
      initialRoute: "/characters/1",
      currentPath: "/characters/:id",
    });

    await act(() => wait(0));
    component.update();

    expect(component.find("Card").length).toEqual(1);
  });

  it("Should render the name of the episode", async () => {
    const { component } = mountWithRoute(<Character />, mockCharacterData, {
      initialRoute: "/characters/1",
      currentPath: "/characters/:id",
    });

    await act(() => wait(0));
    component.update();

    expect(component.find(".card-title").props().children).toEqual("Pilot");
  });

  it("Should render the edit and delete button", async () => {
    const { component } = mountWithRoute(<Character />, mockCharacterData, {
      initialRoute: "/characters/1",
      currentPath: "/characters/:id",
    });

    await act(() => wait(0));
    component.update();
    expect(component.find("#edit").length).toBeGreaterThan(0);
    expect(component.find("#delete").length).toBeGreaterThan(0);
  });
  it("Should not render the show all button as the episode is less than 20", async () => {
    const { component } = mountWithRoute(<Character />, mockCharacterData, {
      initialRoute: "/characters/1",
      currentPath: "/characters/:id",
    });

    await act(() => wait(0));
    component.update();
    expect(component.find(".show-all").length).toEqual(0);
  });

  it("Should not render the main content if there's an error fetching data", async () => {
    const { component } = mountWithRoute(<Character />, mockCharactersErrorData, {
      initialRoute: "/characters/1",
      currentPath: "/characters/:id",
    });
    await act(() => wait(0));
    component.update();
    expect(component.find(".error").length).toEqual(1);
  });

  it("Should render 'View Neighbours' button", async () => {
    const { component } = mountWithRoute(<Character />, mockCharacterData, {
      initialRoute: "/characters/1",
      currentPath: "/characters/:id",
    });
    await act(() => wait(0));
    component.update();
    expect(component.find("#view-neighbours").length).toBeGreaterThan(0);
  });
});
