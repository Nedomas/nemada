import React, { Component } from 'react';
import _ from 'lodash';

import Part from 'components/Part/Part';

export default class Collage extends Component {
  render() {
    return (
      <section className='col-xs-6'>
        <Part {...this.props} part='top'/>
        <Part {...this.props} part='bottom'/>
        <Part {...this.props} part='shoes'/>
      </section>
    );
  }
}
