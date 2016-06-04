import React, { Component } from 'react';
import _ from 'lodash';

export default class Part extends Component {
  getItem() {
    return this.props[this.props.part];
  }

  render() {
    let item = this.getItem();
    var look = `module box-${this.props.part}`;
    if (item) {
      return (
        <div className="module" onClick={() => this.props.selectPart(this.props.part) }>
          {item.title}
        </div>
      );
    } else {
      return (
        <div className={look} onClick={() => this.props.selectPart(this.props.part) }>
          {this.props.part}
        </div>
      );
    }
  }
}
