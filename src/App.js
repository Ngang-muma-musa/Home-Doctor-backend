import React, { Fragment } from 'react';
import Signup from './components/Pages/Signup';
import Signin from './components/Pages/Signin';
import Navbar from './components/Layouts/Navbar';
import AuthLayout from './components/Auth form/AuthLayout';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <AuthLayout />
    </Fragment>
  );
};

export default App;
