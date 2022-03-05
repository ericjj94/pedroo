import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Characters from "./pages/Characters";
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";

const AppRouting = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Characters} />
        <Route exact path="/episodes" component={Episodes} />
        <Route exact path="/episodes" component={Location} />
      </Switch>
    </Router>
  );
};
export default AppRouting;
