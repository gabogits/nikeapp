import React, { Component } from "react";

import "./Header.css";

export default class Header extends Component {
  render() {
    return (

      <nav className="Menu">
        <ul className="MenuList">
          <li className="MenuItem">Men</li>
          <li className="MenuItem">Women</li>
          <li className="MenuItem">Kids</li>
          <li className="MenuItem">Nike By You</li>
        </ul>
      </nav>

    );
  }
}
