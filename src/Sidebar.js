import React from 'react';
import { slide as Menu } from 'react-burger-menu';
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
      <a className="menu-item" href="/parents">
              Parents
        </a>
      <a className="menu-item" href="/educator">
        Educators
      </a>
    </Menu>
  );
};
