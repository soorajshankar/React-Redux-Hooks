import React from "react";
import { connect } from "react-redux";
import { softRegister } from "../redux/actionCreators";
import { LOGIN_VIEWMODES } from "../commons/constants";
import RegistrationComponent from "../components/Registration";
import { Redirect } from "react-router-dom";

const Registration = ({ softRegister, softUser }) => {
  if (Object.keys(softUser).length)
    return <Redirect to={{ pathname: "/register-confirmation" }} />;
  const onSubmit = values => {
    softRegister(values);
  };
  return (
    <RegistrationComponent
      title="Register User"
      viewmode={LOGIN_VIEWMODES.REGISTER}
      onSubmit={onSubmit}
    />
  );
};

const mapStateToProps = state => ({
  softUser: state.softUser
});

const mapDispatchToProps = dispatch => ({
  softRegister: creds => dispatch(softRegister(creds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration);
