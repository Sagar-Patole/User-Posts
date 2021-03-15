import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem = props => {
  return (
    <div>
      <li className="nav-item">
        <NavLink to={props.path} className="nav-link">
          {props.children}
        </NavLink>
      </li>
    </div>
  );
};

export default NavigationItem;
