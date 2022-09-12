import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  

  return (
    <body>
    <nav>
      <div class="navbar">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          <div class="logo">
            <h2>JC Lippold</h2>
          </div>
          <div class="menu-items">
            <Link to="/jc">
              <li><a href="#">home</a></li>
            </Link>
            <Link to="/about">
              <li><a href="#">about</a></li>
            </Link>
            <Link to="/blogs">
              <li><a href="#">blogs</a></li>
            </Link>
            <Link to="/5keverday">
              <li><a href="#">5k everday conversations</a></li>
            </Link>
            <Link to="/#allthethings">
              <li><a href="#">#allthethings</a></li>
            </Link>
            <Link to="/jcapp">
              <li><a href="#">the JC app</a></li>
            </Link>
            <Link to="/speaking">
              <li><a href="#">speaking</a></li>
            </Link>
            <Link to="/contact">
              <li><a href="#">contact</a></li>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </body>
  );
}

export default Nav;
