import React from 'react';
import { NavLink } from 'react-router-dom';

function SignedOutLink() {
  return (
    <ul className='right'>
      <li>
        <NavLink to='/'>Create Account</NavLink>
      </li>
      <li>
        <NavLink to='/'>Log In</NavLink>
      </li>
    </ul>
  );
}

export default SignedOutLink;
