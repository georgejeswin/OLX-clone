import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header__all">
        ALL CATEGORIES
      </Link>
      <Link to="/" className="header__items">
        ALL CATEGORIES
      </Link>
      <Link to="/" className="header__items">
        Cars
      </Link>
      <Link to="/" className="header__items">
        Motorcycles
      </Link>
      <Link to="/" className="header__items">
        Motorcycles
      </Link>
      <Link to="/" className="header__items">
        Mobile Phones
      </Link>
      <Link to="/" className="header__items">
        For Sale: Houses & Apartments
      </Link>
      <Link to="/" className="header__items">
        Scooters
      </Link>
      <Link to="/" className="header__items">
        Commercial & Other Vehicles
      </Link>
      <Link to="/" className="header__items">
        For rent: Houses & Apartments
      </Link>
    </div>
  );
};

export default Header;
