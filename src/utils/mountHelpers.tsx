import React from "react";
import { MockedProvider } from "@apollo/client/testing";
import { mount as enzymeMount } from "enzyme";
import { BrowserRouter } from "react-router-dom";

export function mount(component: React.ReactElement, mock: any) {
  return {
    component: enzymeMount(
      <MockedProvider addTypename={false} mocks={[mock]}>
        <BrowserRouter>{component}</BrowserRouter>
      </MockedProvider>
    ),
  };
}
