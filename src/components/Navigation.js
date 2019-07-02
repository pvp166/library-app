import React from 'react';
import {NavLink} from 'react-router-dom';
const Navigation = () => {
    return (
        <div>
          <ul>
            <li><NavLink to="/items">Items</NavLink></li>
            <li><NavLink to="/search">Search</NavLink></li>
            <li><NavLink to="/edit">Edit</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
      </div>
    );
};
export default Navigation;