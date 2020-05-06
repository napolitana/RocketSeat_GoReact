import React, { Component, Fragment } from 'react';
import Proptypes from 'prop-types';

import PostHeader from './post-header';

export default class Post extends Component {
  render() {
    return (
      <Fragment>
        <section className="main">
          <div className="post">
            <PostHeader></PostHeader>
            <p>
              Morbi efficitur dolor vestibulum iaculis consectetur.
              Duis feugiat dolor at odio sagittis, ac lacinia arcu
              porttitor. Cras eu orci tincidunt, sollicitudin orci
              elementum, pellentesque ante. Suspendisse sit amet
              volutpat augue. Vivamus non ex nibh. Pellentesque nec
              cursus orci. Cras ut tincidunt mi. Fusce quis quam ac
              justo lobortis sagittis. Integer bibendum, massa ut
              fermentum venenatis, magna metus rhoncus nibh, ut
              pulvinar nibh sem at nulla. Cras sit amet porta est.
              Nulla vestibulum consequat urna, eget suscipit turpis
              consectetur eget. In congue iaculis ipsum vitae euismod.
              Donec venenatis augue in gravida accumsan. Quisque
              tempus euismod pharetra. Quisque a mattis sem, sed
              gravida nulla. Mauris facilisis ut metus eget maximus.
              Phasellus aliquam urna sit amet euismod sollicitudin.
              Aenean iaculis vitae risus vitae vehicula. Sed id
              malesuada sapien. Cras venenatis fringilla dignissim.
              Maecenas tristique venenatis feugiat. Cras ac aliquet
              turpis, ut eleifend libero. Aenean porta elit
              condimentum ullamcorper convallis. Donec congue pulvinar
              placerat. Mauris a nunc eu sapien vestibulum consequat.
              Nunc imperdiet nisi auctor urna scelerisque, eget
              laoreet risus imperdiet.
            </p>
          </div>
        </section>
      </Fragment>
    );
  }
}
