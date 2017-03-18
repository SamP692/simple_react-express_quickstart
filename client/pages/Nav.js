import React, { Component } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: React.PropTypes.element,
};

export default class Nav extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div id="navbar">
          <Link to="/"><div id="logo" /></Link>
          <Link to="/">Home</Link>
          <Link to="/placeholder">Placeholder</Link>
        </div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

Nav.propTypes = propTypes;
