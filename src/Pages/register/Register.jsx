import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="signup">
    <div className="container">
      <div className="row">
        {/* Column 1 */}
        <div className="col-lg-8 column  d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column">
            <label htmlFor="email">Name: </label>
            <input
              className="p-2 mb-3"
              type="username"
              name="username"
              placeholder="username..."
            />
            <label htmlFor="email">Email address: </label>
            <input
              className="p-2 mb-3"
              type="email"
              name="email"
              placeholder="example@example.com..."
            />
            <label htmlFor="email">Password: </label>
            <input
              className="p-2 mb-3"
              type="password"
              name="password"
              placeholder="6 characters long"
            />
              <button className="btn">Sign Up</button>
            </div>
          </div>
          <div className="col-lg-4 column  col-left d-flex justify-content-center align-items-center  ">
            <h1 className="text-center sign-up-heading">
              Sign <br />
              Up
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
