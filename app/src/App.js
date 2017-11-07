import React from "react";

import Home from "Home";
import SearchCases from "./cases/SearchCases";
import Cases from "./cases/Cases";
import CaseDetail from "./cases/CaseDetail";
import Flags from "./cases/Flags";
import About from "About";
import Login from "Login";
import PrivateRoute from "PrivateRoute";
import Contact from "Contact";
import Linkbar from "Linkbar";
import QualifiedPrograms from "QualifiedPrograms";

import { Route, Switch, Redirect } from "react-router";

import "bootstrap/dist/css/bootstrap.css";

import { Container } from "reactstrap";

const App = () => {
  return (
    <div>
      <Linkbar />
      <Container>
        <Switch>
          <PrivateRoute exact path="/" component={SearchCases} />
          <PrivateRoute exact path="/cases" component={Cases} />
          <PrivateRoute
            exact
            path="/cases/:selectedCase"
            component={CaseDetail}
          />
          <PrivateRoute exact path="/flags/:selectedCase" component={Flags} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <PrivateRoute
            exact
            path="/questions/:selectedCase"
            component={Home}
          />
          <PrivateRoute
            path="/qualifiedprograms/:selectedCase"
            component={QualifiedPrograms}
          />
          <Redirect to="/" />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
