import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Location from "./pages/Locations";
import Character from "./pages/Character";
import Episode from "./pages/Episode";

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
              <Location />
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
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
