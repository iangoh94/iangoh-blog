import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Horse from "../components/Horse";
import Main from "./Main";

const MainViewer: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/horse">
          <Horse />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainViewer;