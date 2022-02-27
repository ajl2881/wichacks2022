import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Route, Switch, Link } from "react-router-dom";
import './Sidebar.css';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/student">
        Students
      </a>
      <a className="menu-item" href="/parent">
              Parents
        </a>
      <a className="menu-item" href="/educator">
        Educators

      <Link to="/parent">Parents</Link>

      </a>
      <Switch>
      <Route path="/parent">
        <Parents />
      </Route>
      </Switch>
    </Menu>
  );
};
