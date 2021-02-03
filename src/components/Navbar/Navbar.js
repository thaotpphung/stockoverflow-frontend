import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Navbar">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top header-black">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              STOCKOVERFLOW
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navLinks, #logNavLinks"
              aria-label="Toggle navbar"
              aria-controls="navLinks"
              aria-expanded="false"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navLinks" class="collapse navbar-collapse">
              <div class="navbar-nav mr-auto pl-3">
                <Link class="nav-item nav-link" to="/" 
                activeClassName="activeRoute"
                activeStyle={{ color: 'red' }}>
                  HOME
                </Link>
                <Link
                  class="nav-item nav-link"
                  to="/dashboard"
                  activeStyle={{ color: 'red' }}
                >
                  DASHBOARD
                </Link>
                <Link
                  class="nav-item nav-link"
                  to="/portfolio"
                >
                  PORTFOLIO
                </Link>
                <Link
                  class="nav-item nav-link"
                  to="/alerts"
                >
                  ALERTS
                </Link>
              </div>
            </div>

            <div id="logNavLinks" class="collapse navbar-collapse">
              <div class="navbar-nav ml-auto pl-3">
                <Link class="nav-item nav-link" to="/signin">
                  LOG IN
                </Link>
                <Link class="nav-item nav-link" to="/signup">
                  SIGN UP
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
