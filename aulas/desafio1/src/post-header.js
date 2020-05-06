import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class PostHeader extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <div className="post-header">
            <ul>
              <li className="post-avatar">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
                  width="70px"
                  heigth="70px"
                ></img>
              </li>
              <li>
                <ul>
                  <li className="post-name">
                    Diego Schell Fernandes
                  </li>
                  <li className="post-time">Há 3 min</li>
                </ul>
              </li>
            </ul>
          </div>
        </header>
      </Fragment>
    );
  }
}
