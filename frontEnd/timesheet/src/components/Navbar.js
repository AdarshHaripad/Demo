import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/commonStyles.css"
import logo from './css/images/enxcl-new-logo.png'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar sticky-top navbar-light py-3 customColor">
          <div className="container-fluid">
            <img src={logo} alt="sample-logo" width="130" height="40"></img>
            <Link to="/">
            <button type="button" className="btn btn-outline-dark navFont">LOGOUT</button>
            </Link>
            </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;