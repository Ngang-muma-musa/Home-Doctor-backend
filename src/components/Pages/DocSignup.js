import React, { useState } from 'react';

const DocSignup = () => {
  const [user, setuser] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    password2: '',
    field: '',
  });
  const { fname, lname, email, password, password2, field } = user;
  const onClick = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    setuser({
      fname: '',
      lname: '',
      email: '',
      password: '',
      password2: '',
      field: '',
    });
  };

  return (
    <form className='signup-form' onSubmit={onSubmit}>
      <h2>Create your account</h2>
      <h4>
        Get in touch with Patients who need <br /> your help around the national
        territory
      </h4>
      <input
        type='text'
        placeholder='First Name'
        name='fname'
        value={fname}
        onClick={onClick}
        required
      />
      <input
        type='text'
        placeholder='Last Name'
        name='lname'
        value={lname}
        onClick={onClick}
        required
      />
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
        placeholder='Password'
        name='password'
        value={password}
        onClick={onClick}
        required
      />
      <input
        type='password'
        placeholder='Confirm Password'
        name='password2'
        value={password2}
        onClick={onClick}
        required
      />
      <input
        type='text'
        placeholder='Specialisation'
        name='field'
        value={field}
        onClick={onClick}
        required
        style={{ width: '75%' }}
      />
      <input type='submit' value='SIGN UP' />
    </form>
  );
};

export default DocSignup;
