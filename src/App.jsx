import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./component/header/Header.component";
import Homepage from "./pages/homepage/homepage.component";
import SignUp from "./pages/signUp/SignUp.component";
import SignIn from "./pages/signIn/SignIn.component";
import Requests from "./pages/requests/Requests.component";
import Request from "./pages/request/Request.component";
import MyAccount from "./pages/myaccount/MyAccount.component";
import Error404 from "./pages/Error404/Error404.component";

const App = ({ user, auth }) => {
  console.log(user, auth);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route
          exact
          path="/signin"
          render={() => (auth ? <Redirect to="/" /> : <SignIn />)}
        ></Route>
        <Route
          exact
          path="/signup"
          render={() => (auth ? <Redirect to="/" /> : <SignUp />)}
        ></Route>
        <Route exact path="/requests/" component={Requests}></Route>
        <Route exact path="/requests/:requestId" component={Request}></Route>
        <Route exact path="/:username" component={MyAccount}></Route>
        <Route path="/" component={Error404}></Route>
      </Switch>
    </>
  );
};
const mapStateToProps = ({ data: { user, auth } }) => ({ user, auth });

export default connect(mapStateToProps)(App);
