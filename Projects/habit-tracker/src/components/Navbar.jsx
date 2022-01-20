import React, { Component } from "react";

class Navbar extends Component {
  render() {
    console.log('navbar');
    return (
      <div className="navbar">
        <nav className="navbar-logo fas fa-book"></nav>
        <span>Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Navbar;
