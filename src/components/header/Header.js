import React, { PureComponent } from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
class Header extends PureComponent {
  render() {
    return (
      <div>
        <nav className="navigation">
          <img src={logo} alt="" />
          <div>
            <a href="/Shop">Shop</a>
            <a href="/orders">orders</a>
            <a href="/inventory">Manage Inventory</a>
            <a href="/about">About</a>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {};

export default Header;
