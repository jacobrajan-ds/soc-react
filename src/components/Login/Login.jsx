import React, { useState } from "react";
import Cards from "../../shared/Card/Cards";
import "./Login.css";
import Logo from "../../assets/logo.png";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import ForgetPwd from "../ForgetPassword/ForgetPassword";

const Login = () => {
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveRight, setMoveRight] = useState(true);

  return (
    <div className="login-container">
      <div className="img-container">
        <img src={Logo} alt="" />
      </div>
      <div className="card-box">
        <div className={moveRight ? "card-1" : "card-2"}>
          <Cards>
            <ForgetPwd></ForgetPwd>
            {/* <h1>Forget Password</h1>
            <ForgetPassword></ForgetPassword> */}
          </Cards>
        </div>
        <div className={moveLeft ? "card-3" : moveRight ? "card-2" : "card-1"}>
          <Cards>
            <div className="login-form">
              <h2>Log in</h2>

              <div>
                <p>Email address</p>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="box"
                />
              </div>

              <div>
                <p>Password</p>

                <input
                  type="password"
                  placeholder="Enter your email address"
                  className="box"
                />
              </div>
              <div className="check">
                <input type="checkbox" name="" id="" />
                <span>Remember me</span>
              </div>

              <button className="sub-btn" onClick={() => setMoveLeft(true)}>
                SUBMIT
              </button>
              <span className="forget" onClick={() => setMoveRight(false)}>
                Forget your password?
              </span>
            </div>
          </Cards>
        </div>
        <div className={moveLeft ? "card-2" : "card-3"}>
          <Cards>
            <h1>OTP Screen</h1>
          </Cards>
        </div>
      </div>
    </div>
  );
};

export default Login;
