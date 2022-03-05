import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Location from "./pages/Locations";

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
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouting;
