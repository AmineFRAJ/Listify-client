import React, { useState } from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../JS/Actions/AuthActions";

const Login = () => {
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    dispatch(login({ user, navigate }));
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-lg-4 column col-left order-lg-1 order-2 d-flex justify-content-center align-items-center">
            <h1 className="text-center sign-up-heading">
              Sign <br />
              In
            </h1>
          </div>

          {/* Column 2 */}
          <div className="col-lg-8 column order-lg-2 order-1 d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column">
              <label htmlFor="email">Email address: </label>
              <input
                onChange={(e) => handleChange(e)}
                className="p-2 mb-3"
                type="email"
                name="email"
                placeholder="example@example.com..."
              />
              <label htmlFor="email">Password: </label>
              <input
                onChange={(e) => handleChange(e)}
                className="p-2 mb-3"
                type="password"
                name="password"
                placeholder="6 characters long"
              />
              <button className="btn"  onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
