import React from "react";
import "./signin-and-signuppage.styles.scss";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

const SignInAndSignUp = () => (
  <div className="signinandsignup">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUp;
