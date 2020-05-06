import React, { Component, Fragment } from 'react';
import proptypes from 'prop-types';

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <nav>
            <ul>
              <li>RocketBook</li>
            </ul>
          </nav>
        </div>
      </Fragment>
    );
  }
}
