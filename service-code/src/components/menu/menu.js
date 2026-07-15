import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return(
    <div>
      <p>Welcome to Menu Page</p>
      <Link to="/usershow">User Show</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/usersearch">User Search</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/postshow">Post Show</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/postsearch">Post Search</Link>
            <hr/>
    </div>
  )
}

export default Menu;