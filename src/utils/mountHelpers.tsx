import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { mount as enzymeMount } from "enzyme";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";

export function mount(component: React.ReactElement, mock: any) {
  return {
    component: enzymeMount(
      <MockedProvider addTypename={false} mocks={[mock]}>
        <BrowserRouter>{component}</BrowserRouter>
      </MockedProvider>
    ),
  };
}

export function mountWithRoute(component: React.ReactElement, mock: any, { initialRoute = "/", currentPath = "/" }) {
  return {
    component: enzymeMount(
      <MockedProvider addTypename={false} mocks={[mock]}>
        <MemoryRouter initialEntries={[initialRoute]}>
          <Routes>
            <Route path={currentPath} element={component} />
          </Routes>
        </MemoryRouter>
      </MockedProvider>
    ),
  };
}
