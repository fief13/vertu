import React, { useState } from "react";
import { object, string } from "yup";
import { errorMessage, successMessage } from "../utils/swal";

const Register = () => {
  //states
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pass: "",
  });

  const shcemaRegister = object({
    pass: string()
      .trim("Must be characters")
      .required("Please fill the password")
      .min(8, "Minimum 8 character")
      .max(18, "Maximum 18 character")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&.])[A-Za-zd@$!%*?&.]{8,18}$/,
        "Password needs to contain one big letter,one small letter,one integer and one symbol"
      ),
    email: string()
      .trim()
      .required("Please fill the email")
      .email("Must be a valid email"),
    lastName: string()
      .trim("Must be characters")
      .required("Please fill the last name")
      .min(2, "Minimum 2 character")
      .max(20, "Maximum 20 character"),
    firstName: string()
      .trim()
      .required("Please fill the first name")
      .min(2, "Minimum 2 character")
      .max(40, "Maximum 40 character"),
  });

  const registerHandle = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const registerSubmission = async (e) => {
    e.preventDefault();
    try {
      await shcemaRegister.validate(register);
      successMessage("Your account created successfully");
    } catch (error) {
      errorMessage(error.message);
    }
  };

  return (
    <section className="register">
      <div className="container">
        <div className="row">
          <h2 className="sectionTitle">CREATE ACCOUNT</h2>
          <div className="formSection">
            <form className="input">
              <input
                type="text"
                id="name"
                name="firstName"
                className="input_field"
                placeholder="First name"
                aria-required="true"
                autoComplete="name"
                value={shcemaRegister.firstName}
                onChange={registerHandle}
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="input_field"
                placeholder="Last name"
                aria-required="true"
                autoComplete="name"
                value={shcemaRegister.lastName}
                onChange={registerHandle}
              />
              <input
                id="email"
                type="email"
                name="email"
                className="input_field"
                placeholder="Email"
                aria-required="true"
                autoComplete="email"
                value={shcemaRegister.email}
                onChange={registerHandle}
              ></input>
              <input
                id="password"
                type="password"
                name="pass"
                className="input_field"
                placeholder="Password"
                aria-required="true"
                autoComplete="password"
                value={shcemaRegister.pass}
                onChange={registerHandle}
              ></input>

              <div className="btn">
                <button
                  type="submit"
                  onClick={registerSubmission}
                  className="primaryBtn"
                >
                  CREATE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
