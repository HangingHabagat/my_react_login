import React, { useState } from "react";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [cname, setCname] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(uname);
  };

  return (
    <div className='Register'>
      <h1> Register for a Karma Account!</h1>
      <p>
        We believe that everyone has the power to make a positive impact. Join
        us on our journey of spreading good karma and making the world a better
        place, one coffee at a time.{" "}
      </p>

      <form onSubmit={handleSubmit} className='register-form'>
        <label htmlFor='cname'>
          <b>Complete Name</b>
        </label>
        <br />
        <input
          type='text'
          id='cname'
          name='cname'
          placeholder='Juan dela Cruz'
          required
          value={cname}
          onChange={(e) => setCname(e.target.value)}
        />
        <br />
        <br />

        <label htmlFor='uname'>
          <b>Username</b>
        </label>
        <br />
        <input
          type='text'
          id='uname'
          name='uname'
          placeholder='jdcruz1996'
          required
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />
        <br />
        <br />
        <label for='email'>
          <b>E-mail</b>
        </label>
        <br />

        <input
          type='email'
          id='email'
          name='email'
          placeholder='jdcruz@website.com'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type='password'
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <input className='submitBtn' type='submit' value='Submit' />
      </form>

      <br />

      <Link to='http://localhost:3000/login' className='Login'>
        <p>Already have an account? Login here.</p>
      </Link>
    </div>
  );
};

export default RegisterPage;
