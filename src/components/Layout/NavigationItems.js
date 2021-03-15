import React from 'react';
import NavigationItem from './NavigationItem';

const NavigationItems = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <ul className="nav">
            {!props.auth ? (
              <NavigationItem path="/login" exact>
                Login
              </NavigationItem>
            ) : null}
            {props.auth ? (
              <NavigationItem path="/home" exact>
                Home
              </NavigationItem>
            ) : null}
            {props.auth ? (
              <NavigationItem path="/logout" exact>
                Logout
              </NavigationItem>
            ) : null}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationItems;
