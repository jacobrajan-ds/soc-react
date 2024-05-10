import React, { useState } from 'react';

function ForgetPwd() {
  const [moveLeft, setMoveLeft] = useState(false);
  const [moveRight, setMoveRight] = useState(false);

  return (
    <div className="login-form">
      <h2>Forgot password?</h2>

      <div>
        <p>No worries! Just enter your email and we’ll send you a reset password link.</p>
      </div>

      <div>
        <p>Email address</p>
        <input
          type="text"
          placeholder="Enter your email address"
          className="box"
        />
      </div>



      <button className="sub-btn" onClick={() => setMoveLeft(true)}>
        <b> Send Reset Link </b>
      </button>

      <span className="forget" > Just remember? 
      <span  onClick={() => setMoveLeft(true)} > <b> Login</b> </span>
      </span>
    </div>
  );
}

export default ForgetPwd;