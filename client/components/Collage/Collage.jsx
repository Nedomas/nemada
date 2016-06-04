import React, { Component } from 'react';
import _ from 'lodash';

import Part from 'components/Part/Part';

export default class Collage extends Component {
  render() {
    return (
      <section className='col-xs-6'>
        <Part {...this.props} part='hat'/>
        <Part {...this.props} part='shirt'/>
        <Part {...this.props} part='boots'/>
      </section>
    );
  }
}
