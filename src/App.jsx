import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./component/header/Header.component";
import Homepage from "./pages/homepage/homepage.component";
import SignUp from "./pages/signUp/SignUp.component";
import SignIn from "./pages/signIn/SignIn.component";

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage}></Route>
      <Route exact path="/signin" component={SignIn}></Route>
      <Route exact path="/signup" component={SignUp}></Route>
    </Switch>
  </>
);

export default App;
