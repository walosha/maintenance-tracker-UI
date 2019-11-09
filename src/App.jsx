import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./component/header/Header.component";
import Homepage from "./pages/homepage/homepage.component";
import SignUp from "./pages/signUp/SignUp.component";
import SignIn from "./pages/signIn/SignIn.component";
import Request from "./pages/request/Request.component";
import MyAccount from "./pages/myaccount/MyAccount.component";
import Error404 from "./pages/Error404/Error404.component";

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path="/signin" component={SignIn}></Route>
      <Route exact path="/signup" component={SignUp}></Route>
      <Route exact path="/requests" component={Request}></Route>
      <Route exact path="/myaccount" component={MyAccount}></Route>
      <Route path="/" component={Error404}></Route>
    </Switch>
  </>
);

export default App;
