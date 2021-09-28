import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
      <nav>
        <div className="menu">
          <a href="/shop">Shop</a>
          <a href="/order-review">Order Review</a>
          <a href="/manage-inventory">Manage Inventory Here</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
