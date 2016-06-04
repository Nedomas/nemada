import React, { Component } from 'react';
import _ from 'lodash';

export default class Part extends Component {
  getItem() {
    return this.props[this.props.part];
  }

  render() {
    let item = this.getItem();

    if (item) {
      return (
        <div onClick={() => this.props.selectPart(this.props.part) }>
          {item.title}
        </div>
      );
    } else {
      return (
        <div onClick={() => this.props.selectPart(this.props.part) }>
          {this.props.part}
        </div>
      );
    }
  }
}
