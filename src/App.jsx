import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./commons/router";
import Login from "./containers/Login";
import './App.css';
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { connect } from "react-redux";
import { setAuthUser } from "./redux/actionCreators";
import Dashboard from "./containers/Dashboard";
import Statistics from "./containers/Statistics";
import { Layout } from "antd";
import Registration from "./containers/Registration";
import RegistrationConfirmation from "./containers/RegistrationConfirmation";

/**
 * # App Component
 *
 * @param {*} { authUser }
 * @returns
 */
const App = ({ authUser }) => {
  const authed = authUser ? true : false;// to bool 
  return (
    <Layout style={{ height: "100vh" }}>
      <Router>
        <div>
          <Switch>
            <PrivateRoute
              path="/dashboard"
              component={Dashboard}
              {...{ authed }}
            />{" "}
            <PrivateRoute
              path="/statistics"
              component={Statistics}
              {...{ authed }}
            />
            <PublicRoute path="/login" component={Login} {...{ authed }} />
            <PublicRoute path="/register" component={Registration} {...{ authed }} />
            <PublicRoute path="/register-confirmation" component={RegistrationConfirmation} {...{ authed }} />
            <PublicRoute path="/" component={Login} {...{ authed }} />
          </Switch>
        </div>
      </Router>
    </Layout>
  );
};

const mapStateToProps = state => ({
  authUser: state.authUser,
});

const mapDispatchToProps = dispatch => ({
  setAuthUser: creds => dispatch(setAuthUser(creds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
