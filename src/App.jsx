import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./component/header/Header.component";
import Homepage from "./pages/homepage/homepage.component";
import SignUp from "./pages/signUp/SignUp.component";
import SignIn from "./pages/signIn/SignIn.component";
import Account from "./pages/account/account";
import Error404 from "./pages/Error404/Error404.component";
import News from "./pages/news/News.page";
import InMail from "./pages/in-Mail/In-Mail.component";

const App = ({ auth }) => {
  return (
    <Fragment>
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
        <Route exact path="/news" component={News}></Route>
        <Route exact path="/In-mail" component={InMail}></Route>
        <Route path="/:username" component={Account}></Route>
        <Route path="/" component={Error404}></Route>
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = ({ data: { auth } }) => ({ auth });

export default connect(mapStateToProps)(App);
