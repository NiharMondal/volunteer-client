import React, { useContext } from 'react';
import {Route,Redirect}from 'react-router-dom'
import { UserContext } from '../../App';
const Privateroute = ({ children, ...rest }) => {
  const [user]=useContext(UserContext)
  return (
    <Route
    {...rest}
    render={({ location }) =>
      user.email ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/auth",
            state: { from: location }
          }}
        />
      )
    }
  />
  );
};

export default Privateroute;