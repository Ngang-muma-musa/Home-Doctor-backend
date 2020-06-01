import React, { Fragment } from 'react';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Signup from '../Pages/Signup';
import Signin from '../Pages/Signin';
import docsignup from '../Pages/DocSignup';

const MainSignup = () => {
  return (
    <Router>
      <Fragment>
        <ul>
          <Link to='/docsignup'>
            <li>As Doctor</li>
          </Link>
          <Link to='/patientsignup'>
            <li>As Patient</li>
          </Link>
        </ul>
        <Route exact path='/patientsignup' component={Signup} />
        <Route exact path='/docsignup' component={docsignup} />
      </Fragment>
    </Router>
  );
};

export default MainSignup;
