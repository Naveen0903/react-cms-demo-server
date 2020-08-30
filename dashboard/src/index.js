import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect} from "react-router-dom";
// , Redirect 
import AdminLayout from "./layouts/Admin/Admin.jsx";
import { withAuth } from "./lib/common/auth";

import "./assets/scss/black-dashboard-react.scss";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" render={props => withAuth(<AdminLayout {...props} />)} />
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
