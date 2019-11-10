import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { withCookies } from "react-cookie";

import Header from "./component/header/Header.component";
import Homepage from "./pages/homepage/homepage.component";
import SignUp from "./pages/signUp/SignUp.component";
import SignIn from "./pages/signIn/SignIn.component";
import Request from "./pages/request/Request.component";
import MyAccount from "./pages/myaccount/MyAccount.component";
import Error404 from "./pages/Error404/Error404.component";

const App = ({ user, cookies }) => {
  console.log(cookies);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route
          exact
          path="/signin"
          render={() =>
            user._id ? (
              <Redirect to="/myaccount" cookies={cookies} />
            ) : (
              <SignIn />
            )
          }
        ></Route>
        <Route
          exact
          path="/signup"
          render={() => (user._id ? <Redirect to="/myaccount" /> : <SignUp />)}
        ></Route>
        <Route exact path="/requests" component={Request}></Route>
        <Route exact path="/myaccount" component={MyAccount}></Route>
        <Route path="/" component={Error404}></Route>
      </Switch>
    </>
  );
};
const mapStateToProps = ({ data: { user } }) => ({ user });

export default withCookies(connect(mapStateToProps)(App));
