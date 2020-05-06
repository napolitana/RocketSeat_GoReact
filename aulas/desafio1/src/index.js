import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './header';
import Post from './post';

import './style.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header></Header>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
