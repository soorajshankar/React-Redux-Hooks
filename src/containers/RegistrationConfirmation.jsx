import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../redux/actionCreators";
import RegistrationConfComponent from "../components/RegistrationConfirmation";
import { Redirect } from "react-router-dom";

const RegistrationConfirmation = ({ registerUser, softUser }) => {
  if (!Object.keys(softUser).length)
    return <Redirect to={{ pathname: "/Register" }} />;
  const onSubmit = values => {
    registerUser(values);
  };
  return <RegistrationConfComponent {...{ onSubmit, softUser }} />;
};

const mapStateToProps = state => ({
  softUser: state.softUser
});

const mapDispatchToProps = dispatch => ({
  registerUser: creds => dispatch(registerUser(creds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationConfirmation);
