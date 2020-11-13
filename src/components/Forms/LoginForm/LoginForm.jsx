import React from "react";
import SimpleLabel from "../../SimpleLabel";
import SimpleInput from "../../SimpleInput";
import SimpleButton from "../../SimpleButton";
import "../Form.css";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <div className="wrapper">
      <div className="box">
        <div className="box-form">
          <div className="form-header-wrapper">
            <div className="logo">Logo</div>
            <div className="login-label">
              <h1>Login</h1>
            </div>
          </div>
          <form action="">
            <div className="input-wrapper">
              <div>
                <SimpleLabel name="Username" />
              </div>

              <div>
                <SimpleInput type="text" ph="Enter your username" />
              </div>
            </div>

            <div className="input-wrapper">
              <div className="flex-between">
                <div>
                  <SimpleLabel name="Password" />
                </div>
                <div>
                  <span>Forgot password?</span>
                </div>
              </div>

              <div>
                <SimpleInput type="password" ph="Enter your password" />
              </div>
            </div>
            <div className="button-wrapper">
              <SimpleButton name="Login" />
            </div>
          </form>
          <div className="box-2">
            <small className="grey-text">
              Don't have an account yet?
              <Link to="/signup">
                <b>Signup </b>
              </Link>
              now !
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
