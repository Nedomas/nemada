import React, { Component } from 'react';
import _ from 'lodash';

export default class Collage extends Component {
  render() {
    return (
      <section className='col-xs-6'>
        <div onClick={() => this.props.selectPart('top') }>
          TOP
        </div>
        <div onClick={() => this.props.selectPart('shirt') }>
          SHIRT
        </div>
        <div onClick={() => this.props.selectPart('boots') }>
          BOOTS
        </div>
      </section>
    );
  }
}
