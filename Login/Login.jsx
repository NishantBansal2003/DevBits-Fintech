import React from "react";
import "../styles/style.css";
function Login(props) {
  return (
    <div>
      <div className="head-design"></div>
      <div className="AlignCenter">
        <div className="container">
          <h2 className="login-title">
            {props.logInSignIn ? "Log In" : "Sign Up"}
          </h2>

          <form className="login-form">
            {!props.logInSignIn && (
              <div>
                <input
                  id="email"
                  type="name"
                  placeholder="Name"
                  name="email"
                  required
                />
              </div>
            )}
            <div>
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </div>

            <div>
              <input
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </div>
            {!props.logInSignIn && (
              <div>
                <input
                  id="password"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm password"
                  required
                />
              </div>
            )}
            <button className="btn btn--form" type="submit" value="Log in">
              {props.logInSignIn ? "Log In" : "Register"}
            </button>
            {props.logInSignIn && (
              <span>
                Don't have an account? <a href="#">Sign up</a>{" "}
              </span>
            )}
          </form>
        </div>{" "}
      </div>
    </div>
  );
}
export default Login;
