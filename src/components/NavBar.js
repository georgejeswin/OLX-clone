import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav sticky-top">
        <Link to="/">
          <img
            className="nav__logo"
            src="https://www.logosvgpng.com/wp-content/uploads/2020/10/olx-logo-vector.png"
            alt=""
          />
        </Link>
        <div className="nav__country">
          <div className="nav__coutry-left">
            <i className="fas fa-search mr-2"></i>
            India
          </div>
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="nav__searchbar">
          <input
            type="text"
            className="nav__search"
            placeholder="Find Cars, Mobile Phones and more..."
          />
          <i className="fas fa-search"></i>
        </div>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle nav__drop"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            ENGLISH
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link to="/" className="dropdown-item" href="#">
              ENGLISH
            </Link>
            <Link to="/" className="dropdown-item" href="#">
              Hindi
            </Link>
          </div>
        </li>
        <Link to="/login" className="nav__login">
          <p>Login</p>
        </Link>
        <button className="nav__button">
          <i class="fas fa-plus"></i> Sell
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
