import React, { useState } from 'react';

const Signin = () => {
  const [user, setuser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;
  const onClick = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('logged in');
    setuser({ email: '', password: '' });
  };

  return (
    <form className='signin-form' onSubmit={onSubmit}>
      <h2>Sign in to your account</h2>
      <h4>
        Get treated today just by being home <br /> a single click an all is
        done
      </h4>

      <input
        type='email'
        placeholder='Email Address'
        name='email'
        value={email}
        onClick={onClick}
        required
      />
      <input
        type='password'
        placeholder='Password '
        name='password'
        value={password}
        onClick={onClick}
        required
      />

      <input type='submit' value='SIGN IN' />
    </form>
  );
};

export default Signin;
