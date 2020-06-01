import React, { useState, Fragment } from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Signup from '../Pages/Signup';
import Signin from '../Pages/Signin';
import MainSignup from '../Pages/MainSignup';
import DocSignup from '../Pages/DocSignup';

const AuthLayout = () => {
  const [num, setnum] = useState({ a: 1, b: 0 });
  const { a, b } = num;
  const click = () => {
    setnum({ a: 1, b: 0 });
  };
  const click1 = () => {
    setnum({ a: 0, b: 1 });
  };
  return (
    <Router>
      <Fragment>
        <div className='auth-form'>
          <ul className='auth-links'>
            <Link to='/signup' style={{ textDecoration: 'none' }}>
              <li
                onClick={click}
                className='link1'
                style={{
                  backgroundColor:
                    a === 1 && b === 0 ? 'white' : 'rgba(221, 205, 205, 0.23)',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                SIGN UP
              </li>
            </Link>
            <Link to='/signin' style={{ textDecoration: 'none' }}>
              <li
                onClick={click1}
                className='link2'
                style={{
                  backgroundColor:
                    a === 0 && b === 1 ? 'white' : 'rgba(221, 205, 205, 0.23)',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                SIGN IN
              </li>
            </Link>
          </ul>

          <Switch>
            <Route exact path='/signup' component={MainSignup} />
            <Route exact path='/signin' component={Signin} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default AuthLayout;
