import React, { useState } from "react";
import { Link } from "react-router-dom";
const LoginPage = (props) => {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(uname);
  };
  return (
    <div className='Login'>
      <h1> Login and Order using your Karma Kofi Account!</h1>
      <p>
        Indulge yourself with our original and locally brewed drinks fresh from
        the Mountains of Cordillera.{" "}
      </p>
      <br />
      <br />
      <div className='LoginContainer'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='uname'>
            <b>Username</b>
          </label>
          <br />
          <input
            type='text'
            id='uname'
            name='uname'
            placeholder='Type Your Username'
            required
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />

          <br />
          <br />

          <label htmlFor='pass'>
            <b>Password</b>
          </label>
          <br />

          <input
            type='password'
            id='pass'
            name='pass'
            placeholder='Type Your Password'
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <br />

          <div class='CheckboxContainer'>
            <input type='checkbox' id='checkbox' name='checkbox' />
            <p className='remember'> Remember this computer </p>
          </div>
          <input className='submitBtn' type='submit' value='Login' />
        </form>
        <Link to='http://localhost:3000/register' className='Register'>
          <p>Don't have an account? Register here.</p>
        </Link>
        <Link to='http://localhost:3000/forget' className='Forget'>
          <p>Forgot Password?</p>
        </Link>
      </div>
      <br />
    </div>
  );
};

export default LoginPage;
