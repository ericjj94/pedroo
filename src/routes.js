import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import Character from "./pages/Character";
import Episode from "./pages/Episode";
import Location from "./pages/Location";

const LayoutWithHeader = ({ children, ...rest }) => {
  return (
    <>
      <Header {...rest} />
      {children}
    </>
  );
};

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWithHeader>
              <Characters />
            </LayoutWithHeader>
          }
        />
        <Route
          path="/episodes"
          element={
            <LayoutWithHeader>
              <Episodes />
            </LayoutWithHeader>
          }
        />
        <Route
          path="/locations"
          element={
            <LayoutWithHeader>
              <Locations />
            </LayoutWithHeader>
          }
        />
        <Route
          exact
          path="/characters/:id"
          element={
            <LayoutWithHeader>
              <Character />
            </LayoutWithHeader>
          }
        />
        <Route
          exact
          path="/episodes/:id"
          element={
            <LayoutWithHeader>
              <Episode />
            </LayoutWithHeader>
          }
        />
        <Route
          exact
          path="/locations/:id"
          element={
            <LayoutWithHeader>
              <Location />
            </LayoutWithHeader>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
