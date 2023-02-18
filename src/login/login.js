import React from "react";
import style from "./login.css";
import cat from "./cat.png";
import google from "./logogg.png";
const Login = () => {
  return (
    <div className="container">
      <div className="frames">
        <form className="login">
          <div className="login-img">
            <img src={cat} />
          </div>
          <div className="login-text">
            <h2>Log in to your Account</h2>
            <span>Welcome back! Select method to log in:</span>
          </div>
          <div className="login-other">
            <div className="google">
              <div className="btn-google">
                <img src={google} />
                <span>Google</span>
              </div>
            </div>
            <div className="facebook">
              <div className="btn-facebook">
                <div className="logo-facebook">
                  <i class="fa-brands fa-facebook"></i>
                </div>
                <span>Facebook</span>
              </div>
            </div>
          </div>
          <div className="title-with-mail">
            <p>or continue with mail</p>
          </div>
          <div className="login-input">
            <label for="email" className="email">
              <i class="fa-regular fa-envelope"></i>
              <input type="email" id="email" placeholder="Email" />
            </label>
            <span className="showErrorEmail">
              Please check your email again
            </span>
            <label for="pass" className="pass">
              <i class="fa-solid fa-lock"></i>
              <input type="password" id="pass" placeholder="Password" />
            </label>
            <span className="showErrorPass">
              Please check your password again
            </span>
            <div className="forgotPass">
              <span>Forgot Password ?</span>
            </div>
            <div className="btnLogin">
              <button className="submitLogin">Login</button>
            </div>
            <div className="btnresgister">
              <span>Don't have an account?</span>
              <span className="nextFormResgister">Create an account</span>
            </div>
          </div>
        </form>
        <form className="resgister"></form>
        <div className="background"></div>
      </div>
    </div>
  );
};

export default Login;
