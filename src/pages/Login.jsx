import React, { useState } from "react";

//Router
import { Link } from "react-router-dom";

//components
import { object, string } from "yup";
import { errorMessage, successMessage } from "../utils/swal";

const Login = () => {
  //states
  const [validation, setValidation] = useState({
    email: "",
    pass: "",
  });

  const schemaLog = object({
    pass: string()
      .trim()
      .required("Password was not entered")
      .min(8, "Minimum 8 character")
      .max(18, "Maximum 18 character"),
    email: string()
    .email("Must be a valid email")
      .trim()
      .required("Email was not entered"),
  });

  const changeHandle = (e) => {
    setValidation({ ...validation, [e.target.name]: e.target.value });
  };

  const loginSubmission = async (e) => {
    e.preventDefault();
    try {
      await schemaLog.validate(validation);
      successMessage("You entered successfully");
    } catch (error) {
      errorMessage(error.message);
    }
  };

  return (
    <section className="login">
      <div className="container">
        <div className="row">
          <h2 className="sectionTitle">LOGIN</h2>
          <div className="formSection">
            <form className="input">
              <input
                id="email"
                type="email"
                name="email"
                className="input_field"
                placeholder="Email"
                aria-required="true"
                autoComplete="email"
                value={schemaLog.email}
                onChange={changeHandle}
              ></input>
              <input
                id="password"
                type="password"
                name="pass"
                className="input_field"
                placeholder="Password"
                aria-required="true"
                autoComplete="password"
                value={schemaLog.pass}
                onChange={changeHandle}
              ></input>
              <Link to="">Forgot your password?</Link>
              <div className="btn">
                <button
                  type="submit"
                  className="primaryBtn"
                  onClick={loginSubmission}
                >
                  SIGN IN
                </button>
                <Link to="/register">Create account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
