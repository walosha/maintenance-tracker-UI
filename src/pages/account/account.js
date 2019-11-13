import React from "react";
import { Route, Switch } from "react-router-dom";
import MyAccount from "../myaccount/MyAccount.component";
import Requests from "../requests/Requests.component";
import Request from "../request/Request.component";

const Account = ({ match }) => (
  <Switch>
    <Route exact path="/:username" component={MyAccount}></Route>
    <Route exact path={`${match.path}/requests`} component={Requests}></Route>
    <Route
      path={`${match.path}/requests/createrequest`}
      component={Request}
    ></Route>
  </Switch>
);

export default Account;
