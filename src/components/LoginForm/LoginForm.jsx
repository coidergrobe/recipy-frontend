import React from "react";
import SimpleLabel from "../SimpleLabel";
import SimpleInput from "../SimpleInput";
import SimpleButton from "../SimpleButton";
import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="wrapper">
      <div className="box">
        <div className="box-form">
          <form action="">
            <div className="input-wrapper">
              <div>
                <SimpleLabel name="Username" />
              </div>

              <div>
                <SimpleInput type="text" />
              </div>
            </div>

            <div className="input-wrapper">
              <div class="flex-between">
                <div>
                  <SimpleLabel name="Password" />
                </div>
                <div>
                  <span>Forgot password?</span>
                </div>
              </div>

              <div>
                <SimpleInput type="password" />
              </div>
            </div>
            <div>
              <SimpleButton name="Login" />
            </div>
          </form>
          <div className="box-2">
            <p>
              Don't have an account yet? <span>Sign up now</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
