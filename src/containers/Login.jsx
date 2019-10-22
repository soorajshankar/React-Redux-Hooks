import React from "react";
import LoginComponent from "../components/Login";
import { connect } from "react-redux";
import { setAuthUser } from "../redux/actionCreators";

const Login = props => <LoginComponent title="Login" viewMode {...props} />;

const mapStateToProps = state => ({
  value: state.authUser,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  setAuthUser: creds => dispatch(setAuthUser(creds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
